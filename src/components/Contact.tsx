'use client'

import { useState, useRef, ChangeEvent, FormEvent, MouseEvent, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCalendar } from 'react-icons/fi'
import { socialLinks, aboutMe } from '@/utils/data'
// import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '', // Add honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const formRef = useRef<HTMLFormElement>(null)
  
  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(touchCheck);
  }, []);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Send data to Formspree with the provided ID
      const response = await fetch('https://formspree.io/f/xldjzvya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        let errorMessage = 'There was an error sending your message. Please try again.'
        if (data && data.errors) {
          errorMessage = data.errors.map((error: any) => error.message).join(', ')
        }
        throw new Error(errorMessage)
      }
      
      // Handle successful submission
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '', _gotcha: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(error instanceof Error ? error.message : 'There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isTouchDevice || !formRef.current) return;
    const form = formRef.current
    
    const rect = form.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 40
    const rotateY = (centerX - x) / 40
    
    form.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
  
  const handleMouseLeave = () => {
    if (isTouchDevice || !formRef.current) return;
    const form = formRef.current
    form.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    form.style.transition = 'transform 0.5s ease-out'
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading mb-4">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-6">
              Let's Connect
            </h3>
            
            <p className="text-slate-700 dark:text-slate-300 mb-8">
              Feel free to reach out about opportunities, collaborations, or just to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Email</h4>
                  <a 
                    href={`mailto:${socialLinks.email}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Phone</h4>
                  <a 
                    href={`tel:${aboutMe.phone}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {aboutMe.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    New York City, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mr-4">
                  <FiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Schedule a Call</h4>
                  <a 
                    href={socialLinks.calendly} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Book a time on Calendly
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-medium text-slate-900 dark:text-white mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form with 3D Effect */}
          <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
              onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
              className="card p-6 md:p-8 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Your message..."
                  />
                </div>
                
                {/* Honeypot field to prevent spam */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <FiSend className="mr-2" /> Send Message
                      </span>
                    )}
                  </button>
                </div>
                
                {submitSuccess && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 