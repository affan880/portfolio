'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiCalendar } from 'react-icons/fi'
import { socialLinks, aboutMe } from '@/utils/data'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles/elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary-400/20 dark:bg-primary-600/10 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-400/20 dark:bg-pink-600/10 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white font-heading">
              Hi, I&apos;m <span className="text-primary-600">Syed Affan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
              Full Stack Developer specializing in <span className="text-primary-500 font-semibold">React</span> and <span className="text-primary-500 font-semibold">React Native</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
              I build innovative, responsive, and user-friendly web and mobile applications.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="hero-button">
                View My Work
              </a>
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 shadow-sm"
              >
                Contact Me
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Calendly"
              >
                <FiCalendar className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Image with 3D effect */}
          <div className="hidden md:block relative animate-float">
            <div 
              className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl"
              style={{ 
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
                <Image 
                  src={aboutMe.image} 
                  alt="Syed Affan"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating decoration elements */}
            <div 
              className="absolute -top-8 -right-8 w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-full opacity-80 z-0"
              style={{ 
                transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            <div 
              className="absolute -bottom-10 -left-6 w-16 h-16 bg-pink-100 dark:bg-pink-900/40 rounded-full opacity-80 z-0"
              style={{ 
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 