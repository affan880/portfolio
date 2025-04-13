'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiTerminal, FiCode, FiCpu, FiServer, FiLayout } from 'react-icons/fi'

export default function Loading() {
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  
  const loadingTexts = [
    'Initializing portfolio...',
    'Loading skills...',
    'Fetching projects...',
    'Configuring experience...',
    'Preparing UI components...',
    'Almost ready...'
  ]

  useEffect(() => {
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)

    // Text typing animation
    let currentText = ''
    let currentTextIndex = 0
    let currentCharIndex = 0

    const typingInterval = setInterval(() => {
      if (currentCharIndex < loadingTexts[currentTextIndex].length) {
        currentText += loadingTexts[currentTextIndex][currentCharIndex]
        setText(currentText)
        currentCharIndex++
      } else {
        setTimeout(() => {
          currentText = ''
          currentCharIndex = 0
          currentTextIndex = (currentTextIndex + 1) % loadingTexts.length
          setCurrentStep(prev => prev + 1)
        }, 1000)
      }
    }, 70)

    // Loading progress animation
    const progressInterval = setInterval(() => {
      setLoadingPercentage(prev => {
        const newValue = prev + Math.random() * 5
        return newValue > 100 ? 100 : newValue
      })
    }, 200)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(typingInterval)
      clearInterval(progressInterval)
    }
  }, [])

  // Array of icons to show during loading
  const icons = [
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
              duration: 2,
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
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  rotate: `${index * (360 / icons.length)}deg`,
                  translateX: `${Math.cos(index * (360 / icons.length) * Math.PI / 180) * 40}px`,
                  translateY: `${Math.sin(index * (360 / icons.length) * Math.PI / 180) * 40}px`,
                }}
              >
                {icon}
              </motion.div>
            ))}
            <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <motion.div 
                className="text-2xl font-bold text-primary-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>SA</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="mb-4 h-6 flex items-center justify-center">
          <div className="font-mono text-slate-800 dark:text-slate-200">
            {text}<span className={`ml-1 inline-block w-2 h-4 bg-primary-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
          </div>
        </div>
        
        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${loadingPercentage}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>
        
        <div className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
          {Math.round(loadingPercentage)}%
        </div>
      </div>
    </div>
  )
} 