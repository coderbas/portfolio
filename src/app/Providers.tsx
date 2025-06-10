// src/app/Providers.tsx
'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import AnimatedCursor from './components/AnimatedCursor';
import SocialSidebar from './components/SocialSidebar';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Initialize tsparticles for Particles component
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {/* Animated partcles in Light mode only */}
      <div className="pointer-events-none fixed inset-0 z-[0] dark:hidden">
        <Particles
          id="particles"
          init={particlesInit}
          options={{
            fullScreen: { enable: true, zIndex: -10 },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: '#ffffff' },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.05,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: 'none',
                random: false,
                straight: false,
                outModes: { default: 'out' },
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.15 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Animated cursor effect (optional, superfluous flair) */}
      <AnimatedCursor />

      {/* Social Sidebar (bottom-left) */}
      <SocialSidebar />

      {children}
    </ThemeProvider>
  );
}
