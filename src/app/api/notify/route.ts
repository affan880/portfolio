import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import nodemailer from 'nodemailer'

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const timestamp = new Date().toLocaleString()
    const headersList = await headers()
    
    // Get request body data
    const body = await request.json()
    const { page, screenWidth, screenHeight, colorScheme } = body
    
    // Gather visitor information
    const userAgent = headersList.get('user-agent') || 'Unknown'
    const referer = headersList.get('referer') || 'Direct Visit'
    const acceptLanguage = headersList.get('accept-language') || 'Unknown'
    const platform = headersList.get('sec-ch-ua-platform') || 'Unknown'
    const browser = headersList.get('sec-ch-ua') || 'Unknown'
    
    // Extract browser and OS information
    const browserInfo = browser.replace(/"/g, '').split(',')[0] || 'Unknown'
    const osInfo = platform.replace(/"/g, '') || 'Unknown'
    
    // Get visit time in different formats
    const visitTime = {
      local: new Date().toLocaleString(),
      utc: new Date().toUTCString(),
      timestamp: Date.now()
    }
    
    // Send email notification with enhanced information
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'syedaffan880@gmail.com',
      subject: 'New Portfolio Visitor! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Portfolio Visitor! 🎉</h2>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">Visit Details</h3>
            <p><strong>Page Visited:</strong> ${page}</p>
            <p><strong>Local Time:</strong> ${visitTime.local}</p>
            <p><strong>UTC Time:</strong> ${visitTime.utc}</p>
            <p><strong>Timestamp:</strong> ${visitTime.timestamp}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0;">Visitor Information</h3>
            <p><strong>Browser:</strong> ${browserInfo}</p>
            <p><strong>Operating System:</strong> ${osInfo}</p>
            <p><strong>Language:</strong> ${acceptLanguage}</p>
            <p><strong>Screen Size:</strong> ${screenWidth}x${screenHeight}</p>
            <p><strong>Color Scheme:</strong> ${colorScheme}</p>
            <p><strong>Referrer:</strong> ${referer}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px;">
            <h3 style="color: #1e40af; margin-top: 0;">Technical Details</h3>
            <p><strong>User Agent:</strong></p>
            <pre style="background-color: #f1f5f9; padding: 10px; border-radius: 4px; overflow-x: auto; font-size: 12px;">${userAgent}</pre>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #64748b;">
            <p>This is an automated notification from your portfolio website.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending notification:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    )
  }
} 