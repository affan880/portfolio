'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FiBookmark, FiCode, FiMessageCircle } from 'react-icons/fi'
import { aboutMe, eduBg } from '@/utils/data'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
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
    if (!card) return
    
    const handleMouseMove = (e: MouseEvent) => {
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
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
      card.style.transition = 'transform 0.5s ease-out'
    }
    
    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.1s'
    }
    
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    card.addEventListener('mouseenter', handleMouseEnter)
    
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
        card.removeEventListener('mouseenter', handleMouseEnter)
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

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
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
        </div>
        
        {/* Current Project Spotlight - New Section */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            Current Project: TaskBox AI
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            I'm currently building an AI-powered productivity platform that transforms how professionals manage their workflow:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">AI Email Integration</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-600 dark:text-slate-400">
                <li>Smart email analysis with priority detection</li>
                <li>Contextual follow-up recommendations</li>
                <li>Automated action item extraction</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Calendar Intelligence</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-600 dark:text-slate-400">
                <li>AI-optimized daily scheduling</li>
                <li>Dynamic time-blocking based on priorities</li>
                <li>Meeting preparation automations</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Predictive Task Management</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-600 dark:text-slate-400">
                <li>Personalized AI task recommendations</li>
                <li>Smart categorization and prioritization</li>
                <li>Workflow optimization suggestions</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 italic">
            Technologies: React, TypeScript, Node.js, OpenAI API, Firebase, Redux Toolkit
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Card Effect */}
          <div className="mx-auto max-w-md">
            <div 
              ref={cardRef} 
              className="card p-0 overflow-hidden will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-primary-500 via-blue-600 to-purple-600 p-1">
                <div className="bg-white dark:bg-slate-800 p-6 space-y-6">
                  <Image
                    src={aboutMe.image}
                    alt={aboutMe.name}
                    width={400}
                    height={400}
                    className="rounded-lg w-full object-cover"
                  />
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {aboutMe.name}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {aboutMe.bio}
                    </p>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-700/30 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                        <FiBookmark className="w-5 h-5" />
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
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                        <FiCode className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">Experience</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Full Stack Developer
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                          React & React Native Specialist
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                        <FiMessageCircle className="w-5 h-5" />
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
          
          {/* About Text */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Professional <span className="text-primary-600">Summary</span>
            </h3>
            
            <p className="text-slate-700 dark:text-slate-300">
              I&apos;m a full-stack developer specializing in building exceptional digital experiences. With expertise in React, React Native, and modern JavaScript frameworks, I create responsive and accessible web and mobile applications.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300">
              My educational background in Information Technology Management from St. Francis College, Brooklyn, NYC has equipped me with both technical and business knowledge, allowing me to bridge the gap between development and strategic business needs.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300">
              I&apos;m passionate about creating intuitive user interfaces and robust backend systems that work seamlessly together. My goal is to build digital solutions that not only look great but also solve real problems for users.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Technical Expertise
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {aboutMe.skills.slice(0, 10).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                  +{aboutMe.skills.length - 10} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 