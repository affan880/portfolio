'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'

interface JobExperience {
  id: string
  company: string
  title: string
  location: string
  dateRange: string
  achievements: string[]
  projects: { name: string; description: string }[]
}

const Experience: React.FC = () => {
  const experiences: JobExperience[] = [
    {
      id: 'nordstone',
      company: 'Nordstone',
      title: 'Junior Software Developer',
      location: 'Remote',
      dateRange: 'December 2023 - March 2024',
      achievements: [
        'Built high-performance UI components using React and Chakra UI, improving load times by 15%',
        'Led UI optimizations, reducing render time by 30% using React.memo and useCallback',
        'Worked on a modular UI framework to streamline frontend development and ensure consistency',
        'Configured and optimized the development environment using tools like Docker, reducing build times and improving team productivity'
      ],
      projects: [
        {
          name: 'PokerBox',
          description: 'Reusable UI components built with React and Chakra UI for consistent user experience across multiple applications.'
        }
      ]
    },
    {
      id: 'texla',
      company: 'Texla Culture',
      title: 'Application Developer Intern',
      location: 'Remote',
      dateRange: 'January 2023 - June 2023',
      achievements: [
        'Refactored key UI components using TypeScript, improving code reliability',
        'Wrote unit and integration tests using Vitest and Jest, improving code coverage by 35%',
        'Collaborated with Product and UX teams to enhance UI/UX, increasing user satisfaction by 15%',
        'Collaboratively developed and implemented a coding standards guide to enhance team code consistency and maintainability with the team'
      ],
      projects: [
        {
          name: 'TexlaCulture',
          description: 'Comprehensive testing framework with Jest and Vitest improving test coverage and code reliability.'
        }
      ]
    },
    {
      id: 'ieee-tech-lead',
      company: 'IEEE SB',
      title: 'Technical Lead',
      location: 'Hyderabad, Telangana, India',
      dateRange: 'Aug 2022 - Apr 2023',
      achievements: [
        'Led development and management of the student club\'s website, enhancing online presence and user engagement',
        'Spearheaded technological initiatives including workshops, hackathons, and technical events',
        'Managed a team of developers implementing impactful projects that bridged theory and practical application',
        'Fostered collaboration within the tech community by organizing cross-functional technical activities'
      ],
      projects: [
        {
          name: 'Club Website Development',
          description: 'Designed and implemented the official IEEE NSAKCET Student Branch website, improving visibility and member engagement.'
        },
        {
          name: 'Technical Workshop Series',
          description: 'Organized hands-on technical workshops covering emerging technologies for students to gain practical skills.'
        }
      ]
    },
    {
      id: 'ieee-vice-chair',
      company: 'IEEE CS',
      title: 'Vice Chair',
      location: 'Hyderabad, Telangana, India',
      dateRange: 'Jun 2022 - Jan 2023',
      achievements: [
        'Collaborated with a cross-functional team to plan and execute engaging events and technical workshops',
        'Provided leadership support and enhanced membership engagement through targeted programs',
        'Represented IEEE NSAKCET within the college community, promoting professional development opportunities',
        'Connected members with valuable industry resources, enhancing the branch\'s impact and visibility'
      ],
      projects: [
        {
          name: 'Membership Growth Initiative',
          description: 'Implemented strategies that increased IEEE student membership by developing valuable networking opportunities.'
        }
      ]
    }
  ]

  const [activeTabId, setActiveTabId] = useState<string>('nordstone')
  const activeExperience = experiences.find(exp => exp.id === activeTabId) || experiences[0]

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto">
      {/* Company Tabs */}
      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:min-w-[200px] pb-2 lg:pb-0">
        {experiences.map((exp, index) => (
          <motion.button
            key={exp.id}
            onClick={() => setActiveTabId(exp.id)}
            className={`px-4 lg:px-6 py-2.5 lg:py-3 text-left whitespace-nowrap rounded-lg border transition-all duration-300 text-sm lg:text-base flex-shrink-0 ${
              activeTabId === exp.id
                ? 'bg-black text-white border-black'
                : 'bg-white text-black/70 border-black/10 hover:border-black/30 hover:text-black'
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {exp.company}
          </motion.button>
        ))}
      </div>

      {/* Experience Content */}
      <motion.div 
        className="flex-1 min-w-0"
        key={activeTabId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-black/10">
          {/* Job Header */}
          <div className="mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 leading-tight">
              {activeExperience.title}
              <span className="text-black/60 block sm:inline"> 
                <span className="hidden sm:inline"> @ </span>
                <span className="sm:hidden">@</span>
                {activeExperience.company}
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-black/60">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{activeExperience.dateRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{activeExperience.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6 lg:mb-8">
            <ul className="space-y-2 sm:space-y-3">
              {activeExperience.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 text-black/80 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-black mt-1 sm:mt-2 text-sm sm:text-lg flex-shrink-0">▸</span>
                  <span className="min-w-0">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          {activeExperience.projects.length > 0 && (
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">Key Projects:</h4>
              <div className="space-y-3 sm:space-y-4">
                {activeExperience.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="p-3 sm:p-4 bg-black/5 rounded-xl border border-black/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h5 className="font-semibold text-black mb-2 text-sm sm:text-base">{project.name}</h5>
                    <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience 