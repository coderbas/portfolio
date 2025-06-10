// src/app/components/ProjectsGrid.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import ProjectCard from './ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
  slug: string;
  previewGif?: string;   // MUST be a string URL now
  externalUrl?: string;  // optional link to live site
};

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <motion.div
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {projects.map(proj => (
        <Tilt
          key={proj.id}
          className="tilt"
          options={{ max: 25, scale: 1.02, speed: 400 }}
        >
          <ProjectCard
            title={proj.title}
            description={proj.description}
            slug={proj.slug}
            previewGif={proj.previewGif}      // now a string URL
            externalUrl={proj.externalUrl}    // live/demo link
          />
        </Tilt>
      ))}
    </motion.div>
  );
}
