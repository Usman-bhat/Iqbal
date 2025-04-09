"use client";
import Image from "next/image";
import { useTheme } from "../app/ThemeProvider";

export function FixedPlugin() {
  const { theme } = useTheme();

  const themeStyles = {
    dark: 'bg-gray-800 text-white border-gray-700',
    sepia: 'bg-[#f4ecd8] text-[#704214] border-[#e7d5b5]',
    light: 'bg-white text-gray-700 border-blue-gray-50'
  };

  return (
    <a href="https://youtube.com/@QuranicHub" target="_blank" rel="noopener noreferrer">
      <div
        className={`!fixed bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg
          transition-all duration-300 border shadow-md hover:shadow-lg
          ${themeStyles[theme]}`}
      >
        <Image
          width={20}
          height={20}
          className="w-5 h-5"
          alt="QuranicHub"
          src="/favicon.png"
        />
        <span className="text-sm font-medium">QuranicHub</span>
      </div>
    </a>
  );
}
