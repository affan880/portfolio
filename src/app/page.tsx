'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { aboutMe, socialLinks } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  const navigationItems = ['About', 'Experience', 'Projects', 'Contact']

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <main className="relative">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-lg sm:text-2xl font-bold text-black"
              whileHover={{ scale: 1.02 }}
            >
              {aboutMe.name}
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-black/70 hover:text-black transition-colors font-medium"
                  whileHover={{ y: -1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6 text-black" />
              ) : (
                <FiMenu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden bg-white border-t border-black/10 ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <motion.div style={{ y, opacity }} className="text-center max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", damping: 15 }}
            className="mb-12 sm:mb-16 relative"
          >
            {/* Floating background elements - smaller on mobile */}
            <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-black/5 to-black/10 rounded-full blur-xl sm:blur-2xl animate-float opacity-60"></div>
            <div className="absolute -bottom-5 sm:-bottom-10 -right-8 sm:-right-16 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-tr from-black/3 to-black/8 rounded-full blur-lg sm:blur-xl animate-float-reverse opacity-60"></div>
            
            {/* Main profile container */}
            <div className="relative inline-block group">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/5 to-black/15 rounded-[1.5rem] sm:rounded-[2rem] blur-xl sm:blur-2xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Glass container */}
              <div className="relative p-2 sm:p-3 rounded-[1.5rem] sm:rounded-[2rem] bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl sm:shadow-2xl">
                <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 z-10 rounded-[1rem] sm:rounded-[1.5rem]"></div>
                  
                  <Image
                    src={aboutMe.image}
                    alt={aboutMe.name}
                    width={160}
                    height={160}
                    className="relative w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1rem] sm:rounded-[1.5rem]"></div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-green-400 border-2 sm:border-3 border-white rounded-full shadow-lg animate-pulse"></div>
              
              {/* Floating accent rings - smaller on mobile */}
              <motion.div 
                className="absolute inset-0 border border-black/5 rounded-[1.5rem] sm:rounded-[2rem] scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 border border-black/3 rounded-[1.5rem] sm:rounded-[2rem] scale-125"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
          >
            {aboutMe.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-black/70 mb-8 font-light"
          >
            {aboutMe.bio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href={socialLinks.resume}
              target="_blank"
              className="px-6 sm:px-8 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-colors font-medium text-center"
            >
              Resume
            </Link>
            <Link
              href={`mailto:${socialLinks.email}`}
              className="px-6 sm:px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all font-medium text-center"
            >
              Get in touch
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 sm:gap-6 justify-center"
          >
            {[
              { href: socialLinks.linkedin, label: 'LinkedIn' },
              { href: socialLinks.github, label: 'GitHub' },
              { href: socialLinks.calendly, label: 'Schedule' }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-black/60 hover:text-black transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiChevronDown className="w-6 h-6 text-black/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">
                {aboutMe.education.degree}
              </h3>
              <p className="text-black/70 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Graduate from {aboutMe.education.school}, specializing in technology management and innovation. 
                With a passion for creating digital solutions that make a difference.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black/70 text-sm sm:text-base">📧 {aboutMe.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black/70 text-sm sm:text-base">📱 {aboutMe.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                  <span className="text-black/70 text-sm sm:text-base">🌐 {aboutMe.webName}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {aboutMe.skills.slice(0, 12).map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 sm:px-4 py-2 bg-black/5 rounded-lg text-black/80 text-xs sm:text-sm font-medium text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          </motion.div>
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-32 px-4 sm:px-6 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-black/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in full-stack development, 
              AI integration, and innovative problem-solving.
            </p>
          </motion.div>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-black/70 text-base sm:text-lg">
              Ready to bring your ideas to life? Let's discuss your next project.
            </p>
          </motion.div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-black/60 text-xs sm:text-sm">
              © 2025 {aboutMe.name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
