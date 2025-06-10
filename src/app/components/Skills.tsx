// src/app/components/Skills.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const skills = {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
    backend: ['Node.js', 'Express', 'Flask', 'MongoDB', 'PostgreSQL'],
    devops: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Netlify'],
    tools: ['Payload CMS', 'Sanity', 'Git', 'Linux', 'VS Code'],
  };

  return (
    <section
      id="skills"
      className="
        bg-white dark:bg-black 
        transition-colors duration-300
        px-6 lg:px-24 py-16
      "
    >
      {/* Subtle Grid Pattern (light only) */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 dark:hidden pointer-events-none" />

      <SectionHeading id="skills">Skills</SectionHeading>

      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
          hidden: {},
        }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            className="space-y-4"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <motion.span
                  key={idx}
                  className="
                    px-3 py-1 rounded-full 
                    bg-indigo-100 text-indigo-800 
                    dark:bg-indigo-800 dark:text-indigo-100 
                    text-sm font-medium
                  "
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
