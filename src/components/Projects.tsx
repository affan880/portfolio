'use client'

import { useState, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '@/utils/data'

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
  const modalRef = useRef<HTMLDivElement>(null)
  
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index}
            onClick={() => openProjectModal(index)} 
          />
        ))}
      </div>
      
      {/* Project Details Modal */}
      {activeProject !== null && (
        <motion.div 
          ref={modalRef}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-4 sm:p-6 border-b border-black/10">
              <div className="flex items-center min-w-0 flex-1">
                {projects[activeProject].logo && (
                  <Image 
                    src={projects[activeProject].logo} 
                    alt={projects[activeProject].title}
                    width={32}
                    height={32}
                    className="rounded-lg mr-3 flex-shrink-0"
                  />
                )}
                <h3 className="text-lg sm:text-xl font-bold text-black truncate">
                  {projects[activeProject].title}
                </h3>
              </div>
              <button 
                onClick={closeProjectModal}
                className="p-2 rounded-full hover:bg-black/5 text-black/60 transition-colors flex-shrink-0 ml-2"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Project Screenshots Carousel */}
            <div className="relative">
              <div className="w-full h-64 sm:h-72 md:h-96 bg-black/5 relative">
                {projects[activeProject].screenshots.length > 0 ? (
                  <Image 
                    src={projects[activeProject].screenshots[currentSlide]} 
                    alt={`${projects[activeProject].title} screenshot`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-black/40">
                    No screenshots available
                  </div>
                )}
                
                {projects[activeProject].screenshots.length > 1 && (
                  <>
                    <button 
                      onClick={prevSlide}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 text-black shadow-lg hover:bg-white transition-colors"
                      aria-label="Previous slide"
                    >
                      <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 text-black shadow-lg hover:bg-white transition-colors"
                      aria-label="Next slide"
                    >
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {projects[activeProject].screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlide(i)}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                            i === currentSlide 
                              ? 'bg-black' 
                              : 'bg-black/20'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold text-black/80 mb-2">
                {projects[activeProject].tagLine}
              </h4>
              
              <div className="mt-4 text-black/70 leading-relaxed text-sm sm:text-base">
                <div dangerouslySetInnerHTML={{ __html: projects[activeProject].description }} />
              </div>
              
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-black mb-3">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/5 text-black/70 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <div>
                    <h5 className="text-sm font-semibold text-black mb-1">Company</h5>
                    <p className="text-xs sm:text-sm text-black/60">{projects[activeProject].company}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-black mb-1">Category</h5>
                    <p className="text-xs sm:text-sm text-black/60">{projects[activeProject].category}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-black mb-1">Platforms</h5>
                    <p className="text-xs sm:text-sm text-black/60">{projects[activeProject].platforms.join(', ')}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-black mb-1">Language</h5>
                    <p className="text-xs sm:text-sm text-black/60">{projects[activeProject].language}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {projects[activeProject].link && (
                  <a 
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors font-medium text-sm sm:text-base"
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
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all font-medium text-sm sm:text-base"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-black/10 hover:border-black/20 transition-all duration-300 cursor-pointer hover:shadow-xl"
      onClick={onClick}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        {project.banner ? (
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/5 to-black/10">
            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={80}
                height={80}
                className="opacity-60"
              />
            )}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-black/80 transition-colors">
          {project.title}
        </h3>
        <p className="text-black/60 text-sm mb-4 line-clamp-2">
          {project.tagLine}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs py-1 px-3 bg-black/5 rounded-full text-black/70 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs py-1 px-3 bg-black/5 rounded-full text-black/70 font-medium">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-black/50 font-medium">{project.company}</span>
          <motion.div 
            className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs">→</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 