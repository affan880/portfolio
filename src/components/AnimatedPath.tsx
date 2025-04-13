'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface Section {
  id: string
  title: string
  icon?: string
  color?: string
}

interface AnimatedPathProps {
  sections: Section[]
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export default function AnimatedPath({ sections, activeSection, onSectionClick }: AnimatedPathProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  
  // Smoothed progress for the path drawing animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Calculate path length based on sections count
  const pathLength = (sections.length - 1) * 100
  
  // Transform scrollYProgress to path progress
  const pathProgress = useTransform(smoothProgress, [0, 1], [0, pathLength])
  
  // Scroll to section when clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    onSectionClick(sectionId)
  }
  
  return (
    <div 
      ref={containerRef}
      className="fixed left-10 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="relative h-[70vh] flex items-center">
        {/* Vertical path line */}
        <svg 
          width="4" 
          height="100%" 
          viewBox={`0 0 4 ${pathLength}`} 
          fill="none" 
          className="absolute left-6 top-0 opacity-50"
        >
          <path
            d={`M 2 0 L 2 ${pathLength}`}
            stroke="#94a3b8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Animated path that fills as user scrolls */}
        <motion.svg 
          width="4" 
          height="100%" 
          viewBox={`0 0 4 ${pathLength}`} 
          fill="none" 
          className="absolute left-6 top-0"
        >
          <motion.path
            d={`M 2 0 L 2 ${pathLength}`}
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
          />
        </motion.svg>
        
        {/* Section markers */}
        <div className="absolute left-0 top-0 h-full">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="absolute left-0"
              style={{ top: `${index * (100 / (sections.length - 1))}%` }}
              initial={{ scale: 1 }}
              animate={{ 
                scale: activeSection === section.id || hoveredSection === section.id ? 1.2 : 1,
                transition: { type: 'spring', stiffness: 500, damping: 30 }
              }}
            >
              <button
                onClick={() => scrollToSection(section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
                  activeSection === section.id 
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                } transition-all duration-300 hover:shadow-md`}
                aria-label={`Navigate to ${section.title}`}
              >
                {section.icon ? (
                  <span className="text-lg">{section.icon}</span>
                ) : (
                  <span className="text-xs font-bold">{index + 1}</span>
                )}
                
                {/* Tooltip */}
                <div className={`absolute left-14 origin-left whitespace-nowrap px-3 py-1.5 rounded-md font-medium transition-all duration-300 ${
                  hoveredSection === section.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                } bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md`}>
                  {section.title}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 