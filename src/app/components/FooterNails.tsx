// src/app/components/FooterNails.tsx
'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaChevronUp } from 'react-icons/fa';

export default function FooterNails() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Decorative SVG “wave” / “nail” sits above the footer ─── */}
      <div className="w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-20 text-gray-900 dark:text-black"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ─── Actual Footer Container ─── */}
      <footer className="relative bg-gray-900 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* ─── Social Icons ─── */}
          <div className="flex space-x-6 z-10">
            <a
              href="https://github.com/coderbas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/abdulbasit-buhari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* Add more icons here if desired */}
          </div>

          {/* ─── Copyright Text ─── */}
          <div className="text-center text-gray-400 z-10">
            <p>© {new Date().getFullYear()} Basit Buhari. All rights reserved.</p>
          </div>

          {/* ─── Back to Top Button ─── */}
          <button
            onClick={scrollToTop}
            className="
              flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700
              text-white px-4 py-2 rounded-full
              transition duration-300
              z-10
            "
          >
            <FaChevronUp />
            <span>Top</span>
          </button>
        </div>
      </footer>
    </>
  );
}
