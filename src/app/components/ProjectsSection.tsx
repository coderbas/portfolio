// src/app/components/ProjectsSection.tsx
import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectsGrid from './ProjectsGrid';

export default async function ProjectsSection() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/projects?limit=3`, { cache: 'no-store' });
  const json = await res.json();

  const payloadProjects = (json.docs as any[]).map(doc => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    slug: doc.slug,
    previewGif: doc.screenshot?.url || '',
    externalUrl: doc.url || '',
  }));

  // Manually inject a "Username Checker" project that links internally
  const localProject = {
    id: 'username-checker',
    title: 'GitHub Username Checker',
    description: 'Quick GitHub username availability checker.',
    slug: 'username-checker',
    previewGif: '/media/username_checker.gif', // put a small static image or GIF in public/images
    externalUrl: '/username-checker', // leave blank so it uses the internal /projects/[slug] route, or point to '/username-checker'
  };

  const allProjects = [localProject, ...payloadProjects];

  return (
    <section id="projects" className="relative bg-white dark:bg-black px-6 lg:px-24 py-16">
      <SectionHeading id="projects">Projects</SectionHeading>
      {allProjects.length === 0 ? (
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          No projects found. Add some in Payload Admin!
        </p>
      ) : (
        <ProjectsGrid projects={allProjects} />
      )}
    </section>
  );
}
