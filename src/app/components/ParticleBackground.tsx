// src/app/components/ParticleBackground.tsx
'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div
      id="particle-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,       // sit behind everything
        pointerEvents: 'none',
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: '#0f0f13' }, // dark‐mode background behind particles
          },
          fpsLimit: 60,
          particles: {
            color: { value: '#888888' },
            links: {
              color: '#444444',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50,
            },
            opacity: { value: 0.3 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
