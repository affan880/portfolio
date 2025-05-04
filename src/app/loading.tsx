'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiTerminal, FiCode, FiCpu, FiServer, FiLayout } from 'react-icons/fi'
import Image from 'next/image'

export default function Loading() {
  const [text, setText] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Simplified loading text for mobile
  const loadingText = isMobile ? [
    'Loading...',
    'Almost there...',
    'Ready!'
  ] : [
    'Initializing environment...',
    'Loading assets...',
    'Preparing interface...',
    'Optimizing performance...',
    'Almost there...',
    'Ready!'
  ]

  useEffect(() => {
    let currentIndex = 0
    let currentText = ''
    let isDeleting = false
    let typingSpeed = isMobile ? 100 : 50

    const typeText = () => {
      const currentWord = loadingText[currentIndex]

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1)
      } else {
        currentText = currentWord.substring(0, currentText.length + 1)
      }

      setText(currentText)

      let typeSpeed = isDeleting ? typingSpeed / 2 : typingSpeed

      if (!isDeleting && currentText === currentWord) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && currentText === '') {
        isDeleting = false
        currentIndex = (currentIndex + 1) % loadingText.length
        setCurrentStep(currentIndex)
      }

      setTimeout(typeText, typeSpeed)
    }

    typeText()
  }, [isMobile])

  // Simplified icons for mobile
  const icons = isMobile ? [
    <FiTerminal key="terminal" className="text-primary-500 w-6 h-6" />,
    <FiCode key="code" className="text-blue-500 w-6 h-6" />,
  ] : [
    <FiTerminal key="terminal" className="text-primary-500 w-8 h-8" />,
    <FiCode key="code" className="text-blue-500 w-8 h-8" />,
    <FiCpu key="cpu" className="text-purple-500 w-8 h-8" />,
    <FiServer key="server" className="text-green-500 w-8 h-8" />,
    <FiLayout key="layout" className="text-yellow-500 w-8 h-8" />,
  ]

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 z-50">
      <div className="max-w-md w-full px-6 py-8 bg-white dark:bg-slate-800 rounded-lg shadow-xl">
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: isMobile ? 1.5 : 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: currentStep % icons.length === index ? 1 : 0.3,
                  scale: currentStep % icons.length === index ? 1.2 : 0.8,
                  rotate: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: isMobile ? 1.5 : 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  rotate: `${index * (360 / icons.length)}deg`,
                  translateX: `${Math.cos(index * (360 / icons.length) * Math.PI / 180) * (isMobile ? 30 : 40)}px`,
                  translateY: `${Math.sin(index * (360 / icons.length) * Math.PI / 180) * (isMobile ? 30 : 40)}px`,
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {text}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {isMobile ? 'Please wait...' : 'Preparing your experience...'}
          </p>
        </div>
      </div>
    </div>
  )
} 