interface Translation {
  translation: string;
  definition?: string;
  urduTranslation?: string;
  explanation?: string;
  language?: string;
}

interface CacheEntry {
  data: Translation;
  timestamp: number;
}

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
const translationCache = new Map<string, CacheEntry>();

const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

async function translateText(text: string, targetLang: string, sourceLang: string = 'auto') {
  try {
    // Add email parameter for higher daily limit (optional)
    const response = await fetch(
      `${MYMEMORY_API_URL}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}&de=govthospitalsafty@gmail.com`
    );

    if (!response.ok) {
      throw new Error('Translation request failed');
    }

    const data = await response.json();
    
    // Add rate limiting check
    if (data.responseStatus === 429) {
      throw new Error('Translation quota exceeded. Please try again later.');
    }
    
    return data.responseData?.translatedText || null;
  } catch (error) {
    console.error('Translation error:', error);
    return null;
  }
}

// Modify the translate function to use only translateText
export async function translate(text: string, type: 'word' | 'line'): Promise<Translation> {
  const cacheKey = `${type}:${text}`;
  const cached = translationCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    if (type === 'word') {
      const [englishTrans, urduTrans] = await Promise.all([
        translateText(text, 'en', 'ur'),
        translateText(text, 'ur', 'fa')
      ]);

      const result = {
        translation: englishTrans || text,
        urduTranslation: urduTrans,
        language: text.match(/[\u0750-\u077F]/) ? 'Persian' : 'Urdu'
      };

      translationCache.set(cacheKey, {
        data: result,
        timestamp: Date.now()
      });

      return result;
    } else {
      const englishTrans = await translateText(text, 'en', 'ur');

      const result = {
        translation: englishTrans || text,
        explanation: `Translation of: ${text}`
      };

      translationCache.set(cacheKey, {
        data: result,
        timestamp: Date.now()
      });

      return result;
    }
  } catch (error) {
    console.error('Translation error:', error);
    return {
      translation: text,
      error: true,
      message: 'Translation failed'
    };
  }
}

// Helper function to detect script
function isUrduText(text: string): boolean {
  const urduChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return urduChars.test(text);
}

export async function getWordDefinitions(text: string): Promise<Translation[]> {
  try {
    const isUrdu = /[\u0600-\u06FF]/.test(text); // Check if text contains Urdu/Persian characters
    let translations: Translation[] = [];

    if (isUrdu) {
      // For Urdu words, get English translation
      const englishTrans = await translateText(text, 'en', 'ur');
      if (englishTrans) {
        translations.push({
          translation: englishTrans,
          language: 'English'
        });
      }
    } else {
      // For Persian words, get both Urdu and English translations
      const [urduTrans, englishTrans] = await Promise.all([
        translateText(text, 'ur', 'fa'),
        translateText(text, 'en', 'fa')
      ]);

      if (urduTrans) {
        translations.push({
          translation: urduTrans,
          language: 'Urdu',
          urduTranslation: urduTrans
        });
      }
      if (englishTrans) {
        translations.push({
          translation: englishTrans,
          language: 'English'
        });
      }
    }

    return translations;
  } catch (error) {
    console.error('Translation error:', error);
    return [];
  }
}

export async function translateLine(text: string): Promise<Translation> {
  try {
    // Translate the line to English
    const englishTrans = await translateText(text, 'en', 'ur');
    
    return {
      translation: englishTrans || text,
      explanation: `English translation of: ${text}`
    };
  } catch (error) {
    console.error('Line translation error:', error);
    throw new Error('Translation failed');
  }
}