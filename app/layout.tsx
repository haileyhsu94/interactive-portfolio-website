import type { Metadata, Viewport } from 'next'
import { Didact_Gothic, Oregano } from 'next/font/google'
import '../styles/globals.css'
import { OpenProjectsProvider } from '../contexts/OpenProjectsContext'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  // Prevent address bar from hiding
  interactiveWidget: 'resizes-content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${didactGothic.variable} ${oregano.variable} ${didactGothic.className} bg-black`}>
        <OpenProjectsProvider>
          {children}
        </OpenProjectsProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple mobile viewport handling
              if (typeof window !== 'undefined' && window.innerWidth <= 480) {
                function updateViewport() {
                  const vh = window.innerHeight * 0.01;
                  document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
                }
                
                updateViewport();
                window.addEventListener('resize', updateViewport);
                window.addEventListener('orientationchange', updateViewport);
              }
            `,
          }}
        />
      </body>
    </html>
  )
} 