'use client'

import { useState, useRef, MouseEvent, useEffect } from 'react'
import Image from 'next/image'
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import { projects } from '@/utils/data'
import dynamic from 'next/dynamic'

// Import 3D components with dynamic loading (no SSR)
const Projects3D = dynamic(() => import('./3d/ProjectsWrapper'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] bg-slate-900 rounded-xl shadow-lg flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
    </div>
  )
})

// Import Gallery View
const ProjectsGallery = dynamic(() => import('./3d/ProjectsGalleryWrapper'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[70vh] bg-slate-900 rounded-xl shadow-lg flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
    </div>
  )
})

// Define proper types for project data
interface Project {
  id: number;
  title: string;
  tagLine: string;
  description: string;
  techStack: string[];
  company: string;
  logo: string;
  countries: string;
  language: string;
  category: string;
  platforms: string[];
  screenshots: string[];
  link: string;
  banner?: string;
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d') // Default to 3d, will adjust in useEffect
  const [isTouchDevice, setIsTouchDevice] = useState(false); // Added for touch detection
  const modalRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);
    if (touchCheck) {
      setViewMode('2d'); // Default to 2D view on touch devices
    }
  }, []); // Run once on mount
  
  const openProjectModal = (index: number) => {
    setActiveProject(index)
    setCurrentSlide(0)
    document.body.style.overflow = 'hidden'
  }
  
  const closeProjectModal = () => {
    setActiveProject(null)
    document.body.style.overflow = 'auto'
  }
  
  const nextSlide = () => {
    if (activeProject === null) return
    const projectScreenshots = projects[activeProject].screenshots
    setCurrentSlide((prev: number) => (prev === projectScreenshots.length - 1 ? 0 : prev + 1))
  }
  
  const prevSlide = () => {
    if (activeProject === null) return
    const projectScreenshots = projects[activeProject].screenshots
    setCurrentSlide((prev: number) => (prev === 0 ? projectScreenshots.length - 1 : prev - 1))
  }
  
  // Close modal when clicking outside
  const handleBackdropClick = (e: MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      closeProjectModal()
    }
  }

  // Handle project selection from 3D view
  const handleProjectSelect = (index: number) => {
    openProjectModal(index)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
        </div>
        
        {/* View mode toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full flex">
            {/* <button
              onClick={() => setViewMode('gallery')}
              className={`px-4 py-2 rounded-full transition-colors ${
                viewMode === 'gallery'
                  ? 'bg-primary-500 text-white'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Gallery View
            </button> */}
            <button
              onClick={() => setViewMode('3d')}
              className={`px-4 py-2 rounded-full transition-colors ${
                viewMode === '3d'
                  ? 'bg-primary-500 text-white'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              3D Grid
            </button>
            <button
              onClick={() => setViewMode('2d')}
              className={`px-4 py-2 rounded-full transition-colors ${
                viewMode === '2d'
                  ? 'bg-primary-500 text-white'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              2D Cards
            </button>
          </div>
        </div>
        
        {/* Projects View Modes */}
        {
        // viewMode === 'gallery' ? (
        //   <ProjectsGallery onProjectSelect={handleProjectSelect} />
        // ) : 
        viewMode === '3d' ? (
          <Projects3D onProjectSelect={handleProjectSelect} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                onClick={() => openProjectModal(index)} 
                isTouchDevice={isTouchDevice}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Project Details Modal */}
      {activeProject !== null && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <div className="bg-white dark:bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="sticky top-0 bg-white dark:bg-slate-900 z-10 flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center">
                {projects[activeProject].logo && (
                  <Image 
                    src={projects[activeProject].logo} 
                    alt={projects[activeProject].title}
                    width={40}
                    height={40}
                    className="rounded-md mr-3"
                  />
                )}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {projects[activeProject].title}
                </h3>
              </div>
              <button 
                onClick={closeProjectModal}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Project Screenshots Carousel */}
            <div className="relative">
              <div className="w-full h-72 sm:h-96 bg-slate-100 dark:bg-slate-800 relative">
                {projects[activeProject].screenshots.length > 0 ? (
                  <Image 
                    src={projects[activeProject].screenshots[currentSlide]} 
                    alt={`${projects[activeProject].title} screenshot`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600">
                    No screenshots available
                  </div>
                )}
                
                {projects[activeProject].screenshots.length > 1 && (
                  <>
                    <button 
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white shadow-md hover:bg-white dark:hover:bg-slate-900"
                      aria-label="Previous slide"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white shadow-md hover:bg-white dark:hover:bg-slate-900"
                      aria-label="Next slide"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {projects[activeProject].screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            i === currentSlide 
                              ? 'bg-primary-500' 
                              : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                {projects[activeProject].tagLine}
              </h4>
              
              <div className="mt-4 text-slate-700 dark:text-slate-300 whitespace-pre-line">
                <div dangerouslySetInnerHTML={{ __html: projects[activeProject].description }} />
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Company</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{projects[activeProject].company}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Category</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{projects[activeProject].category}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Platforms</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{projects[activeProject].platforms.join(', ')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Language</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{projects[activeProject].language}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                {projects[activeProject].link && (
                  <a 
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Visit Project
                  </a>
                )}
                {projects[activeProject].link && projects[activeProject].link.includes('github') && (
                  <a 
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isTouchDevice?: boolean;
}

function ProjectCard({ project, onClick, isTouchDevice }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isTouchDevice || !cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
  
  const handleMouseLeave = () => {
    if (isTouchDevice || !cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  // Effect to reset transform if it becomes a touch device or on initial render for touch
  useEffect(() => {
    if (isTouchDevice && cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  }, [isTouchDevice]);
  
  return (
    <div
      ref={cardRef}
      className="group relative h-64 rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 hover:shadow-xl hover:-translate-y-1"
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
      
      {project.banner ? (
        <Image
          src={project.banner}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-600 dark:from-primary-900 dark:to-primary-600">
          {project.logo && (
            <Image
              src={project.logo}
              alt={project.title}
              width={80}
              height={80}
              className="opacity-80"
            />
          )}
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-white/80 mb-2">{project.tagLine}</p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs py-1 px-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs py-1 px-2 bg-white/20 backdrop-blur-sm rounded-full text-white flex items-center">
              <FiPlus className="mr-1" size={10} />
              {project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 