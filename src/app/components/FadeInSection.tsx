// src/app/components/FadeInSection.tsx
'use client';

import React, { useRef } from 'react';
import useInView from '../../hooks/useInView';

/**
 * A container that fades in its children once they scroll into view.
 * Usage: Wrap sections in <FadeInSection>…</FadeInSection>
 */
export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <div
      ref={ref}
      className={`
        opacity-0 translate-y-8
        transition-opacity transition-transform duration-700
        ${isInView ? 'opacity-100 translate-y-0' : ''}
      `}
    >
      {children}
    </div>
  );
}
