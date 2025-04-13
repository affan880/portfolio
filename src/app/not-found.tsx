import Link from 'next/link'
import { FiSearch, FiHome } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="card max-w-lg w-full text-center p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
            <FiSearch className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-heading">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 font-heading">
            Page Not Found
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          
          <Link
            href="/"
            className="hero-button inline-flex items-center"
          >
            <FiHome className="mr-2" />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
} 