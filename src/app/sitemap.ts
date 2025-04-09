import { MetadataRoute } from 'next';
import booksData from '@/data/books.json';
import poemListData from '@/data/poem_list.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alamaiqbal.vercel.app';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }));

  // Dynamic book pages
  const bookPages = booksData.map(book => ({
    url: `${baseUrl}/${book._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic poem pages
  const poemPages = poemListData.map(poem => ({
    url: `${baseUrl}/${poem.book_id}/${poem._id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...bookPages, ...poemPages];
}