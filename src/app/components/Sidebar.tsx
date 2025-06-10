// src/app/components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex h-full flex-col justify-between py-8 px-6 text-gray-300">
      <div>
        <Link href="/" className="text-2xl font-bold text-white dark:text-gray-100">
          BasitB
        </Link>
        <ul className="mt-8 space-y-4">
          <li>
            <a href="#hero" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center space-x-2 rounded-md bg-gray-800 p-2 hover:bg-gray-700"
        >
          {theme === 'dark' ? (
            <>
              <SunIcon className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-200">Light</span>
            </>
          ) : (
            <>
              <MoonIcon className="h-5 w-5 text-gray-200" />
              <span className="text-sm text-gray-200">Dark</span>
            </>
          )}
        </button>

        <a
          href="https://github.com/coderbas"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-white text-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/abdulbasit-buhari"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-white text-gray-300"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
