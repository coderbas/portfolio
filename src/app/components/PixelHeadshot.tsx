// src/app/components/PixelHeadshot.tsx
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber';
import { TextureLoader, Vector2 } from 'three';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Create a custom ShaderMaterial called PixelMaterial.
// We define its uniforms and inline the GLSL code as plain strings.
const PixelMaterial = shaderMaterial(
  {
    uTexture: null,
    uPixelSize: 16,
    uResolution: new Vector2(512, 512),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform sampler2D uTexture;
    uniform float uPixelSize;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      // Convert UV to pixel coordinates
      vec2 uvPixel = vUv * uResolution;
      // Snap to block grid
      vec2 block = floor(uvPixel / uPixelSize) * uPixelSize;
      // Convert back to normalized UV
      vec2 uvSample = block / uResolution;
      gl_FragColor = texture2D(uTexture, uvSample);
    }
  `
);

// Tell React Three Fiber about our new material so <pixelMaterial /> works
extend({ PixelMaterial });

function PixelPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  // Load the headshot texture. Put your image at public/images/headshot.jpg
  const texture = useLoader(TextureLoader, '/images/basit.jpg');

  // If your headshot is not 512×512, adjust these numbers to match its resolution
  const resolution = new Vector2(512, 512);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0.3 * Math.sin(clock.getElapsedTime() * 0.3);
      meshRef.current.rotation.x = 0.15 * Math.sin(clock.getElapsedTime() * 0.2);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 3]} />
      {/* @ts-ignore: allow our custom material */}
      <pixelMaterial uTexture={texture} uPixelSize={16} uResolution={resolution} />
    </mesh>
  );
}

export default function PixelHeadshot() {
  return (
    // This div gives a fixed size to the Three.js canvas
    <div className="h-64 w-64 lg:h-80 lg:w-80">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 0, 5]} />
        <PixelPlane />
      </Canvas>
    </div>
  );
}
