import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Syed Affan | Full Stack Developer',
  description: 'Experienced React and React Native developer specializing in creating innovative web and mobile applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen transition-colors duration-300">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
