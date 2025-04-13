'use client'

import { useState, Suspense, useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  useProgress, 
  Html, 
  Text,
  useTexture,
  SpotLight,
  MeshReflectorMaterial,
  Float
} from '@react-three/drei'
import { projects } from '@/utils/data'
import * as THREE from 'three'
import { Texture } from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTheme } from '@/hooks/useTheme'
import { useTextureStore } from '@/contexts/TextureStore'

// Loader component with enhanced styling
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin mb-4"></div>
        <div className="bg-black/70 px-6 py-3 rounded-lg">
          <p className="text-white text-xl font-bold">{progress.toFixed(0)}%</p>
          <p className="text-gray-300 text-sm">Preparing Gallery...</p>
        </div>
      </div>
    </Html>
  )
}

// Create a texture preloader component at the top level
function TexturePreloader({ urls, onLoad }: { urls: string[], onLoad: () => void }) {
  // Preload all textures at once
  useEffect(() => {
    let loadedCount = 0;
    const totalTextures = urls.length;
    const textureLoader = new THREE.TextureLoader();
    
    // Enable cross-origin support
    textureLoader.crossOrigin = 'anonymous';
    
    urls.forEach(url => {
      textureLoader.load(
        url,
        (texture) => {
          // Configure texture
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.needsUpdate = true;
          
          // Count loaded textures
          loadedCount++;
          if (loadedCount === totalTextures) {
            onLoad();
          }
        },
        undefined,
        (error) => {
          console.warn(`Failed to load texture: ${url}`, error);
          loadedCount++;
          if (loadedCount === totalTextures) {
            onLoad();
          }
        }
      );
    });
  }, [urls, onLoad]);
  
  return null;
}

// Simplified ArtworkFrame component using useTexture and Suspense
function ArtworkFrame({
  position,
  rotation,
  scale = 1,
  project,
  onClick,
  isHighlighted
}: {
  position: [number, number, number],
  rotation: [number, number, number],
  scale?: number,
  project: any,
  onClick: () => void,
  isHighlighted: boolean
}) {
  const frameRef = useRef<THREE.Group>(null)
  const spotlightRef = useRef<THREE.SpotLight>(null)
  const [hover, setHover] = useState(false)
  const { theme } = useTheme()

  const textureUrl = project.banner || project.logo

  const texture = useTexture(textureUrl ? textureUrl : null, (loadedTexture) => {
    if (loadedTexture instanceof THREE.Texture) {
        (loadedTexture as any).crossOrigin = 'anonymous';
        loadedTexture.minFilter = THREE.LinearFilter;
        loadedTexture.magFilter = THREE.LinearFilter;
        loadedTexture.needsUpdate = true;
    }
  });

  // Add subtle floating animation
  useFrame(({ clock }) => {
    if (frameRef.current) {
      if (isHighlighted) {
        const t = clock.getElapsedTime()
        frameRef.current.position.y = position[1] + Math.sin(t * 2) * 0.05
        frameRef.current.rotation.y = rotation[1] + Math.sin(t) * 0.03
        if (spotlightRef.current) {
          spotlightRef.current.intensity = 18 + Math.sin(t * 3) * 2
        }
      } else {
        const t = clock.getElapsedTime() + position[0] * 10
        frameRef.current.position.y = position[1] + Math.sin(t) * 0.02
        if (spotlightRef.current) {
          spotlightRef.current.intensity = 12 + Math.sin(t * 2) * 1.5
        }
      }
    }
  })
  
  // Frame dimensions
  const aspectRatio = (texture instanceof THREE.Texture && texture.image)
    ? texture.image.width / texture.image.height
    : 1.5; // Fallback aspect ratio
  const frameWidth = 1.5 * scale
  const frameHeight = frameWidth / aspectRatio
  const frameDepth = 0.05 * scale
  
  // Frame border thickness
  const borderThickness = 0.12 * scale
  
  // Get project initials for the fallback
  const initials = project.title
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()
  
  return (
    <group 
      ref={frameRef} 
      position={position} 
      rotation={rotation} 
      onClick={onClick}
      onPointerOver={() => {
        setHover(true)
        document.body.style.cursor = theme?.id === 'dark' ? 'crosshair' : 'pointer'
      }}
      onPointerOut={() => {
        setHover(false)
        document.body.style.cursor = 'auto'
      }}
    >
      {/* Much brighter spotlight for the artwork with wider angle */}
      <SpotLight
        ref={spotlightRef}
        position={[0, 1.5, 1.2]}
        angle={0.6}
        attenuation={3} // Reduced attenuation for even wider light spread
        distance={6}
        intensity={isHighlighted ? 20 : 12} // Significantly increased intensity
        color={"#ffffff"} // Always bright white
        castShadow
      />
      
      {/* Additional point light for extra illumination */}
      <pointLight 
        position={[0, 0, 0.5]} 
        intensity={2} 
        color="#ffffff" 
        distance={3}
      />
      
      {/* Bright glowing outline with animation */}
      <mesh position={[0, 0, -0.03]} scale={[1.08, 1.08, 1]}>
        <boxGeometry args={[frameWidth + borderThickness, frameHeight + borderThickness, 0.01]} />
        <meshBasicMaterial 
          color={isHighlighted ? "#ffcc00" : "#4080ff"} 
          opacity={0.8}
          transparent
        />
      </mesh>
      
      {/* Larger, more visible title */}
      <Text
        position={[0, -frameHeight/2 - 0.3, 0.1]}
        fontSize={0.15 * scale}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
        maxWidth={frameWidth * 1.5}
      >
        {project.title}
      </Text>
      
      {/* Frame border - much brighter with stronger emission */}
      <mesh position={[0, 0, -0.01]} castShadow receiveShadow>
        <boxGeometry args={[frameWidth + borderThickness, frameHeight + borderThickness, frameDepth]} />
        <meshStandardMaterial 
          color={isHighlighted ? "#ffcc00" : "#dddddd"} 
          metalness={0.7} 
          roughness={0.2}
          emissive={isHighlighted ? "#ffcc00" : "#6495ed"}
          emissiveIntensity={isHighlighted ? 1.0 : 0.6}
        />
      </mesh>
      
      {/* Artwork image plane */}
      <mesh position={[0, 0, 0.01]} castShadow>
        <planeGeometry args={[frameWidth, frameHeight]} />
        {texture instanceof THREE.Texture ? (
          <meshStandardMaterial
            map={texture}
            color={"#ffffff"}
            metalness={0.1}
            roughness={0.8}
            transparent={false}
          />
        ) : (
          // Fallback
          <mesh>
             <planeGeometry args={[frameWidth, frameHeight]} />
             <meshStandardMaterial color={textureUrl ? "#333333" : "#555555"} />
             <Html center position={[0, 0, 0.01]}>
               <div style={{ /* Fallback styles */
                 width: "100px", height: "100px", display: "flex", alignItems: "center",
                 justifyContent: "center", backgroundColor: "rgba(0,0,0,0.7)",
                 borderRadius: "8px", color: "white", fontSize: "32px", fontWeight: "bold"
               }}>
                 {initials}
               </div>
             </Html>
           </mesh>
        )}
      </mesh>
      
      {/* Frame glass reflection - more noticeable */}
      <mesh position={[0, 0, 0.03]} castShadow>
        <planeGeometry args={[frameWidth, frameHeight]} />
        <meshPhysicalMaterial 
          transparent
          opacity={0.3}
          roughness={0}
          metalness={0.2}
          clearcoat={1}
          reflectivity={1}
          color="#ffffff"
        />
      </mesh>
      
      {/* Hover effect glowing outline */}
      {hover && (
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[frameWidth + borderThickness, frameHeight + borderThickness]} />
          <meshBasicMaterial color={project.primaryColor || "#0088ff"} transparent opacity={0.3} />
        </mesh>
      )}
    </group>
  )
}

// Gallery walls and floor
function GalleryEnvironment() {
  const floorSize = 20
  
  return (
    <>
      {/* Floor with reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[floorSize, floorSize]} />
        <MeshReflectorMaterial
          mirror={0.6}
          resolution={512}
          blur={[300, 100]}
          mixBlur={0.6}
          color="#111133"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      
      {/* Brighter walls */}
      <mesh position={[0, 1, -floorSize/2]} receiveShadow>
        <boxGeometry args={[floorSize, 4, 0.1]} />
        <meshStandardMaterial color="#333344" />
      </mesh>
      
      <mesh position={[-floorSize/2, 1, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow>
        <boxGeometry args={[floorSize, 4, 0.1]} />
        <meshStandardMaterial color="#333344" />
      </mesh>
      
      <mesh position={[floorSize/2, 1, 0]} rotation={[0, -Math.PI/2, 0]} receiveShadow>
        <boxGeometry args={[floorSize, 4, 0.1]} />
        <meshStandardMaterial color="#333344" />
      </mesh>
    </>
  )
}

// Ambient gallery lighting
function GalleryLighting() {
  return (
    <>
      {/* Significantly increased ambient light intensity */}
      <ambientLight intensity={0.8} />
      
      {/* Much brighter main directional light */}
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Brighter ceiling lights */}
      <pointLight position={[0, 6, 0]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-5, 6, -5]} intensity={1.0} color="#ffffff" />
      <pointLight position={[5, 6, -5]} intensity={1.0} color="#ffffff" />
      
      {/* Add wall lights */}
      <pointLight position={[-8, 2, -8]} intensity={0.8} color="#e0e0ff" />
      <pointLight position={[8, 2, -8]} intensity={0.8} color="#e0e0ff" />
      <pointLight position={[0, 2, -8]} intensity={0.8} color="#e0e0ff" />
    </>
  )
}

// Add floating markers to help identify projects
function FloatingMarkers({ totalProjects }: { totalProjects: number }) {
  // Use the same position calculation as artwork frames
  const getMarkerPosition = (index: number, total: number): [number, number, number] => {
    // Divide projects among left, back, and right walls
    const leftWallProjects = Math.ceil(total / 3)
    const backWallProjects = Math.ceil(total / 3)
    
    if (index < leftWallProjects) {
      // Left wall
      const spacing = 10 / (leftWallProjects + 1)
      return [-9.5, 2.8, -5 + spacing * (index + 1) * 2]
    } else if (index < leftWallProjects + backWallProjects) {
      // Back wall
      const wallIndex = index - leftWallProjects
      const spacing = 16 / (backWallProjects + 1)
      return [-8 + spacing * (wallIndex + 1), 2.8, -9.5]
    } else {
      // Right wall
      const wallIndex = index - leftWallProjects - backWallProjects
      const spacing = 10 / ((total - leftWallProjects - backWallProjects) + 1)
      return [9.5, 2.8, -5 + spacing * (wallIndex + 1) * 2]
    }
  }
  
  // Add pulsing animation to markers
  const Marker = ({ position }: { position: [number, number, number] }) => {
    const markerRef = useRef<THREE.Mesh>(null)
    
    useFrame(({ clock }) => {
      if (markerRef.current) {
        const t = clock.getElapsedTime()
        // Pulse size
        markerRef.current.scale.setScalar(0.9 + Math.sin(t * 2) * 0.2)
        // Pulse brightness
        if (markerRef.current.material instanceof THREE.MeshStandardMaterial) {
          markerRef.current.material.emissiveIntensity = 3 + Math.sin(t * 2.5) * 1
        }
      }
    })
    
    return (
      <mesh ref={markerRef} position={position}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          emissive="#4080ff" 
          emissiveIntensity={4} 
          color="#ffffff"
        />
      </mesh>
    )
  }
  
  return (
    <>
      {Array.from({ length: totalProjects }).map((_, index) => {
        const position = getMarkerPosition(index, totalProjects);
        return (
          <group key={`marker-${index}`}>
            <Marker position={position} />
            {/* Add a beam of light from ceiling to marker */}
            <SpotLight
              position={[position[0], 8, position[2]]}
              angle={0.2}
              distance={7}
              intensity={8}
              color="#4080ff"
              target-position={position}
              castShadow={false}
            />
          </group>
        );
      })}
    </>
  )
}

// Main camera controller that moves between artworks
function CameraController({ 
  activeProjectIndex, 
  totalProjects 
}: { 
  activeProjectIndex: number | null, 
  totalProjects: number 
}) {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)
  
  // Calculate positions for camera focus points
  const viewPositions = useMemo(() => {
    const positions = []
    
    // Left wall
    const leftWallProjects = Math.ceil(totalProjects / 3)
    for (let i = 0; i < leftWallProjects; i++) {
      const spacing = 10 / (leftWallProjects + 1)
      positions.push({
        position: [-9, 1, -5 + spacing * (i + 1) * 2],
        lookAt: [-9.99, 1, -5 + spacing * (i + 1) * 2]
      })
    }
    
    // Back wall
    const backWallProjects = Math.ceil(totalProjects / 3)
    for (let i = 0; i < backWallProjects; i++) {
      const spacing = 16 / (backWallProjects + 1)
      positions.push({
        position: [-8 + spacing * (i + 1), 1, -9],
        lookAt: [-8 + spacing * (i + 1), 1, -9.99]
      })
    }
    
    // Right wall
    const rightWallProjects = totalProjects - leftWallProjects - backWallProjects
    for (let i = 0; i < rightWallProjects; i++) {
      const spacing = 10 / (rightWallProjects + 1)
      positions.push({
        position: [9, 1, -5 + spacing * (i + 1) * 2],
        lookAt: [9.99, 1, -5 + spacing * (i + 1) * 2]
      })
    }
    
    return positions
  }, [totalProjects])
  
  // Move camera to focused project
  useEffect(() => {
    if (controlsRef.current && activeProjectIndex !== null) {
      const targetPosition = viewPositions[activeProjectIndex]
      
      // Animate camera position using GSAP-like animation
      const startPosition = new THREE.Vector3().copy(camera.position)
      const targetVector = new THREE.Vector3(
        targetPosition.position[0], 
        targetPosition.position[1], 
        targetPosition.position[2]
      )
      
      const startTime = Date.now()
      const duration = 1500 // 1.5 seconds
      
      const animate = () => {
        const elapsedTime = Date.now() - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        
        // Ease in-out function
        const easeProgress = progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2
        
        camera.position.lerpVectors(startPosition, targetVector, easeProgress)
        
        // Set the target to look at the artwork
        controlsRef.current.target.set(
          targetPosition.lookAt[0],
          targetPosition.lookAt[1],
          targetPosition.lookAt[2]
        )
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }
  }, [activeProjectIndex, camera, viewPositions])
  
  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      maxPolarAngle={Math.PI / 1.8}
      minPolarAngle={Math.PI / 6}
      maxDistance={12}
      minDistance={2}
      enablePan={false}
      dampingFactor={0.05}
      rotateSpeed={0.3}
      target={[0, 1, 0]}
    />
  )
}

interface ProjectsGalleryProps {
  onProjectSelect: (projectIndex: number) => void
}

export default function ProjectsGallery({ onProjectSelect }: ProjectsGalleryProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const rendererRef = useRef(null)

  const getArtworkPosition = (index: number, total: number): {
    position: [number, number, number],
    rotation: [number, number, number]
  } => {
    const leftWallProjects = Math.ceil(total / 3)
    const backWallProjects = Math.ceil(total / 3)
    const rightWallProjects = total - leftWallProjects - backWallProjects
    if (index < leftWallProjects) {
      const spacing = 10 / (leftWallProjects + 1)
      return { position: [-9.5, 1, -5 + spacing * (index + 1) * 2], rotation: [0, Math.PI/2, 0] }
    } else if (index < leftWallProjects + backWallProjects) {
      const wallIndex = index - leftWallProjects
      const spacing = 16 / (backWallProjects + 1)
      return { position: [-8 + spacing * (wallIndex + 1), 1, -9.5], rotation: [0, 0, 0] }
    } else {
      const wallIndex = index - leftWallProjects - backWallProjects
      const spacing = 10 / (rightWallProjects + 1)
      return { position: [9.5, 1, -5 + spacing * (wallIndex + 1) * 2], rotation: [0, -Math.PI/2, 0] }
    }
  }
  
  useEffect(() => {
    const handleResize = () => {
      if (rendererRef.current) {
        const canvas = document.querySelector('canvas')
        if (canvas) {
          canvas.style.width = '100%'
          canvas.style.height = '100%'
        }
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const handleArtworkClick = (index: number) => {
    setActiveProject(index === activeProject ? null : index)
    onProjectSelect(index)
  }
  
  const handleOverviewClick = () => {
    setActiveProject(null)
  }
  
  const initialCameraPosition: [number, number, number] = [0, 3, 8]
  
  return (
    <div className="w-full h-[70vh] bg-black rounded-xl shadow-xl overflow-hidden relative">
      {/* Enhanced UI overlay with better instructions */}
      <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm p-3 rounded-lg">
        <h3 className="text-white text-lg font-bold">Gallery Exhibition</h3>
        <p className="text-gray-300 text-sm">Drag to look • Click artworks to focus</p>
        <p className="text-blue-400 text-xs mt-1 font-semibold">Look for the glowing frames on the walls</p>
      </div>
      
      {/* Mini-map or guide */}
      <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm p-3 rounded-lg">
        <p className="text-white text-sm font-semibold">Projects: {projects.length}</p>
        <p className="text-gray-300 text-xs">Arranged on three gallery walls</p>
      </div>
      
      {/* Overview button - only show when a project is active */}
      {activeProject !== null && (
        <button 
          onClick={handleOverviewClick}
          className="absolute bottom-4 right-4 z-10 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-white transition-colors"
        >
          Return to Gallery
        </button>
      )}
      
      <Canvas 
        shadows
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2 // Reduced exposure to match Projects3D
        }}
        dpr={[1, 2]}
        ref={rendererRef}
        camera={{ position: initialCameraPosition, fov: 50 }}
      >
        <Suspense fallback={<Loader />}>
          {/* Brighten the fog color */}
          <fog attach="fog" args={['#050533', 1, 25]} />
          
          <GalleryLighting />
          <GalleryEnvironment />
          <FloatingMarkers totalProjects={projects.length} />
          
          {/* Artwork frames */}
          {projects.map((project, index) => {
            const { position, rotation } = getArtworkPosition(index, projects.length)
            return (
              <ArtworkFrame
                key={project.id}
                position={position}
                rotation={rotation}
                project={project}
                onClick={() => handleArtworkClick(index)}
                isHighlighted={activeProject === index}
                scale={1.3} // Increased size for better visibility
              />
            )
          })}
          
          {/* Brighter environment skybox */}
          <Environment preset="city" />
          
          {/* Camera controller */}
          <CameraController 
            activeProjectIndex={activeProject} 
            totalProjects={projects.length} 
          />
        </Suspense>
      </Canvas>
    </div>
  )
} 