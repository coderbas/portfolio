// src/app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Contact />
    </>
  );
}
