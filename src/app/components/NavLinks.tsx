// src/app/components/NavLinks.tsx
import React from 'react';

export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-8 font-medium">
      {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="
            relative text-gray-100 hover:text-indigo-400 focus:text-indigo-400 
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
            after:bg-indigo-400 after:transition-all after:duration-300 
            hover:after:w-full focus:after:w-full
          "
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}

      {/* ← Add this extra link at the end for the Username Checker page */}
      
    </nav>
  );
}
