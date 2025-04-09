import { useState, useEffect } from 'react';
import { useTheme } from '../app/ThemeProvider';
import { BookOpenIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes = [
    { name: 'light', icon: <SunIcon className="h-4 w-4" />, color: 'bg-sky-400' },
    { name: 'dark', icon: <MoonIcon className="h-4 w-4" />, color: 'bg-gray-700' },
    { name: 'sepia', icon: <SunIcon className="h-4 w-4 rotate-45" />, color: 'bg-amber-600' },
  ];

  const handleThemeChange = (newTheme: string) => {
    if (theme !== newTheme) {
      cycleTheme(newTheme); // Directly set the theme
    }
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300
      ${scrolled ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-100'}
      bg-[rgb(var(--color-primary))]`}>
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="h-8 w-8 text-[rgb(var(--color-accent))]" />
            <span className="text-xl font-bold text-[rgb(var(--color-text))]">
              IQBAL
            </span>
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-1 rounded-full p-1 bg-[rgb(var(--color-secondary))]">
              {themes.map((t) => (
                <motion.button
                  key={t.name}
                  onClick={() => handleThemeChange(t.name)}
                  className={`relative p-2 rounded-full transition-colors duration-200
                    ${theme === t.name ? t.color : 'hover:bg-[rgb(var(--color-accent))] hover:bg-opacity-10'}
                  `}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`
                    ${theme === t.name ? 'text-white' : 'text-[rgb(var(--color-text))]'}
                  `}>
                    {t.icon}
                  </span>
                  {theme === t.name && (
                    <motion.div
                      layoutId="activeTheme"
                      className="absolute inset-0 rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}