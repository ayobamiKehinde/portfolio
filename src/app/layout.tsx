import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Opsly | Fractional RevOps for Scaling B2B Teams',
  description: 'Fractional revenue operations for B2B teams that have outgrown their current system. CRM, AI SDR, attribution, and process definition — remote, no headcount added.',
  metadataBase: new URL('https://opslyco.uk'),
  openGraph: {
    title: 'Opsly | Fractional RevOps for Scaling B2B Teams',
    description: 'Fractional revenue operations for B2B teams that have outgrown their current system.',
    url: 'https://opslyco.uk',
    type: 'website',
    images: [{ url: '/images/ayo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opsly | Fractional RevOps for Scaling B2B Teams',
    description: 'Fractional revenue operations for B2B teams that have outgrown their current system.',
    images: ['/images/ayo.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body style={{ fontFamily: 'var(--font-space), Space Grotesk, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
