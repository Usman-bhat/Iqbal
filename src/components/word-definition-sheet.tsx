import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { getWordDefinitions, translateLine } from '@/utils/translator';

interface Props {
  text: string;
  isOpen: boolean;
  onClose: () => void;
  type: 'word' | 'line';
}

interface Translation {
  translation: string;
  definition?: string;
  urduTranslation?: string;
  explanation?: string;
}

export function WordDefinitionSheet({ text, isOpen, onClose, type }: Props) {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && text) {
      fetchTranslations();
    }
  }, [text, isOpen]);

  const fetchTranslations = async () => {
    setLoading(true);
    setError(null);
    try {
      if (type === 'word') {
        const results = await getWordDefinitions(text);
        if (results.length === 0) {
          setError('No translation available');
        } else {
          setTranslations(results);
        }
      } else {
        const result = await translateLine(text);
        setTranslations([result]);
      }
    } catch (err) {
      setError('Translation service unavailable. Please try again later.');
      console.error('Translation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(var(--color-primary))] rounded-t-2xl shadow-2xl"
          style={{ maxHeight: '80vh' }}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0.2}
        >
          {/* Header */}
          <div className="p-4 border-b border-[rgb(var(--color-secondary))]">
            <div className="flex items-center justify-between">
              <h3 
                className="text-xl font-bold text-[rgb(var(--color-text))]"
                style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}
                dir="rtl"
              >
                {text}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[rgb(var(--color-secondary))]"
              >
                <XMarkIcon className="h-6 w-6 text-[rgb(var(--color-text))]" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(80vh - 4rem)' }}>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[rgb(var(--color-accent))]" />
              </div>
            ) : error ? (
              <div className="text-center text-red-500 p-4">
                {error}
              </div>
            ) : translations.length > 0 ? (
              <div className="space-y-6">
                {translations.map((translation, index) => (
                  <div key={index} className="bg-[rgb(var(--color-secondary))] rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-[rgb(var(--color-text))]">
                      English Translation
                    </h4>
                    <p className="text-[rgb(var(--color-text))]">
                      {translation.translation}
                    </p>

                    {translation.definition && (
                      <div className="mt-4">
                        <h4 className="font-bold mb-2 text-[rgb(var(--color-text))]">
                          Definition
                        </h4>
                        <p className="text-[rgb(var(--color-text))]">
                          {translation.definition}
                        </p>
                      </div>
                    )}

                    {translation.urduTranslation && (
                      <div className="mt-4">
                        <h4 className="font-bold mb-2 text-[rgb(var(--color-text))]">
                          Urdu Translation
                        </h4>
                        <p 
                          className="text-[rgb(var(--color-text))]"
                          dir="rtl"
                          style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}
                        >
                          {translation.urduTranslation}
                        </p>
                      </div>
                    )}

                    {translation.explanation && (
                      <div className="mt-4">
                        <h4 className="font-bold mb-2 text-[rgb(var(--color-text))]">
                          Explanation
                        </h4>
                        <p className="text-[rgb(var(--color-text))]">
                          {translation.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-[rgb(var(--color-text))] opacity-70">
                No translation available
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}