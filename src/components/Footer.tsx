'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { socialLinks } from '@/utils/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
          
          {/* Logo/Name */}
          <Link href="/" className="font-heading font-bold text-xl text-slate-900 dark:text-white">
            Syed<span className="text-primary-600">Affan</span>
          </Link>
          
          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 mt-6 mb-8">
            <Link href="#about" className="nav-link text-sm">About</Link>
            <Link href="#skills" className="nav-link text-sm">Skills</Link>
            <Link href="#projects" className="nav-link text-sm">Projects</Link>
            <Link href="#contact" className="nav-link text-sm">Contact</Link>
            <a 
              href={socialLinks.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm"
            >
              Resume
            </a>
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${socialLinks.email}`}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>© {currentYear} Syed Affan. All rights reserved.</p>
            <p className="mt-2">
              Full Stack Developer specializing in modern web and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 