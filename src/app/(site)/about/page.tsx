import type { Metadata } from 'next'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About | Opsly',
  description: 'Ayobami Kehinde — founder of Opsly. From software engineering to revenue operations to AI automation, and why that path led to fractional RevOps.',
  alternates: { canonical: 'https://www.opslyco.uk/about' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.opslyco.uk/about#ayobami',
      name: 'Ayobami Kehinde',
      jobTitle: 'Fractional RevOps Consultant & Founder',
      worksFor: { '@type': 'Organization', name: 'Opsly', url: 'https://www.opslyco.uk' },
      description: 'Revenue operations consultant at the intersection of software engineering, sales ops, and AI automation.',
      url: 'https://www.opslyco.uk/about',
      knowsAbout: ['Revenue Operations', 'CRM Implementation', 'HubSpot', 'Salesforce', 'AI Automation'],
    },
    {
      '@type': 'WebPage',
      url: 'https://www.opslyco.uk/about',
      name: 'About Ayobami Kehinde — Founder of Opsly',
      dateModified: '2026-07-28',
      author: { '@type': 'Person', name: 'Ayobami Kehinde' },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FadeIn className=" glow-cyan">
        <div className="section-wrap" style={{ paddingTop: '9rem' }}>
          <div className="about-grid">
            <div className="about-image-wrap">
              <Image src="/images/ayo.jpeg" alt="Ayobami Kehinde, founder of Opsly" width={400} height={533}
                className="about-image" priority />
            </div>
            <div className="about-content">
              <div className="section-label">About</div>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                Ayobami Kehinde
              </h1>
              <div className="about-body">
                <p>I started my career as a software engineer: systems, data flows, building things that work at scale. But over time I kept getting pulled toward a different kind of problem. Not how do we build this. But why isn&apos;t this generating revenue. That question changed the direction of my career completely.</p>
                <p>It pulled me through sales operations, into revenue operations, and eventually into AI automation. Each move was the same instinct: get closer to the thing that actually matters commercially.</p>
                <p>Today I sit at the intersection of all three. I work with lean B2B teams helping them build the infrastructure that connects marketing, sales, and customer success, and automates the manual work sitting between them. I&apos;ve shipped real systems: from AI SDR agents to full revenue attribution engines, and I&apos;ve seen firsthand what happens when the right infrastructure gets built around a capable team.</p>
              </div>
              <div className="about-certs" style={{ marginTop: '2rem' }}>
                <p className="about-certs-label">Certifications</p>
                <div className="certs-list">
                  {['HubSpot Revenue Operations', 'Salesforce Admin', 'Salesforce Associate',
                    'HubSpot Email Marketing', 'Google Workspace Admin'].map(c => (
                    <span key={c} className="cert-pill">{c}</span>
                  ))}
                  <span className="cert-pill cert-pill--progress">Claude Certified Architect <em>in progress</em></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <section id="cta-section">
        <div className="section-label" style={{ marginBottom: '1rem' }}>Ready to fix it?</div>
        <h2>Book a free revenue audit</h2>
        <p>We&apos;ll tell you exactly what&apos;s broken and what it&apos;s costing you. No charge, no obligation.</p>
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free audit ↗</a>
        </div>
      </section>
    </>
  )
}
