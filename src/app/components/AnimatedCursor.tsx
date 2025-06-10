// src/app/components/AnimatedCursor.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - 10,
        top: position.y - 10,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none',
        mixBlendMode: 'difference',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
}
