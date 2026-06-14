import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noman — Developer & Builder',
  description: 'Full-stack developer building thoughtful software with Java, React, and modern web technologies.',
  keywords: ['Noman', 'developer', 'portfolio', 'React', 'Java', 'Next.js'],
  openGraph: {
    title: 'Noman — Developer & Builder',
    description: 'Full-stack developer building thoughtful software.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}