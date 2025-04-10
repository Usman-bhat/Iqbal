"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/ThemeProvider";
import { motion } from "framer-motion";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { db } from "@/app/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FontSizeControl } from "@/components/font-size-control";
import { Cache } from '@/utils/cache';
import { WordDefinitionSheet } from '@/components/word-definition-sheet';

async function fetchFirebase(poemid) {
  const qrysnap = await getDocs(query(collection(db, "poems"), where("_id", "==", parseInt(poemid))));
  if (qrysnap.empty) {
    throw new Error("No document found with the specified ID");
  }
  const doc = qrysnap.docs[0].data();
  return { id: qrysnap.docs[0].id, ...doc };
}

export function Getpoem({ bookId, poemId }) {
  const { theme } = useTheme();
  const next = parseInt(poemId) + 1;
  const prev = parseInt(poemId) > 1 ? parseInt(poemId) - 1 : 1;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fontSize, setFontSize] = useState(24); // Default font size
  const [selectedText, setSelectedText] = useState<{ text: string; type: 'word' | 'line' } | null>(null);
  const cache = Cache.getInstance();

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 40)); // Max size 40px
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 16)); // Min size 16px
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first
        const cachedData = cache.get(`poem-${poemId}`);
        if (cachedData) {
          setItem(cachedData);
          setLoading(false);
          return;
        }

        const data = await fetchFirebase(poemId);
        // Store in cache
        cache.set(`poem-${poemId}`, data);
        setItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [poemId]);

  const handleWordClick = (word: string) => {
    setSelectedText({ text: word, type: 'word' });
  };

  const handleLineClick = (line: string) => {
    setSelectedText({ text: line, type: 'line' });
  };

  // Add theme-specific styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'dark':
        return {
          poetry: {
            fontFamily: 'jameelFont, Noto Nastaliq Urdu, serif',
            fontSize: `${fontSize}px`,
            lineHeight: '2.5',
            letterSpacing: '0.03em',
            fontWeight: '500',
            color: 'rgb(var(--color-text))',
            textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'
          },
          container: {
            background: 'rgb(var(--color-secondary))',
            boxShadow: '0 4px 6px -1px rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem'
          }
        };
      default:
        return {
          poetry: {
            fontFamily: 'jameelFont, Noto Nastaliq Urdu, serif',
            fontSize: `${fontSize}px`,
            lineHeight: '2',
            letterSpacing: '0.02em',
            fontWeight: '400'
          },
          container: {
            background: 'rgb(var(--color-secondary))',
            borderRadius: '1rem',
            padding: '2rem'
          }
        };
    }
  };

  const themeStyles = getThemeStyles();

  const renderPoemText = (text: string) => {
    return text.split('\n').map((line, lineIndex) => (
      <motion.div 
        key={`line-${lineIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: lineIndex * 0.1 }}
        className="mb-8 text-right urdu-text flex flex-wrap justify-center gap-4" 
        dir="rtl"
        onClick={() => handleLineClick(line)}
      >
        {line.split(/\s+/).map((word, wordIndex) => (
          <motion.span
            key={`word-${wordIndex}`}
            whileHover={{ scale: 1.05 }}
            className={`
              inline-block cursor-pointer px-2
              hover:text-[rgb(var(--color-accent))]
              transition-all duration-300
              hover:bg-[rgb(var(--color-secondary))]
              rounded-md
            `}
            onClick={(e) => {
              e.stopPropagation();
              handleWordClick(word);
            }}
            style={themeStyles.poetry}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    ));
  };

  if (loading) {
    return (
      <div className="container-custom py-12">
        <Skeleton 
          height={400} 
          className="bg-[rgb(var(--color-secondary))]"
        />
      </div>
    );
  }

  if (error || !item || Object.keys(item).length === 0) {
    return (
      <div className="container-custom py-12">
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <p className="text-red-800">
            {error ? "Something went wrong. Please refresh." : "No data found."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[rgb(var(--color-primary))] py-12"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl urdu-text md:text-3xl font-bold text-center mb-8 text-[rgb(var(--color-text))]"
            >
              {item.title}
            </motion.h1>

            <FontSizeControl
              fontSize={fontSize}
              onIncrease={increaseFontSize}
              onDecrease={decreaseFontSize}
            />

            <div style={themeStyles.container}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-[rgb(var(--color-text))]"
              >
                {renderPoemText(item.data)}
              </motion.div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <motion.a
                href={`/${bookId}/${prev}`}
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 p-3 rounded-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Previous</span>
              </motion.a>

              <motion.a
                href={`/${bookId}/${next}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 p-3 rounded-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-accent))] hover:text-white transition-all"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRightIcon className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <WordDefinitionSheet
        text={selectedText?.text || ''}
        type={selectedText?.type || 'word'}
        isOpen={!!selectedText}
        onClose={() => setSelectedText(null)}
      />
    </>
  );
}

export default Getpoem;
