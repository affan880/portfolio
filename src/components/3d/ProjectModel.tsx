'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture, Text, MeshWobbleMaterial, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

interface ProjectModelProps {
  project: {
    id: number
    title: string
    banner?: string
    logo: string
    description?: string
    technologies?: string[]
  }
  onClick: () => void
  position: [number, number, number]
}

export default function ProjectModel({ project, onClick, position }: ProjectModelProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const particlesRef = useRef<THREE.Points>(null!)
  const textRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  
  // Load textures
  const textureUrl = project.banner || project.logo;
  const texture = useTexture(textureUrl, (loadedTexture) => {
    // Set these properties manually after texture loads
    if (loadedTexture) {
      loadedTexture.needsUpdate = true;
    }
  });
  
  // Set up the texture to handle cross-origin issues
  useEffect(() => {
    if (texture) {
      // Cast to any to handle the crossOrigin property 
      // THREE.js types don't properly expose this property
      (texture as any).crossOrigin = 'anonymous';
      texture.needsUpdate = true;
    }
  }, [texture]);
  
  const { clock } = useThree();
  
  // Create particles geometry and material
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 50;
  const positions = new Float32Array(particlesCount * 3);
  
  // Set random positions around the project card
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 3;
    positions[i3 + 1] = (Math.random() - 0.5) * 3;
    positions[i3 + 2] = (Math.random() - 0.5) * 3;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  // Animation
  useFrame((state, delta) => {
    if (!mesh.current) return
    
    // More complex rotation when hovered
    const time = state.clock.getElapsedTime();
    
    if (hovered) {
      mesh.current.rotation.y = Math.sin(time * 0.5) * 0.2 + time * 0.1;
      mesh.current.rotation.z = Math.sin(time * 0.3) * 0.05;
      mesh.current.position.y = position[1] + Math.sin(time * 2) * 0.05;
    } else {
      // Default smooth rotation
      mesh.current.rotation.y += delta * 0.2;
      mesh.current.position.y = position[1] + Math.sin(time) * 0.03;
    }
    
    // Scale effect with spring physics
    mesh.current.scale.x = THREE.MathUtils.lerp(
      mesh.current.scale.x,
      hovered ? 1.2 : 1,
      0.1
    )
    mesh.current.scale.y = THREE.MathUtils.lerp(
      mesh.current.scale.y,
      hovered ? 1.2 : 1,
      0.1
    )
    mesh.current.scale.z = THREE.MathUtils.lerp(
      mesh.current.scale.z,
      hovered ? 1.2 : 1,
      0.1
    )
    
    // Animate particles
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Orbital movement around the card
        positions[i3] = x * Math.cos(delta * 0.1) - z * Math.sin(delta * 0.1);
        positions[i3 + 2] = x * Math.sin(delta * 0.1) + z * Math.cos(delta * 0.1);
        
        // Pulsating effect
        positions[i3 + 1] = y + Math.sin(time + i) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    // Animate text if hovered
    if (textRef.current && hovered) {
      textRef.current.position.y = -0.8 + Math.sin(time * 3) * 0.05;
    }
  })
  
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh
          ref={mesh}
          onClick={() => {
            setActive(!active);
            onClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
        >
          {/* Project card with distortion effect when hovered */}
          {hovered ? (
            <boxGeometry args={[1.5, 1, 0.1]} />
          ) : (
            <boxGeometry args={[1.5, 1, 0.1]} />
          )}
          
          {hovered ? (
            <MeshDistortMaterial
              map={texture}
              metalness={0.3}
              roughness={0.4}
              color={0xffffff}
              distort={0.2} // Amount of distortion
              speed={2} // Speed of distortion
              bumpScale={0.05}
            />
          ) : (
            <MeshWobbleMaterial
              map={texture}
              metalness={0.2}
              roughness={0.5}
              color={0xffffff}
              factor={0.1} // Wobble factor
              speed={1} // Wobble speed
            />
          )}
          
          {/* Glow effect when hovered */}
          {hovered && (
            <mesh>
              <boxGeometry args={[1.6, 1.1, 0.05]} />
              <meshBasicMaterial
                color="#4d80e4"
                opacity={0.5}
                transparent
                toneMapped={false}
              />
            </mesh>
          )}
        </mesh>
      </Float>
      
      {/* Particles around the project */}
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry" {...particlesGeometry} />
        <pointsMaterial
          attach="material"
          size={0.05}
          color={hovered ? "#5d7de4" : "#3a3a3a"}
          transparent
          opacity={hovered ? 0.8 : 0.4}
          toneMapped={false}
        />
      </points>
      
      {/* Show project title with enhanced style */}
      {(hovered || active) && (
        <group ref={textRef} position={[0, -0.8, 0]}>
          <mesh>
            <planeGeometry args={[1.8, 0.5]} />
            <meshBasicMaterial
              color="#000000"
              opacity={0.8}
              transparent
              toneMapped={false}
            />
          </mesh>
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.12}
            maxWidth={1.7}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            {project.title}
          </Text>
          
          {/* Add a small decoration line */}
          <mesh position={[0, -0.15, 0.06]}>
            <boxGeometry args={[0.5, 0.02, 0.01]} />
            <meshBasicMaterial color="#5d7de4" toneMapped={false} />
          </mesh>
        </group>
      )}
    </group>
  )
} 