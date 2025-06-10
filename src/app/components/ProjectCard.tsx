// src/app/components/ProjectCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  previewGif?: string;    // expects a string (e.g. "/api/media/file/xxx.gif")
  externalUrl?: string;   // expects a string (e.g. "https://coderbas-automations.vercel.app")
};

export default function ProjectCard({
  title,
  description,
  slug,
  previewGif,
  externalUrl,
}: ProjectCardProps) {
  // If externalUrl is provided, we wrap in <a href="..."> so it opens the live site.
  // Otherwise, we wrap in a Next.js <Link> to the internal /projects/[slug] page.
  const Wrapper = externalUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link href={`/projects/${slug}`} className="group">
          {children}
        </Link>
      );

  return (
    <Wrapper>
      <div
        className="
          bg-white dark:bg-gray-900 
          border border-gray-200 dark:border-gray-700 
          rounded-xl
          shadow-md dark:shadow-black/20
          overflow-hidden
          transition hover:shadow-xl hover:scale-[1.02] duration-300
          flex flex-col
        "
      >
        {/* Preview area */}
        <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {previewGif ? (
            <img
              src={previewGif}                // now a string URL, so it will load
              alt={`${title} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-gray-400 dark:text-gray-600">
              No Preview Available
            </span>
          )}
        </div>

        {/* Title & description */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-500 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-snug">
              {description}
            </p>
          </div>
          <span className="mt-4 text-indigo-600 hover:underline self-start text-sm font-medium">
            View Project →
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
