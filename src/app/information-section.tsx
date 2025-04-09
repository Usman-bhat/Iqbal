"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import InfoCard from "@/components/info-card";
import { useTheme } from './ThemeProvider';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import booksData from '@/data/books.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function InformationSection() {
  const { theme } = useTheme();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBooks = () => {
      try {
        // Sort books by order_by field
        const sortedBooks = [...booksData].sort((a, b) => a.order_by - b.order_by);
        setItems(sortedBooks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to simulate loading for better UX
    setTimeout(loadBooks, 500);
  }, []);

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="card bg-[rgb(var(--color-secondary))] p-6">
              <Skeleton height={200} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-custom py-20">
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <ExclamationCircleIcon className="mx-auto h-12 w-12 text-red-400" />
          <h3 className="mt-4 text-lg font-semibold text-red-800">
            Oops! Something went wrong
          </h3>
          <p className="mt-2 text-red-600">
            Please refresh the page to try again
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[rgb(var(--color-primary))] py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <BookOpenIcon className="mx-auto h-12 w-12 text-[rgb(var(--color-accent))]" />
          <h2 className="mt-4 text-3xl font-bold text-[rgb(var(--color-text))]">
            Literary Collection
          </h2>
          <p className="mt-2 text-[rgb(var(--color-text))] opacity-80">
            Explore the timeless works of Allama Iqbal
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, idx) => (
            <motion.div key={item._id} variants={item}>
              <InfoCard
                icon={BookOpenIcon}
                bname={item.name}
                id={item._id}
                language={item.language}
                theme={theme}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default InformationSection;
