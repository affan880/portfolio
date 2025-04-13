'use client'

import { useState, Suspense, useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  useProgress, 
  Html, 
  useHelper, 
  Stars,
  useTexture,
  useGLTF,
  Text
} from '@react-three/drei'
import { projects } from '@/utils/data'
import ProjectModel from './ProjectModel'
import * as THREE from 'three'

// Loader component with enhanced styling
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin mb-4"></div>
        <div className="bg-black/70 px-6 py-3 rounded-lg">
          <p className="text-white text-xl font-bold">{progress.toFixed(0)}%</p>
          <p className="text-gray-300 text-sm">Loading 3D Environment...</p>
        </div>
      </div>
    </Html>
  )
}

// Custom glowing particles for atmosphere
function GlowingParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const particlesCount = 500
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)
    const sizes = new Float32Array(particlesCount)
    
    for (let i = 0; i < particlesCount; i++) {
      // Distribute particles in a sphere
      const radius = 15 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 5
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      // Random colors between blue and purple
      colors[i * 3] = 0.2 + Math.random() * 0.2     // Red (low)
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.4  // Green (medium)
      colors[i * 3 + 2] = 0.7 + Math.random() * 0.3  // Blue (high)
      
      // Random sizes
      sizes[i] = Math.random() * 1.5
    }
    
    return { positions, colors, sizes }
  }, [])
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(particles.positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(particles.colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(particles.sizes, 1))
    return geometry
  }, [particles])
  
  const particlesMaterial = useMemo(() => {
    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    return material
  }, [])
  
  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    
    const time = clock.getElapsedTime() * 0.2
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    
    for (let i = 0; i < positions.length; i += 3) {
      // Subtle movement
      positions[i] += Math.sin(time + i * 0.1) * 0.01
      positions[i + 1] += Math.cos(time + i * 0.1) * 0.01
      positions[i + 2] += Math.sin(time + i * 0.05) * 0.01
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })
  
  return (
    <points ref={particlesRef} geometry={particlesGeometry} material={particlesMaterial} />
  )
}

// Custom lighting setup
function SceneLighting() {
  const directionalLight = useRef<THREE.DirectionalLight>(null!)
  const spotLight = useRef<THREE.SpotLight>(null!)
  
  // Optional: Visualize the lights in development
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')
  // useHelper(spotLight, THREE.SpotLightHelper, 'blue')
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    // Animate the spot light
    if (spotLight.current) {
      spotLight.current.position.x = Math.sin(time * 0.3) * 10
      spotLight.current.position.z = Math.cos(time * 0.3) * 10
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={directionalLight}
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight
        ref={spotLight}
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        color="#5d7de4"
      />
      <pointLight position={[-10, -10, -10]} color="#ed4577" intensity={0.5} />
      
      {/* Add multiple small lights for interesting effects */}
      <pointLight position={[5, 5, -5]} color="#2563eb" intensity={0.3} />
      <pointLight position={[-5, 2, 5]} color="#d946ef" intensity={0.3} />
    </>
  )
}

// Custom floor component with procedural grid instead of external texture
function Floor() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Fill the background
      context.fillStyle = '#111122';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw the grid
      context.strokeStyle = '#444466';
      context.lineWidth = 1;
      
      // Draw vertical lines
      for (let i = 0; i <= canvas.width; i += 32) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
        context.stroke();
      }
      
      // Draw horizontal lines
      for (let i = 0; i <= canvas.height; i += 32) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(canvas.width, i);
        context.stroke();
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(40, 40);
    
    return texture;
  }, []);
  
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial 
        color="#111122" 
        metalness={0.5}
        roughness={0.8}
        map={texture}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

interface Projects3DProps {
  onProjectSelect: (projectIndex: number) => void
}

export default function Projects3D({ onProjectSelect }: Projects3DProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const controlsRef = useRef(null)
  const rendererRef = useRef(null)
  
  // Calculate initial camera position based on number of projects
  const cameraPosition = useMemo<[number, number, number]>(() => {
    const totalProjects = projects.length;
    const columns = Math.ceil(Math.sqrt(totalProjects));
    
    // Position camera high enough and far enough to see all projects
    const distance = Math.max(columns * 1.5, 8);
    return [0, 4, distance];
  }, []);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (rendererRef.current) {
        // Force canvas resize
        const canvas = document.querySelector('canvas');
        if (canvas) {
          canvas.style.width = '100%';
          canvas.style.height = '100%';
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate positions in a more structured pattern
  const getPosition = (index: number, total: number): [number, number, number] => {
    // Determine grid dimensions - aim for roughly square grid
    const columns = Math.ceil(Math.sqrt(total))
    const rows = Math.ceil(total / columns)
    
    // Calculate position in grid
    const col = index % columns
    const row = Math.floor(index / columns)
    
    // Center the grid
    const gridWidth = columns - 1
    const gridHeight = rows - 1
    
    // Space elements 2.5 units apart
    const spacing = 2.5
    
    const x = (col - gridWidth / 2) * spacing
    const y = 0 // Keep y position flat for better visibility
    const z = (row - gridHeight / 2) * spacing
    
    // Add slight variation to make it less rigid
    const variation = 0.2
    const xOffset = Math.sin(index * 0.7) * variation
    const zOffset = Math.cos(index * 0.7) * variation
    
    return [x + xOffset, y, z + zOffset]
  }
  
  const handleProjectClick = (index: number) => {
    setActiveProject(index)
    onProjectSelect(index)
  }
  
  return (
    <div className="w-full h-[70vh] bg-gradient-to-b from-slate-900 to-slate-800 rounded-xl shadow-xl overflow-hidden relative">
      {/* UI overlay */}
      <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-sm p-3 rounded-lg">
        <h3 className="text-white text-lg font-bold">Interactive Portfolio</h3>
        <p className="text-gray-300 text-sm">Drag to rotate • Scroll to zoom</p>
      </div>
      
      <Canvas 
        shadows
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        dpr={[1, 2]} // Responsive performance scaling
        ref={rendererRef}
      >
        <Suspense fallback={<Loader />}>
          <fog attach="fog" args={['#070b1a', 8, 30]} />
          
          <SceneLighting />
          
          <PerspectiveCamera makeDefault position={cameraPosition} fov={45} />
          
          {/* Ambient particles */}
          <GlowingParticles />
          
          {/* Stars background */}
          <Stars 
            radius={100} 
            depth={50} 
            count={1000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          
          {/* Projects displayed in 3D space */}
          {projects.map((project, index) => (
            <ProjectModel
              key={project.id}
              project={project}
              position={getPosition(index, projects.length)}
              onClick={() => handleProjectClick(index)}
            />
          ))}
          
          <Floor />
          
          {/* Environment skybox */}
          <Environment preset="night" />
          
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 6}
            maxDistance={20}
            minDistance={5}
            enablePan={false}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            target={[0, 0, 0]} // Ensure camera looks at center of grid
          />
        </Suspense>
      </Canvas>
    </div>
  )
} 