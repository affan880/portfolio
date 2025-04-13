'use client'

import { useState } from 'react'
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [error, setError] = useState<Error | null>(null)

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="card max-w-lg w-full text-center p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
              <FiAlertTriangle className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Something went wrong
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              An error occurred while rendering this page.
            </p>
            
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg w-full mb-6 text-left overflow-auto">
              <p className="text-red-600 dark:text-red-400 text-sm font-mono">
                {error.message}
              </p>
            </div>
            
            <button 
              onClick={() => {
                setError(null)
                window.location.reload()
              }}
              className="hero-button inline-flex items-center"
            >
              <FiRefreshCw className="mr-2" />
              Reload Page
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundaryInternal setError={setError}>
      {children}
    </ErrorBoundaryInternal>
  )
}

interface ErrorBoundaryInternalProps {
  children: React.ReactNode
  setError: (error: Error) => void
}

// Internal component that actually catches errors and reports them to the parent
class ErrorBoundaryInternal extends React.Component<ErrorBoundaryInternalProps> {
  componentDidCatch(error: Error) {
    // Report the error to the parent component
    this.props.setError(error)
    
    // You could also log to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error)
  }

  render() {
    return this.props.children
  }
}

// Fix for missing React import
import React from 'react' 