'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FiBookmark, FiCode, FiMessageCircle, FiCalendar, FiServer } from 'react-icons/fi'
import { aboutMe, eduBg } from '@/utils/data'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches
    setIsTouchDevice(touchCheck)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const card = cardRef.current
    
    // Define handlers regardless of touchCheck, but only attach if not touch device
    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    
    const handleMouseLeave = () => {
      if (!card) return;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
      card.style.transition = 'transform 0.5s ease-out'
    }
    
    const handleMouseEnter = () => {
      if (!card) return;
      card.style.transition = 'transform 0.1s'
    }

    if (card && !touchCheck) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      card.addEventListener('mouseenter', handleMouseEnter)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (card && !touchCheck) { 
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
        card.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, []) // Removed cardRef from dependencies as it's stable and already checked

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 bg-slate-50 dark:bg-slate-800/50 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
            My <span className="text-primary-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
        </div>
        
        {/* Current Project Spotlight - Enhanced Section */}
        <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Building the Future: Plexar
            </h3>
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
              In Development
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg">
            I'm crafting an AI-powered productivity platform that reimagines how professionals work. By combining cutting-edge AI with intuitive design, we're creating a smarter way to manage tasks and time.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3 flex items-center">
                <FiMessageCircle className="mr-2" />
                AI Email Integration
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Smart email analysis with priority detection
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Contextual follow-up recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Automated action item extraction
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3 flex items-center">
                <FiCalendar className="mr-2" />
                Calendar Intelligence
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  AI-optimized daily scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Dynamic time-blocking based on priorities
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Meeting preparation automations
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-3 flex items-center">
                <FiCode className="mr-2" />
                Predictive Task Management
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Personalized AI task recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Smart categorization and prioritization
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Workflow optimization suggestions
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400 italic">
              Technologies: React, TypeScript, Node.js, OpenAI API, Firebase, Redux Toolkit
            </div>
            <a 
              href="http://plexar.xyz/" 
              className="mt-2 sm:mt-0 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Card Effect - Enhanced */}
          <div className="mx-auto max-w-md">
            <div 
              ref={cardRef} 
              className="card p-0 overflow-hidden will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-primary-500 via-blue-600 to-purple-600 p-1">
                <div className="bg-white dark:bg-slate-800 p-6 space-y-6">
                  <div className="relative">
                    <Image
                      src={aboutMe.image}
                      alt={aboutMe.name}
                      width={400}
                      height={400}
                      className="rounded-lg w-full object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {aboutMe.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {aboutMe.bio}
                    </p>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-700/30 p-6 rounded-lg space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                        <FiBookmark className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Education</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {eduBg[0].title}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          {eduBg[0].desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                        <FiMessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Contact</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {aboutMe.email}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          {aboutMe.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Text - Enhanced */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                The <span className="text-primary-600">Story</span> So Far
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My journey in technology began with a passion for solving complex problems and creating meaningful solutions. As a full-stack developer and IT professional, I've learned that the best solutions come from understanding both the technical and human aspects of every challenge.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                What Drives Me
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I believe in creating technology that enhances human potential. Whether it's developing intuitive applications or optimizing IT systems, my goal is to build solutions that make a real difference in people's lives and businesses.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Technical Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutMe.skills.slice(0, 10).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  +{aboutMe.skills.length - 10} more
                </span>
              </div>
            </div>
            
            {/* IT Skills Highlight Section - Enhanced */}
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border-l-4 border-primary-500">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <FiServer className="mr-2 text-primary-600" />
                IT Support Excellence
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-slate-900 dark:text-white mb-2">Core Competencies</h5>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      System Administration
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Network Management
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Security Implementation
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-slate-900 dark:text-white mb-2">Specialized Skills</h5>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Cloud Infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      DevOps Practices
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-500 mr-2">•</span>
                      Technical Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 