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
      <head>
        {/* Google Tag Manager - add GA4 tag (G-RGJFCMBNFE) inside GTM for charts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGN6JPKT');`,
          }}
        />
      </head>
      <body className={`${didactGothic.variable} ${oregano.variable} ${didactGothic.className} bg-black`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGN6JPKT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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