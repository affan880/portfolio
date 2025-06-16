import './globals.css'
import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
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
          <div className="min-h-screen w-full bg-white relative">
            {/* Noise Texture (Darker Dots) Background */}
            <div
              className="fixed inset-0 z-0"
              style={{
                background: "#ffffff",
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
