'use client'

import { useState } from 'react'
import { aboutMe } from '@/utils/data'
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiLayers, 
  FiTool, 
  FiPackage 
} from 'react-icons/fi'

const SkillCategory = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <FiCode className="w-6 h-6" />,
    skills: ['ReactJs', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'NextJs', 'Tailwind Css', 'Bootstrap', 'Redux', 'LESS', 'Sass', 'SCSS', 'JQuery']
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: <FiSmartphone className="w-6 h-6" />,
    skills: ['React Native', 'IONIC']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <FiDatabase className="w-6 h-6" />,
    skills: ['Node.js', 'RestAPI', 'MongoDB', 'Firebase']
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    icon: <FiTool className="w-6 h-6" />,
    skills: ['Git', 'Github']
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  
  return (
    <div className="bg-white dark:bg-slate-800/80 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
        Skills By Category
      </h3>
      
      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {SkillCategory.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SkillCategory.find(cat => cat.id === activeCategory)?.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary-500 dark:text-primary-400">
                <SkillIcon skill={skill} />
              </span>
              <span className="text-slate-900 dark:text-white text-sm font-medium">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillIcon({ skill }: { skill: string }) {
  const lowerSkill = skill.toLowerCase()
  
  if (lowerSkill.includes('react')) return <FiCode className="w-5 h-5" />
  if (lowerSkill.includes('node')) return <FiDatabase className="w-5 h-5" />
  if (lowerSkill.includes('git')) return <FiPackage className="w-5 h-5" />
  if (lowerSkill.includes('mongo') || lowerSkill.includes('firebase')) return <FiDatabase className="w-5 h-5" />
  if (lowerSkill.includes('css') || lowerSkill.includes('sass') || lowerSkill.includes('less')) return <FiLayers className="w-5 h-5" />
  
  return <FiCode className="w-5 h-5" />
} 