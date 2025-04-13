import { create } from 'zustand';
import * as THREE from 'three';

interface TextureStoreState {
  textureMap: Map<string, THREE.Texture>;
  isLoading: boolean;
  progress: number;
  loadTexture: (url: string) => Promise<THREE.Texture>;
  preloadTextures: (urls: string[]) => Promise<void>;
}

export const useTextureStore = create<TextureStoreState>((set, get) => ({
  textureMap: new Map(),
  isLoading: false,
  progress: 0,
  
  loadTexture: async (url: string) => {
    const { textureMap } = get();
    
    // Return cached texture if available
    if (textureMap.has(url)) {
      return textureMap.get(url) as THREE.Texture;
    }
    
    // Create a promise that will resolve with the loaded texture
    return new Promise<THREE.Texture>((resolve, reject) => {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = 'anonymous';
      
      textureLoader.load(
        url,
        (texture) => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.needsUpdate = true;
          
          // Update the texture map
          set((state) => {
            const newMap = new Map(state.textureMap);
            newMap.set(url, texture);
            return { textureMap: newMap };
          });
          
          resolve(texture);
        },
        undefined,
        (error) => {
          console.error(`Failed to load texture: ${url}`, error);
          reject(error);
        }
      );
    });
  },
  
  preloadTextures: async (urls: string[]) => {
    set({ isLoading: true, progress: 0 });
    
    const { loadTexture } = get();
    let loadedCount = 0;
    
    try {
      // Load textures in parallel
      await Promise.all(
        urls.map(async (url) => {
          if (!url) return;
          
          try {
            await loadTexture(url);
          } catch (error) {
            console.warn(`Failed to preload texture: ${url}`, error);
          } finally {
            loadedCount++;
            set({ progress: (loadedCount / urls.length) * 100 });
          }
        })
      );
    } finally {
      set({ isLoading: false, progress: 100 });
    }
  },
})); 