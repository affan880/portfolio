'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { socialLinks } from '@/utils/data'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              Syed<span className="text-primary-600">Affan</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="nav-link">About</Link>
              <Link href="#experience" className="nav-link">Experience</Link>
              <Link href="#skills" className="nav-link">Skills</Link>
              <Link href="#projects" className="nav-link">Projects</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
              
              <a 
                href={socialLinks.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-button !py-1.5 !px-4"
              >
                Resume
              </a>
              
              <motion.button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white overflow-hidden"
                aria-label="Toggle dark mode"
                whileTap={{ scale: 0.9 }}
                layout
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ y: 20, opacity: 0, rotate: -30 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden space-x-4">
              <motion.button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white overflow-hidden"
                aria-label="Toggle dark mode"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ y: 20, opacity: 0, rotate: -30 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-200"
                aria-label="Open menu"
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
            <nav className="flex flex-col py-4">
              <Link 
                href="#about" 
                className="px-8 py-3 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="px-8 py-3 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="#skills" 
                className="px-8 py-3 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="px-8 py-3 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-3 nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-8 py-3">
                <a 
                  href={socialLinks.resume} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero-button inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
} 