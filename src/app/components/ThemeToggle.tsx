// src/app/components/ThemeToggle.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show toggle after mounting, to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="
        p-2 rounded-full 
        bg-gray-200 dark:bg-gray-700 
        hover:bg-gray-300 dark:hover:bg-gray-600 
        transition-colors
      "
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
