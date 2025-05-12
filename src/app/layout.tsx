import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import { CustomThemeProvider } from '@/contexts/ThemeProvider'
import StyledComponentsRegistry from './registry'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Syed Affan | Full Stack Developer & IT Professional',
  description: 'Versatile Full Stack Developer and IT Professional skilled in React, Next.js, Node.js, IT support, system administration, and troubleshooting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <CustomThemeProvider>
            <div className="min-h-screen transition-colors duration-300">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </div>
          </CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
