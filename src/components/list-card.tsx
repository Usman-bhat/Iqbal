"use client";



import Link from 'next/link';
import { useTheme } from '@/app/ThemeProvider';
import { motion } from 'framer-motion';

interface InfoCardProps {
  bname: string;
  id: string;
  bookId: string;
}

export function ListCard({ bname, id, bookId }: InfoCardProps) {
  const { darkTheme } = useTheme();

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const containerStyle = {
    background: darkTheme ? '#1a1a1a' : '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  return (
    <motion.div
      key={id}
      className={`w-full sm:w-70 md:w-70 lg:w-3/4 xl:w-3/4 sm:w-1/2 lg:w-1/5 ${
        darkTheme ? 'dark:bg-gray-800' : 'bg-gray-100'
      } p-4`}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={`/${bookId}/${id}`}>
          <div
            className={`rtl bg-white dark:bg-gray-800 p-4 rounded-md shadow-md ${
              darkTheme ? 'text-gray-600' : 'text-gray-700'
            }`} style={{ direction: 'rtl' }} >
            <h3 className="rtl text-lg font-semibold">{bname}</h3>
            <p className={`text-sm ${darkTheme ? 'text-gray-400' : 'text-gray-500'}`}></p>
          </div>
        
      </Link>
    </motion.div>
  );
}

export default ListCard;
