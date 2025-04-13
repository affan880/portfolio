'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import SkillVisualization from '@/components/SkillVisualization'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NavigationWrapper from '@/components/NavigationWrapper'
import ParticleBackground from '@/components/ParticleBackground'
import CustomCursor from '@/components/CustomCursor'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Reusable animation component for sections
interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection = ({ id, children, className = "" }: AnimatedSectionProps) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]);
  
  return (
    <motion.section 
      id={id}
      ref={sectionRef}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const mainRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: mainRef })
  
  // Progress indicator for scrolling
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary-500 to-purple-500 z-50 transform origin-left"
        style={{ scaleX }}
      />
      
      <NavigationWrapper>
        <main ref={mainRef} className="flex min-h-screen flex-col bg-white dark:bg-slate-900">
          <Header />
          
          <section id="home">
            <Hero />
          </section>
          
          <AnimatedSection id="about" className="py-20 bg-white dark:bg-slate-900">
            <About />
          </AnimatedSection>
          
          <AnimatedSection id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                  Work <span className="text-primary-600">Experience</span>
                </h2>
                <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              </motion.div>
              <Experience />
            </div>
          </AnimatedSection>
          
          <AnimatedSection id="skills" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                  My <span className="text-primary-600">Skills</span>
                </h2>
                <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              </motion.div>
              <SkillVisualization />
            </div>
          </AnimatedSection>
          
          <AnimatedSection id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                  Featured <span className="text-primary-600">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              </motion.div>
              <Projects />
            </div>
          </AnimatedSection>
          
          <AnimatedSection id="contact" className="py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex flex-col items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
                  Get In <span className="text-primary-600">Touch</span>
                </h2>
                <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              </motion.div>
              <Contact />
            </div>
          </AnimatedSection>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Footer />
          </motion.div>
        </main>
      </NavigationWrapper>
    </>
  )
}
