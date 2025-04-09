"use client";
import React, { useState, useEffect } from 'react';
import { Typography, Alert } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ListCard } from "@/components/list-card";
import { useTheme } from '@/app/ThemeProvider';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import poemListData from '@/data/poem_list.json';

interface PoemItem {
  _id: number;
  title: string;
  book_id: number;
  //data: string;
}

export function Getlist({ bookId }: { bookId: string }) {
  const { theme } = useTheme();
  const [items, setItems] = useState<PoemItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPoems = () => {
      try {
        // Filter poems by book_id and sort by _id
        const filteredPoems = poemListData
          .filter(poem => poem.book_id === parseInt(bookId))
          .sort((a, b) => a._id - b._id);
        setItems(filteredPoems);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Failed to load poems'));
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to simulate loading for better UX
    setTimeout(loadPoems, 500);
  }, [bookId]);

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((n) => (
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
      <div className="container-custom py-8">
        <Alert className="bg-red-50 text-red-800">
          {error.message || "Something went wrong. Please refresh"}
        </Alert>
      </div>
    );
  }

  return (
    <section className="bg-[rgb(var(--color-primary))] py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <Typography 
            placeholder="poem" 
            className="text-3xl font-bold text-[rgb(var(--color-text))]"
          >
            Poems
          </Typography>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.length > 0 ? (
            items.map((item) => (
              <ListCard
                key={item._id}
                bname={item.title}
                id={item._id.toString()}
                bookId={bookId}
                theme={theme}
              />
            ))
          ) : (
            <Alert className="col-span-full bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))]">
              Nothing found
            </Alert>
          )}
        </div>
      </div>
    </section>
  );
}

export default Getlist;
