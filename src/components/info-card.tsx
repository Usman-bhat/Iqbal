"use client"

import { useTheme } from '@/app/ThemeProvider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface InfoCardProps {
  bname: string;
  id: string;
  language: string;
}

export function InfoCard({ bname, id, language }: InfoCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Link href={`/${id}`}>
        <div className="h-full rounded-xl overflow-hidden bg-[rgb(var(--color-secondary))] shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="mb-4">
              <BookOpenIcon className="h-8 w-8 text-[rgb(var(--color-accent))]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl urdu-text font-semibold text-[rgb(var(--color-text))] line-clamp-2">
                {bname}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex urdu-text items-center px-3 py-1 rounded-full text-sm font-medium bg-[rgb(var(--color-accent))] bg-opacity-10 text-white">
                  {language}
                </span>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-[rgb(var(--color-accent))]"
                >
                  →
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default InfoCard;
