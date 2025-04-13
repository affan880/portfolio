'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import Projects3D with dynamic import and explicit client-side only rendering
const Projects3DComponent = dynamic(
  () => import('./Projects3D'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[70vh] bg-slate-900 rounded-xl shadow-lg flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
      </div>
    )
  }
)

interface ProjectsWrapperProps {
  onProjectSelect: (projectIndex: number) => void
}

export default function ProjectsWrapper({ onProjectSelect }: ProjectsWrapperProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-[70vh] bg-slate-900 rounded-xl shadow-lg flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
        </div>
      }
    >
      <Projects3DComponent onProjectSelect={onProjectSelect} />
    </Suspense>
  )
} 