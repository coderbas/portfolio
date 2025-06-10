// src/app/components/SectionHeading.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  id: string;
  children: React.ReactNode;
};

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <motion.h2
      id={id}
      className="text-3xl font-bold text-gray-900 dark:text-gray-100 relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
      {/* small underline animation */}
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-400 transition-all duration-500 hover:w-full" />
    </motion.h2>
  );
}
