'use client'

import React, { useState } from 'react'
import { FiBriefcase, FiArrowRight, FiAward } from 'react-icons/fi'
import {
  ExperienceContainer,
  TabsContainer,
  Tab,
  ExperienceContent,
  ExperienceItem,
  JobHeader,
  JobTitle,
  JobDetails,
  AchievementsList,
  AchievementItem,
  ProjectsContainer,
  ProjectTitle
} from '../components/styles/Experience.styled'
import { Section, SectionTitle } from '../components/styles/Section.styled'

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
      id: 'plexar',
      company: 'Plexar',
      title: 'Developer',
      location: 'Greater New York Area',
      dateRange: 'Jan 2024 - Present',
      achievements: [
        'Developed Plexar, a React Native mobile application for advanced email and task management, available at plexar.xyz.',
        'Integrated the Gmail API to enable users to seamlessly send and manage emails directly within the application.',
        'Implemented AI-powered features to provide users with advanced, hands-free control over Gmail functionalities.',
        'Designed and built an intuitive task management system within Plexar to complement email workflows and boost productivity.'
      ],
      projects: [
        {
          name: 'Plexar Mobile Application',
          description: 'A React Native app integrating the Gmail API for AI-enhanced email management and built-in task organization. Visit at plexar.xyz.'
        }
      ]
    },
    {
      id: 'nordstone',
      company: 'Nordstone',
      title: 'Junior Software Developer',
      location: 'Remote',
      dateRange: 'May 2021 - Dec 2021',
      achievements: [
        'Built high-performance UI components using React and Chakra UI, improving load times by 15%',
        'Led UI optimizations, reducing render time by 30% using React.memo and useCallback',
        'Worked on a modular UI framework to streamline frontend development and ensure consistency',
        'Configured and optimized the development environment using tools like Docker, reducing build times and improving team productivity'
      ],
      projects: [
        {
          name: 'UI Component Library',
          description: 'Reusable UI components built with React and Chakra UI for consistent user experience across multiple applications.'
        }
      ]
    },
    {
      id: 'texla',
      company: 'Texla Culture',
      title: 'Application Developer Intern',
      location: 'Remote',
      dateRange: 'Jan 2021 - Apr 2021',
      achievements: [
        'Refactored key UI components using TypeScript, improving code reliability',
        'Wrote unit and integration tests using Vitest and Jest, improving code coverage by 35%',
        'Collaborated with Product and UX teams to enhance UI/UX, increasing user satisfaction by 15%',
        'Collaboratively developed and implemented a coding standards guide to enhance team code consistency and maintainability with the team'
      ],
      projects: [
        {
          name: 'Test Infrastructure',
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

  const [activeTabId, setActiveTabId] = useState<string>('taskbox')

  const activeExperience = experiences.find(exp => exp.id === activeTabId) || experiences[0]

  return (
    <Section id="experience">
      {/* <SectionTitle>Where I've Worked</SectionTitle> */}
      <ExperienceContainer>
        <TabsContainer>
          {experiences.map((exp) => (
            <Tab
              key={exp.id}
              $active={activeTabId === exp.id}
              onClick={() => setActiveTabId(exp.id)}
            >
              {exp.company}
            </Tab>
          ))}
        </TabsContainer>
        <ExperienceContent>
          <ExperienceItem>
            <JobHeader>
              <JobTitle>
                {activeExperience.title} <span className="company">@ {activeExperience.company}</span>
              </JobTitle>
              <JobDetails>
                <span>{activeExperience.dateRange}</span>
                <span className="separator">•</span>
                <span>{activeExperience.location}</span>
              </JobDetails>
            </JobHeader>
            <AchievementsList>
              {activeExperience.achievements.map((achievement, index) => (
                <AchievementItem key={index}>{achievement}</AchievementItem>
              ))}
            </AchievementsList>
            
            {activeExperience.projects.length > 0 && (
              <ProjectsContainer>
                <h4>Key Projects:</h4>
                {activeExperience.projects.map((project, index) => (
                  <div key={index}>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <p>{project.description}</p>
                  </div>
                ))}
              </ProjectsContainer>
            )}
          </ExperienceItem>
        </ExperienceContent>
      </ExperienceContainer>
    </Section>
  )
}

export default Experience 