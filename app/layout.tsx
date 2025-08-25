import type { Metadata } from 'next'
import { Didact_Gothic, Oregano } from 'next/font/google'
import '../styles/globals.css'

const didactGothic = Didact_Gothic({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-didact-gothic'
})

const oregano = Oregano({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-oregano',
})

export const metadata: Metadata = {
  title: 'Hailey Hsu - Interactive Portfolio',
  description: 'Interactive portfolio website showcasing Hailey Hsu\'s work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${didactGothic.variable} ${oregano.variable} bg-black`}>{children}</body>
    </html>
  )
} 