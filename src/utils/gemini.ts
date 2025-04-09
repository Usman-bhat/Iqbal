import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the model
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export async function translateWithGemini(text: string, type: 'word' | 'line') {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Detect language and create appropriate prompt
    const prompt = type === 'word' 
      ? `Analyze this word in context of Urdu/Persian poetry: "${text}"
         Return JSON in this exact format:
         {
           "translation": "English translation",
           "definition": "Brief meaning and usage",
           "language": "detected language (Urdu or Persian)",
           "urduTranslation": "Urdu translation (only if Persian)"
         }`
      : `Translate this poetry line: "${text}"
         Return JSON in this exact format:
         {
           "translation": "English translation",
           "explanation": "Brief poetic meaning"
         }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let textResponse = response.text();

    // Clean up the response
    textResponse = textResponse.replace(/```json\n?|\n?```/g, '').trim();

    try {
      const parsed = JSON.parse(textResponse);
      return {
        ...parsed,
        error: false
      };
    } catch (parseError) {
      console.error('Parse error:', parseError);
      // Fallback response
      return {
        error: true,
        message: 'Failed to parse translation',
        translation: text,
        language: 'unknown'
      };
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      error: true,
      message: 'Translation service unavailable',
      translation: text,
      language: 'unknown'
    };
  }
}

// Cache implementation with types
interface CacheEntry {
  data: any;
  timestamp: number;
}

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const translationCache = new Map<string, CacheEntry>();

export function getCachedTranslation(text: string, type: 'word' | 'line'): any | null {
  const key = `${type}:${text}`;
  const cached = translationCache.get(key);
  
  if (!cached) return null;
  
  // Check if cache has expired
  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    translationCache.delete(key);
    return null;
  }
  
  return cached.data;
}

export function setCachedTranslation(text: string, type: 'word' | 'line', data: any): void {
  const key = `${type}:${text}`;
  translationCache.set(key, {
    data,
    timestamp: Date.now()
  });
}