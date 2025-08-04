import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artsync',
  description: 'Created with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body>{children}</body>
    </html>
  )
}
