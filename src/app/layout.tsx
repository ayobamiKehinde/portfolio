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

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://opslyco.uk/#org',
      name: 'Opsly',
      url: 'https://opslyco.uk',
      logo: 'https://opslyco.uk/images/ayo.png',
      description: 'Fractional revenue operations for B2B teams that have outgrown their current system. CRM, AI automation, attribution, and process definition.',
      founder: {
        '@type': 'Person',
        name: 'Ayobami Kehinde',
        jobTitle: 'Fractional RevOps Consultant and Founder',
        sameAs: 'https://www.linkedin.com/in/ayobami-kehinde-a00215245/',
      },
      sameAs: [
        'https://www.linkedin.com/in/ayobami-kehinde-a00215245/',
      ],
      areaServed: 'Worldwide',
      knowsAbout: [
        'revenue operations',
        'fractional RevOps',
        'CRM optimisation',
        'AI automation for revenue teams',
        'sales operations',
        'generative engine optimization',
        'GEO for B2B',
        'AI search visibility',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://opslyco.uk/#website',
      url: 'https://opslyco.uk',
      name: 'Opsly',
      publisher: { '@id': 'https://opslyco.uk/#org' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body style={{ fontFamily: 'var(--font-space), Space Grotesk, system-ui, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
