'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VisitorNotification() {
  const pathname = usePathname()

  useEffect(() => {
    const sendNotification = async () => {
      try {
        await fetch('/api/notify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: pathname,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
          }),
        })
      } catch (error) {
        console.error('Error sending visitor notification:', error)
      }
    }

    sendNotification()
  }, [pathname])

  return null // This component doesn't render anything
} 