// src/app/components/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AsciiArtPhoto from './AsciiArtPhoto';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden 
        bg-gradient-to-tr from-indigo-600 to-purple-600 
        dark:bg-black 
        transition-colors duration-300
        min-h-[calc(100vh-5rem)]
      "
    >
      {/* Noise Overlay (light only) */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay dark:hidden" />

      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-12">
        {/* TEXT + BUTTONS */}
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I’m AbdulBasit Buhari.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-100 max-w-lg font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build robust, secure, full-stack web applications in React, Next.js,
            Flask, and Payload CMS. In my free time, I contribute to open-source,
            explore Web3 (Solana), and experiment with AI/ML. I’m passionate about
            writing maintainable code and crafting delightful user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
href="https://drive.google.com/file/d/1TIu_afCZ9F3lCcETwopbrnz8TYdmct7M/view?usp=sharing"
onError={(e) => {
  // If Drive link fails, fallback to /resume.pdf
  window.location.href = '/resume.pdf';
}}  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center 
    rounded-lg bg-white text-gray-900 
    px-6 py-3 font-medium
    hover:bg-gray-100 
    transition-colors shadow-lg
  "
>
  View Resume
  <FaArrowRight className="ml-2 text-lg" />
</a>

            <a
              href="#contact"
              className="
                inline-flex items-center justify-center 
                rounded-lg border border-white text-white 
                px-6 py-3 font-medium 
                hover:bg-white hover:text-gray-900
                transition-colors shadow-sm
              "
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* ASCII PORTRAIT */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end mb-12 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 60, damping: 12 }}
        >
          <div className="relative group">
            {/* Glowing Frame */}
            <div className="absolute -inset-2 rounded-lg border-4 border-white opacity-50 blur-xl group-hover:opacity-100 group-hover:blur-none transition-all duration-500 animate-pulse" />
            {/* ASCII Canvas */}
            <div className="overflow-hidden rounded-lg border-2 border-white bg-black p-2">
              <AsciiArtPhoto
                src="/images/basit.jpg"
                width={100}
                characters="@#%xo;:,. "
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave (SVG) */}
      <svg
        viewBox="0 0 1440 100"
        className="absolute bottom-0 left-0 w-full text-white dark:text-black"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L40,32C80,32,160,32,240,48C320,64,400,96,480,96C560,96,640,64,720,64C800,64,880,96,960,106.7C1040,117,1120,107,1200,101.3C1280,96,1360,96,1400,96L1440,96L1440,160L1400,160C1360,160,1280,160,1200,160C1120,160,1040,160,960,160C880,160,800,160,720,160C640,160,560,160,480,160C400,160,320,160,240,160C160,160,80,160,40,160L0,160Z"
        />
      </svg>
    </section>
  );
}
