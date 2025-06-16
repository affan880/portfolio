'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCalendar } from 'react-icons/fi'
import { socialLinks, aboutMe } from '@/utils/data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
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
      
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '', _gotcha: '' })
      
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-6 sm:space-y-8"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
            Ready to start something amazing?
          </h3>
          <p className="text-black/70 text-base sm:text-lg leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, 
            or just connect with fellow developers and entrepreneurs.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Email</h4>
              <a 
                href={`mailto:${socialLinks.email}`} 
                className="text-black/60 hover:text-black transition-colors text-sm sm:text-base break-all"
              >
                {socialLinks.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Phone</h4>
              <a 
                href={`tel:${aboutMe.phone}`} 
                className="text-black/60 hover:text-black transition-colors text-sm sm:text-base"
              >
                {aboutMe.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Location</h4>
              <p className="text-black/60 text-sm sm:text-base">New York City, USA</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/5 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-black group-hover:text-white transition-all flex-shrink-0">
              <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-black mb-1 text-sm sm:text-base">Schedule a Call</h4>
              <a 
                href={socialLinks.calendly} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition-colors text-sm sm:text-base"
              >
                Book a time on Calendly
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="pt-4 sm:pt-6">
          <h4 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Connect on Social</h4>
          <div className="flex space-x-3 sm:space-x-4">
            <motion.a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/5 text-black/60 hover:bg-black hover:text-white transition-all"
              aria-label="GitHub"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/5 text-black/60 hover:bg-black hover:text-white transition-all"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="w-full"
      >
        <form 
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-black/10 hover:border-black/20 transition-all duration-300 w-full"
        >
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/20 rounded-xl focus:border-black focus:ring-0 bg-white text-black placeholder-black/40 transition-colors text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/20 rounded-xl focus:border-black focus:ring-0 bg-white text-black placeholder-black/40 transition-colors text-sm sm:text-base"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-black/20 rounded-xl focus:border-black focus:ring-0 bg-white text-black placeholder-black/40 transition-colors text-sm sm:text-base resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            
            {/* Honeypot field */}
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
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-black text-white font-semibold rounded-xl flex items-center justify-center transition-all hover:bg-black/80 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FiSend className="mr-2" /> Send Message
                  </span>
                )}
              </motion.button>
            </div>
            
            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 text-green-700 rounded-xl text-sm border border-green-200"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitError && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-200"
              >
                {submitError}
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  )
} 