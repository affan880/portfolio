'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FiCode, FiServer, FiDatabase, FiLayout, FiTool, FiShield, FiCpu, FiUsers, FiSmartphone, FiGitMerge, FiCloud, FiLifeBuoy, FiTerminal, FiBox, FiBriefcase } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaWindows, FaLinux, FaApple, FaDatabase as FaDbIcon, FaWordpress, FaJira, FaTrello, FaEnvelope, FaCalendarAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiStyledcomponents, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiFirebase, SiRedis, SiSwift, SiFlutter, SiGit, SiGooglecloud } from 'react-icons/si'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Skill {
  name: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const getSkillIcon = (skillName: string): React.ReactNode => {
  const lowerCaseName = skillName.toLowerCase();
  
  if (lowerCaseName.includes('react')) return <FaReact className="w-5 h-5 text-blue-400" />;
  if (lowerCaseName.includes('typescript')) return <SiTypescript className="w-5 h-5 text-blue-600" />;
  if (lowerCaseName.includes('next.js')) return <FiCode className="w-5 h-5 text-black dark:text-white" />;
  if (lowerCaseName.includes('html')) return <FaHtml5 className="w-5 h-5 text-orange-500" />;
  if (lowerCaseName.includes('css')) return <FaCss3Alt className="w-5 h-5 text-blue-500" />;
  if (lowerCaseName.includes('tailwind')) return <SiTailwindcss className="w-5 h-5 text-teal-400" />;
  if (lowerCaseName.includes('styled')) return <SiStyledcomponents className="w-5 h-5 text-pink-500" />;
  if (lowerCaseName.includes('javascript')) return <SiJavascript className="w-5 h-5 text-yellow-400" />;

  if (lowerCaseName.includes('node.js')) return <FaNodeJs className="w-5 h-5 text-green-500" />;
  if (lowerCaseName.includes('express')) return <SiExpress className="w-5 h-5 text-gray-500" />;
  if (lowerCaseName.includes('graphql')) return <SiGraphql className="w-5 h-5 text-pink-600" />;
  if (lowerCaseName.includes('rest')) return <FiCode className="w-5 h-5 text-blue-700" />;

  if (lowerCaseName.includes('firebase')) return <SiFirebase className="w-5 h-5 text-yellow-500" />;
  if (lowerCaseName.includes('mongo')) return <SiMongodb className="w-5 h-5 text-green-600" />;
  if (lowerCaseName.includes('postgres')) return <SiPostgresql className="w-5 h-5 text-blue-700" />;
  if (lowerCaseName.includes('redis')) return <SiRedis className="w-5 h-5 text-red-600" />;
  if (lowerCaseName.includes('sql')) return <FaDbIcon className="w-5 h-5 text-orange-700" />;

  if (lowerCaseName.includes('react native')) return <FaReact className="w-5 h-5 text-blue-400" />;
  if (lowerCaseName.includes('swift')) return <SiSwift className="w-5 h-5 text-orange-500" />;
  if (lowerCaseName.includes('flutter')) return <SiFlutter className="w-5 h-5 text-blue-500" />;

  if (lowerCaseName.includes('git')) return <SiGit className="w-5 h-5 text-red-500" />;
  if (lowerCaseName.includes('docker')) return <FaDocker className="w-5 h-5 text-blue-600" />;
  if (lowerCaseName.includes('aws')) return <FaAws className="w-5 h-5 text-orange-500" />;
  if (lowerCaseName.includes('ci/cd')) return <FiGitMerge className="w-5 h-5 text-gray-600" />;

  if (lowerCaseName.includes('hardware')) return <FiCpu className="w-5 h-5 text-red-400" />;
  if (lowerCaseName.includes('window')) return <FaWindows className="w-5 h-5 text-blue-500" />;
  if (lowerCaseName.includes('linux')) return <FaLinux className="w-5 h-5 text-yellow-600" />;
  if (lowerCaseName.includes('macos')) return <FaApple className="w-5 h-5 text-gray-400" />;
  if (lowerCaseName.includes('network')) return <FiServer className="w-5 h-5 text-green-400" />;
  if (lowerCaseName.includes('security')) return <FiShield className="w-5 h-5 text-yellow-400" />;
  if (lowerCaseName.includes('ticketing')) return <FaJira className="w-5 h-5 text-blue-800" />;

  if (lowerCaseName.includes('active directory')) return <FiUsers className="w-5 h-5 text-blue-700" />;
  if (lowerCaseName.includes('office')) return <FiBriefcase className="w-5 h-5 text-red-500" />;
  if (lowerCaseName.includes('google workspace')) return <SiGooglecloud className="w-5 h-5 text-blue-500" />;
  if (lowerCaseName.includes('virtual')) return <FiBox className="w-5 h-5 text-gray-600" />;
  if (lowerCaseName.includes('powershell')) return <FiTerminal className="w-5 h-5 text-blue-800" />;
  if (lowerCaseName.includes('bash')) return <FiTerminal className="w-5 h-5 text-gray-700" />;

  if (lowerCaseName.includes('communication')) return <FiLifeBuoy className="w-5 h-5 text-purple-500" />;
  if (lowerCaseName.includes('collaboration')) return <FiUsers className="w-5 h-5 text-indigo-500" />;
  if (lowerCaseName.includes('service')) return <FiLifeBuoy className="w-5 h-5 text-teal-500" />;
  if (lowerCaseName.includes('problem')) return <FiTool className="w-5 h-5 text-orange-500" />;
  if (lowerCaseName.includes('thinking')) return <FiCpu className="w-5 h-5 text-gray-500" />;

  return <FiCode className="w-5 h-5 text-gray-500" />;
};

const SkillVisualization: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  const skillCategories: SkillCategory[] = [
    {
      name: 'frontend',
      icon: <FiLayout className="w-5 h-5" />,
      skills: [
        { name: 'React' }, { name: 'TypeScript' }, { name: 'Next.js' }, 
        { name: 'HTML/CSS' }, { name: 'Tailwind CSS' }, { name: 'Styled Components' },
        { name: 'JavaScript' }
      ]
    },
    {
      name: 'backend',
      icon: <FiServer className="w-5 h-5" />,
      skills: [
        { name: 'Node.js' }, { name: 'Express' }, { name: 'GraphQL' }, { name: 'REST API' }
      ]
    },
    {
      name: 'database',
      icon: <FiDatabase className="w-5 h-5" />,
      skills: [
        { name: 'Firebase' }, { name: 'MongoDB' }, { name: 'PostgreSQL' }, { name: 'SQL' }
      ]
    },
    {
      name: 'mobile',
      icon: <FiSmartphone className="w-5 h-5" />,
      skills: [
        { name: 'React Native' }, { name: 'Flutter' }
      ]
    },
    {
      name: 'devops',
      icon: <FiTool className="w-5 h-5" />,
      skills: [
        { name: 'Git' }, { name: 'Docker' }, { name: 'AWS' }, { name: 'CI/CD' }
      ]
    },
    {
      name: 'it-core',
      icon: <FiCpu className="w-5 h-5" />,
      skills: [
        { name: 'Hardware Troubleshooting' }, { name: 'Windows' }, { name: 'Linux' }, 
        { name: 'macOS' }, { name: 'Networking Basics' }, { name: 'Cybersecurity Awareness' }, 
        { name: 'Ticketing Systems' }
      ]
    },
    {
      name: 'it-tools',
      icon: <FiServer className="w-5 h-5" />,
      skills: [
        { name: 'Active Directory' }, { name: 'Microsoft Office' }, { name: 'Google Workspace' }, 
        { name: 'Virtualization (VMware/VirtualBox)' }, { name: 'SQL' }, 
        { name: 'PowerShell' }, { name: 'Bash' }
      ]
    },
    {
      name: 'soft-skills',
      icon: <FiUsers className="w-5 h-5" />,
      skills: [
        { name: 'Effective Communication' }, { name: 'Team Collaboration' }, { name: 'Customer Service' }, 
        { name: 'Problem Solving' }, { name: 'Critical Thinking' }
      ]
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const activeSkills = skillCategories.find(category => category.name === activeCategory)?.skills || [];

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto my-12">
      <div className="flex flex-wrap mb-8 justify-center gap-2 md:gap-4">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
              activeCategory === category.name
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {category.icon}
            <span className="capitalize">{category.name.replace('-', ' ')}</span>
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeSkills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-slate-50 dark:bg-slate-700/60 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-2">
                {getSkillIcon(skill.name)} 
              </div>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 bg-slate-100 dark:bg-slate-900/30 rounded-lg border-l-4 border-primary-500">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white capitalize mb-2">
            {activeCategory === 'it-core' ? 'Core IT Skills' : 
             activeCategory === 'it-tools' ? 'Technical IT Tools' :
             activeCategory === 'soft-skills' ? 'Soft Skills' :
             `${activeCategory.replace('-',' ')} Development`}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            {activeCategory === 'frontend' && "Building responsive, interactive, and user-friendly interfaces using modern JavaScript frameworks and CSS techniques."}
            {activeCategory === 'backend' && "Developing robust server-side applications, RESTful APIs, and microservices to power web applications."}
            {activeCategory === 'database' && "Designing efficient database schemas and implementing data storage solutions for scalable applications."}
            {activeCategory === 'mobile' && "Creating cross-platform mobile applications with native-like performance and intuitive UX."}
            {activeCategory === 'devops' && "Implementing CI/CD pipelines, container solutions, and cloud infrastructure for efficient deployment and scaling."}
            {activeCategory === 'it-core' && "Diagnosing and resolving common hardware and software issues across multiple operating systems with a focus on network fundamentals and security awareness."}
            {activeCategory === 'it-tools' && "Working with enterprise IT tools including directory services, productivity suites, virtualization platforms and scripting languages for automation."}
            {activeCategory === 'soft-skills' && "Effectively communicating technical concepts, collaborating within teams, and applying critical thinking to solve problems while providing excellent customer service."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillVisualization; 