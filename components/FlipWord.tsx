'use client';

import { useEffect, useState } from 'react';

export function FlipWord({ words, className = '' }: { words: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="inline-block relative align-baseline" style={{ minWidth: '200px' }}>
      {words.map((word, idx) => (
        <span
          key={word}
          className={`inline-block absolute left-0 ${className}`}
          style={{
            top: 0,
            opacity: idx === currentIndex ? 1 : 0,
            transform: idx === currentIndex ? 'rotateX(0deg)' : 'rotateX(90deg)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transformStyle: 'preserve-3d',
            pointerEvents: idx === currentIndex ? 'auto' : 'none',
          }}
        >
          {word}
        </span>
      ))}
      {/* Invisible placeholder to maintain proper baseline alignment */}
      <span className="invisible" aria-hidden="true">{words[0]}</span>
    </span>
  );
}
