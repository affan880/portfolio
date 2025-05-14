'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  
  // Initialize cursor
  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a');
      
      setIsHovering(!!isInteractive);
      
      // Get element type for custom cursor behavior
      if (isInteractive) {
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          setActiveElement('button');
        } else if (target.tagName === 'A' || target.closest('a')) {
          setActiveElement('link');
        }
      } else {
        setActiveElement(null);
      }
    };
    
    const handleMouseDown = () => {
      setClicked(true);
      createClickParticles();
    };
    
    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      if (touchCheck) return;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animation loop for cursor
  useEffect(() => {
    if (isTouchDevice) return;

    const animateCursor = (time: number) => {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = time;
      }
      
      const deltaTime = time - (previousTimeRef.current || 0);
      previousTimeRef.current = time;
      
      // Only update when cursor is visible
      if (isVisible && cursorOuterRef.current && cursorInnerRef.current) {
        cursorOuterRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        cursorInnerRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      }
      
      // Update particles
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.02,
            size: particle.size - 0.1
          }))
          .filter(particle => particle.opacity > 0 && particle.size > 0)
      );
      
      requestRef.current = requestAnimationFrame(animateCursor);
    };
    
    requestRef.current = requestAnimationFrame(animateCursor);
    
    return () => {
      if (isTouchDevice) return;
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position, isVisible, isTouchDevice]);

  // Create particles on click
  const createClickParticles = () => {
    if (isTouchDevice) return;

    const newParticles: Particle[] = [];
    const colors = ['#4f46e5', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6'];
    
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: position.x + (Math.random() - 0.5) * 20,
        y: position.y + (Math.random() - 0.5) * 20,
        size: Math.random() * 5 + 3,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(prevParticles => [...prevParticles, ...newParticles]);
  };

  // Determine cursor styles based on context
  const cursorOuterClass = `
    fixed top-0 left-0 pointer-events-none z-50 rounded-full border
    transform -translate-x-1/2 -translate-y-1/2 transition-transform
    ${clicked ? 'w-6 h-6 border-primary-600' : 'w-8 h-8 border-primary-500'}
    ${isHovering ? 'scale-150 opacity-70' : 'opacity-60'}
    ${isVisible ? 'block' : 'hidden'}
  `;
  
  const cursorInnerClass = `
    fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-primary-500
    transform -translate-x-1/2 -translate-y-1/2 transition-transform
    ${clicked ? 'w-3 h-3' : 'w-2 h-2'}
    ${isHovering ? 'scale-0' : 'scale-100'}
    ${activeElement === 'button' ? 'mix-blend-difference' : ''}
    ${isVisible ? 'block' : 'hidden'}
  `;

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div ref={cursorOuterRef} className={cursorOuterClass}></div>
      <div ref={cursorInnerRef} className={cursorInnerClass}></div>
      
      {/* Particles for click effects */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            x: particle.x - particle.size / 2,
            y: particle.y - particle.size / 2
          }}
          animate={{
            x: particle.x - particle.size / 2 + (Math.random() - 0.5) * 40,
            y: particle.y - particle.size / 2 + (Math.random() - 0.5) * 40,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor; 