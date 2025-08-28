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
  title: 'Hailey Hsu | Product Designer',
  description: 'I focus on practical workflows and turn messy problems into systems that grow smoothly.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${didactGothic.variable} ${oregano.variable} ${didactGothic.className} bg-black`}>{children}</body>
    </html>
  )
} 