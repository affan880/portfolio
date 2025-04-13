// This file contains compatibility functions for Three.js

import * as THREE from 'three';

// Handle the removed encoding constants in Three.js r152+
export const getColorSpace = () => {
  // For newer Three.js versions
  return {
    outputColorSpace: 'srgb'
  };
};

// Helper for setting up the renderer with the correct properties
export const setupRenderer = (renderer: THREE.WebGLRenderer) => {
  // For newer Three.js versions - use outputColorSpace
  renderer.outputColorSpace = 'srgb';
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  
  return renderer;
};

// Get the correct material properties based on Three.js version
export const getMaterialProps = (material: THREE.Material) => {
  return {
    opacity: material.opacity,
    transparent: material.transparent,
  };
}; 