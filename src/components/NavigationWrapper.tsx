'use client'

import { useState, useEffect } from 'react'
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'
import AnimatedPath from './AnimatedPath'

interface NavigationWrapperProps {
  children: React.ReactNode
}

export default function NavigationWrapper({ children }: NavigationWrapperProps) {
  const [activeSection, setActiveSection] = useState('home')
  
  // Define sections for navigation
  const sections = [
    { id: 'home', title: 'Home', icon: '🏠' },
    { id: 'about', title: 'About Me', icon: '👨‍💻' },
    { id: 'skills', title: 'Skills', icon: '🛠️' },
    { id: 'projects', title: 'Projects', icon: '🚀' },
    { id: 'contact', title: 'Contact', icon: '📧' },
  ]
  
  // Update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    
    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    
    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])
  
  // Handle section click
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }
  
  return (
    <>
      <AnimatedPath 
        sections={sections} 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />
      {children}
    </>
  )
} 