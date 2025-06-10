// src/app/components/AsciiArtPhoto.tsx
'use client';

import React, { useRef, useEffect } from 'react';

type AsciiArtPhotoProps = {
  src: string;             // path to headshot.jpg in /public/images
  width?: number;          // size of the ASCII canvas (in “characters”)
  characters?: string;     // string of ASCII characters from darkest→lightest
};

export default function AsciiArtPhoto({
  src,
  width = 100,
  characters = '@#%xo;:,. ',
}: AsciiArtPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const characterList = characters.split('');
    const fontfamily = 'Fira Code, monospace';
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const img = new Image();

    img.src = src;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      const asciiWidth = width;
      const asciiHeight = Math.round((asciiWidth * imgHeight) / imgWidth);

      // Resize our canvas so each “character cell” is e.g. 8x8 px
      const cellSize = 6;
      canvas.width = asciiWidth * cellSize;
      canvas.height = asciiHeight * cellSize;

      // Draw the image to an off‐screen canvas scaled down to ascii dims
      const offCanvas = document.createElement('canvas');
      offCanvas.width = asciiWidth;
      offCanvas.height = asciiHeight;
      const offCtx = offCanvas.getContext('2d')!;
      offCtx.drawImage(img, 0, 0, asciiWidth, asciiHeight);

      const imageData = offCtx.getImageData(0, 0, asciiWidth, asciiHeight).data;

      // Fill the main canvas background w/ transparent black
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ASCII
      ctx.font = `${cellSize}px ${fontfamily}`;
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'white';

      let dataIndex = 0;
      for (let y = 0; y < asciiHeight; y++) {
        for (let x = 0; x < asciiWidth; x++) {
          const r = imageData[dataIndex++];
          const g = imageData[dataIndex++];
          const b = imageData[dataIndex++];
          const a = imageData[dataIndex++];
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255; // 0→1

          // Choose a character from darkest (index 0) to lightest (last)
          const charIndex = Math.floor((1 - brightness) * (characterList.length - 1));
          const character = characterList[charIndex];

          ctx.fillText(character, x * cellSize, y * cellSize);
        }
      }
    };
  }, [src, width, characters]);

  return <canvas ref={canvasRef} />;
}
