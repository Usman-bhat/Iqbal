"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const themes = ['light', 'dark', 'sepia'] as const;
type Theme = typeof themes[number];

interface ThemeContextType {
  theme: Theme;
  cycleTheme: (newTheme: Theme) => void; // Updated type
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme && themes.includes(storedTheme)) {
        setTheme(storedTheme);
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(storedTheme);
      } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.add('light');
      }
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove(...themes);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    }
  };

  const cycleTheme = (newTheme: Theme) => { // Updated function
    handleThemeChange(newTheme);
  };

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      
      switch (theme) {
        case 'light':
          root.style.setProperty('--color-primary', '255, 255, 255');
          root.style.setProperty('--color-secondary', '241, 245, 249');
          root.style.setProperty('--color-text', '30, 41, 59');
          root.style.setProperty('--color-accent', '37, 99, 235');
          break;
          
        case 'dark':
          root.style.setProperty('--color-primary', '15, 23, 42');
          root.style.setProperty('--color-secondary', '30, 41, 59');
          root.style.setProperty('--color-text', '226, 232, 240');
          root.style.setProperty('--color-accent', '59, 130, 246');
          break;
          
        case 'sepia':
          root.style.setProperty('--color-primary', '253, 246, 236');
          root.style.setProperty('--color-secondary', '245, 235, 220');
          root.style.setProperty('--color-text', '77, 51, 30');
          root.style.setProperty('--color-accent', '160, 82, 45');
          break;
      }
    }
  }, [theme, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

