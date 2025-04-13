'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FiCode, FiServer, FiDatabase, FiLayout, FiTool } from 'react-icons/fi'
import { motion, useAnimation, useInView } from 'framer-motion'

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

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
        { name: 'React', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Next.js', level: 85, color: '#000000' },
        { name: 'HTML/CSS', level: 90, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 85, color: '#38B2AC' },
        { name: 'Styled Components', level: 80, color: '#DB7093' },
      ]
    },
    {
      name: 'backend',
      icon: <FiServer className="w-5 h-5" />,
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Express', level: 85, color: '#000000' },
        { name: 'GraphQL', level: 80, color: '#E10098' },
        { name: 'REST API', level: 90, color: '#0096FF' },
      ]
    },
    {
      name: 'database',
      icon: <FiDatabase className="w-5 h-5" />,
      skills: [
        { name: 'MongoDB', level: 85, color: '#47A248' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'Firebase', level: 75, color: '#FFCA28' },
        { name: 'Redis', level: 70, color: '#DC382D' },
      ]
    },
    {
      name: 'mobile',
      icon: <FiCode className="w-5 h-5" />,
      skills: [
        { name: 'React Native', level: 85, color: '#61DAFB' },
        { name: 'Swift', level: 65, color: '#FA7343' },
        { name: 'Flutter', level: 70, color: '#02569B' },
      ]
    },
    {
      name: 'devops',
      icon: <FiTool className="w-5 h-5" />,
      skills: [
        { name: 'Docker', level: 80, color: '#2496ED' },
        { name: 'AWS', level: 75, color: '#FF9900' },
        { name: 'CI/CD', level: 80, color: '#4285F4' },
        { name: 'Git', level: 90, color: '#F05032' },
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
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.name
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {category.icon}
            <span className="capitalize">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all duration-500">
        <div className="space-y-6">
          {activeSkills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-900 dark:text-white font-medium">{skill.name}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{
                    hidden: { width: 0 },
                    visible: {
                      width: `${skill.level}%`,
                      transition: {
                        duration: 1.2,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill description */}
        <div className="mt-10 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white capitalize mb-2">
            {activeCategory} Development
          </h4>
          <p className="text-slate-600 dark:text-slate-400">
            {activeCategory === 'frontend' && "Building responsive, interactive, and user-friendly interfaces using modern JavaScript frameworks and CSS techniques."}
            {activeCategory === 'backend' && "Developing robust server-side applications, RESTful APIs, and microservices to power web applications."}
            {activeCategory === 'database' && "Designing efficient database schemas and implementing data storage solutions for scalable applications."}
            {activeCategory === 'mobile' && "Creating cross-platform mobile applications with native-like performance and intuitive UX."}
            {activeCategory === 'devops' && "Implementing CI/CD pipelines, container solutions, and cloud infrastructure for efficient deployment and scaling."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillVisualization; 