'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FiAlertTriangle, FiHome, FiRefreshCw } from 'react-icons/fi'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error.tsx:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="card max-w-lg w-full text-center p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
            <FiAlertTriangle className="w-10 h-10" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">
            Something went wrong
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400">
            An unexpected error has occurred. Our team has been notified.
          </p>
          
          {error.message && (
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg w-full text-left overflow-auto">
              <p className="text-red-600 dark:text-red-400 text-sm font-mono">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-slate-500 dark:text-slate-500 text-xs mt-2 font-mono">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 w-full justify-center">
            <button
              onClick={reset}
              className="hero-button inline-flex items-center"
            >
              <FiRefreshCw className="mr-2" />
              Try Again
            </button>
            
            <Link
              href="/"
              className="px-6 py-2 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 font-medium transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 shadow-sm inline-flex items-center"
            >
              <FiHome className="mr-2" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 