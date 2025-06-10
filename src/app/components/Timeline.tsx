// src/app/components/Timeline.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TimelineItem = {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line down the center on mobile; horizontal line on desktop */}
      <div
        className="
          absolute bg-gray-200 dark:bg-gray-700
          left-1/2 transform -translate-x-1/2
          w-1 h-full
          md:top-1/2 md:left-0 md:-translate-y-1/2 md:transform-none
          md:w-full md:h-1
        "
      />

      {items.map((item, idx) => {
        // Determine if it goes “left” or “right” of the center line on desktop
        const isRight = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            className={`
              relative w-full flex items-center
              mb-12
              ${isRight ? 'flex-row-reverse md:pl-8' : 'md:pr-8'}
            `}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Circle marker */}
            <div
              className="
                z-10 bg-white dark:bg-black border-4
                border-indigo-500 dark:border-indigo-400
                rounded-full h-6 w-6
                flex-shrink-0
              "
            />

            {/* Content card */}
            <div
              className={`
                mt-2 md:mt-0
                bg-gray-100 dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-lg p-6
                shadow-lg dark:shadow-black/20
                w-full md:w-1/2
                ${isRight ? 'md:ml-6' : 'md:mr-6'}
              `}
            >
              <span className="block text-sm font-mono text-gray-500 dark:text-gray-400">
                {item.date}
              </span>
              <h4 className="mt-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h4>
              {item.subtitle && (
                <h5 className="mt-0.5 text-gray-700 dark:text-gray-300 font-medium">
                  {item.subtitle}
                </h5>
              )}
              <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
