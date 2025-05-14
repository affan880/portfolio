'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiCalendar, FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi'
import { socialLinks, aboutMe } from '@/utils/data'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      })
    }
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isTouchDevice])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background particles/elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-primary-400/20 dark:bg-primary-600/10 blur-3xl"
          style={{ 
            transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: isTouchDevice ? 'none' : 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-400/20 dark:bg-pink-600/10 blur-3xl"
          style={{ 
            transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
            transition: isTouchDevice ? 'none' : 'transform 0.3s ease-out'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in mt-8 sm:mt-0">
            <div className="space-y-2">
              <p className="text-primary-600 dark:text-primary-400 font-medium tracking-wide text-base sm:text-lg">Welcome to my digital space</p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white font-heading leading-tight mt-10 md:mt-0">
                <span className="block">Crafting Digital</span>
                <span className="block text-primary-600 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
                  Experiences
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium">
              Full Stack Developer & IT Professional
            </p>
            
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
                I transform complex problems into elegant solutions. With a passion for both development and IT infrastructure, I bridge the gap between code and systems to create seamless digital experiences.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
                Currently crafting robust applications and optimizing IT systems to drive business growth.
              </p>
            </div>
            
            {/* Tech icons with enhanced styling */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FiCode className="text-primary-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FiCpu className="text-primary-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">IT Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FiServer className="text-primary-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Systems</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <FiDatabase className="text-primary-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Infrastructure</span>
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Explore My Work
              </a>
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 shadow-sm hover:shadow-md"
              >
                Let's Connect
              </a>
            </div>
            
            {/* Social links with enhanced styling */}
            <div className="flex space-x-4 pt-6">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a 
                href={socialLinks.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                aria-label="Calendly"
              >
                <FiCalendar className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Image with 3D effect */}
          <div className="hidden md:block relative animate-float">
            <div 
              className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl"
              style={{ 
                transform: isTouchDevice ? 'perspective(1000px)' : `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`,
                transition: isTouchDevice ? 'none' : 'transform 0.5s ease-out'
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
                transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                transition: isTouchDevice ? 'none' : 'transform 0.3s ease-out'
              }}
            />
            <div 
              className="absolute -bottom-10 -left-6 w-16 h-16 bg-pink-100 dark:bg-pink-900/40 rounded-full opacity-80 z-0"
              style={{ 
                transform: isTouchDevice ? 'none' : `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
                transition: isTouchDevice ? 'none' : 'transform 0.3s ease-out'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 