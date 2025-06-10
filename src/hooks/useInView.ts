// src/app/hooks/useInView.ts
import { useState, useEffect, RefObject } from 'react';

/**
 * A simple hook that returns true once the `ref` element
 * enters the viewport (with optional rootMargin).
 */
export default function useInView(
  ref: RefObject<HTMLElement>,
  rootMargin = '0px'
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}
