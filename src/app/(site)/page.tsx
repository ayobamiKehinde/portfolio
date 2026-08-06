import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroCanvas from '@/components/HeroCanvas'
import FadeIn from '@/components/FadeIn'
import WorkAccordion from '@/components/WorkAccordion'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Opsly | Fractional RevOps for Scaling B2B Teams',
  description: 'Fractional revenue operations for B2B teams that have outgrown their current system. CRM, AI SDR, attribution, and process definition — remote, no headcount added.',
  alternates: { canonical: 'https://www.opslyco.uk' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.opslyco.uk/#organization',
      name: 'Opsly',
      description: 'Fractional revenue operations for scaling B2B teams.',
      url: 'https://www.opslyco.uk/',
      logo: 'https://www.opslyco.uk/images/opsly-icon-mark.svg',
      founder: { '@type': 'Person', name: 'Ayo Kehinde', jobTitle: 'Fractional RevOps Operator' },
      areaServed: 'Worldwide',
      serviceType: ['Revenue Operations', 'CRM Consulting', 'Sales Process Design', 'AI SDR Systems', 'Revenue Attribution'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.opslyco.uk/#ayo',
      name: 'Ayo Kehinde',
      jobTitle: 'Fractional RevOps Operator',
      worksFor: { '@id': 'https://www.opslyco.uk/#organization' },
      knowsAbout: ['HubSpot', 'Salesforce', 'Clay', 'Revenue Operations', 'AI SDR'],
    },
  ],
}

const homeWork = [
  {
    category: 'Diagnostic audit',
    title: 'Diagnostic audit surfaced exactly where revenue was leaking. Fix drove £200k+ in generated revenue',
    metrics: [
      { label: '£200k+ revenue generated', accent: true },
      { label: '3-4 deals/month recovered' },
      { label: 'Full GTM system rebuilt' },
    ],
    body: 'The system was in total chaos. Leads slipping through the cracks, no handoff rules between sales and delivery, no data governance, outbound running entirely manually. Ran the diagnostic process to find exactly where the gaps were and what they were costing, including 3-4 deals a month lost purely to slow follow-up, at £6-12k per deal. Built the systems to close those gaps: CRM and data governance, lifecycle automation, lead handoff rules, and outbound infrastructure. The fix recovered the lost deals and rebuilt the foundation underneath them, together driving £200k+ in revenue.',
    tags: ['HubSpot', 'GoHighLevel', 'Make', 'Claude Code'],
  },
  {
    category: 'Voice SDR agent',
    title: 'Audit found leads going cold overnight with nobody available to have a real conversation. Built a voice agent that closed the gap',
    metrics: [
      { label: 'Scored 9/10 in production' },
      { label: 'Qualifies and books 24/7' },
      { label: 'Zero SDR hours required' },
    ],
    body: 'Inbound calls and qualification conversations were only happening when a human was available, meaning anything outside working hours went unanswered entirely. Built a voice SDR agent using ElevenLabs, Make, GoHighLevel, and Claude that had full qualifying conversations and booked meetings autonomously, 24/7, without a human on the line. Scored 9/10 in production. Delivered the equivalent of a full-time SDR covering nights and weekends, without the hire.',
    tags: ['ElevenLabs', 'Make', 'GoHighLevel', 'Claude'],
  },
  {
    category: 'Speed to lead + follow-up',
    title: 'Audit found leads sitting unanswered for hours, and stale deals nobody was re-engaging. Built two agents to close both gaps',
    metrics: [
      { label: 'Response time cut to minutes' },
      { label: '30% of stale deals re-engaged' },
      { label: 'Ran 24/7, zero manual follow-up' },
    ],
    body: "Leads contacted within 5 minutes were 21x more likely to qualify than those contacted after 30 minutes. New inbound leads weren't getting a response for hours, sometimes longer, while deals that had gone quiet sat untouched with no system to bring them back. Built two agents: one fired an instant reply to every new inbound lead within minutes, no rep needed. The second monitored deal age and activity, triggering a re-engagement sequence automatically once a lead went cold. Response time cut to minutes. 30% of stale deals re-engaged, recovering pipeline that would otherwise have gone cold. Ran 24/7, zero manual follow-up.",
    tags: ['Make', 'Claude', 'HubSpot', 'n8n'],
  },
]

const faqItems = [
  {
    q: 'Do I need to give you access to my CRM?',
    a: 'No. The first call is just a conversation. No data access needed. If you\'re open to it afterwards, giving us read-only access lets us show you an exact number instead of an estimate. Entirely your call.',
  },
  {
    q: 'What if I don\'t have a CRM, or mine\'s just spreadsheets and memory?',
    a: "That's fine, and more common than you'd think. The audit still works. We just build the financial picture from how things actually run today, not from a system that doesn't exist yet.",
  },
  {
    q: 'Will this replace people on my team, or just give them more software to learn?',
    a: "Neither, usually. Most of what we build removes manual work, not people. Your team spends less time on admin and more time on the parts of the job that actually need a person. Anything new gets built to run quietly in the background, not as another tool someone has to manage.",
  },
  {
    q: 'What happens if the audit finds nothing major?',
    a: "Then we tell you that. The number might be small, or it might be somewhere you've already fixed. We're not going to manufacture a problem to justify a fee. If there's nothing worth building, you'll know, and it costs you nothing to find out.",
  },
  {
    q: 'How is this different from hiring a RevOps freelancer or agency?',
    a: "Most freelancers or agencies start by selling you a service. We start by finding the number, then build only what the number justifies. Sometimes that's one small fix, sometimes it's a full system. You're not buying a package before you know what's actually broken.",
  },
  {
    q: "What's the investment?",
    a: "Depends entirely on what the audit finds. Most builds run £1,500 to £5,000, with an optional monthly retainer if you want ongoing support. You'll know the exact number before you commit to anything.",
  },
  {
    q: 'How long does this take, start to finish?',
    a: "The audit itself takes about a week: the call, then a few days for us to put the number together, then the second call where we walk you through it. If you move forward, most builds ship in 2 to 4 weeks depending on what's actually needed.",
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section id="hero">
        <HeroCanvas />
        <div className="hero-content">
          <h1>You&apos;re already generating revenue. The systems underneath haven&apos;t caught up.</h1>
          <p className="hero-sub">
            We find exactly where that gap is costing you, then close it, so you scale without adding headcount.
          </p>
          <div className="btn-group">
            <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a free audit →
            </a>
            <a href="#work" className="btn btn-outline">See selected work</a>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="problems">
            <div className="section-label">Sound familiar?</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Sound familiar?
            </h2>
            <div className="divider" />
            <div className="pain-list">
              {[
                { num: '01', h: 'Revenue leaking from a pipeline no one\'s watching', p: 'Leads go cold, stages never update, deals die quietly.' },
                { num: '02', h: 'Hours a week lost to admin that should be automated', p: 'Reps manually logging calls, notes, and follow-ups every day.' },
                { num: '03', h: "A forecast your team doesn't believe", p: 'Pipeline looks full on paper. Nobody trusts the numbers.' },
                { num: '04', h: 'Hours pass before a new lead hears from you', p: 'First response wins the meeting. While you\'re busy, they\'ve already moved on to whoever replied first.' },
                { num: '05', h: "Spend on campaigns with no idea what's converting", p: "Deals closing but no attribution. You're flying blind." },
              ].map(item => (
                <div key={item.num} className="pain-item">
                  <span className="pain-num">{item.num}</span>
                  <div><h3>{item.h}</h3><p>{item.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* FORCE AND FRICTION */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-dual">
          <div className="section-wrap" id="force-friction">
            <div className="section-label">The framework</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Force and friction
            </h2>
            <div className="divider" />
            <div className="ff-intro">
              <p>Every revenue system runs on a flywheel: attract, engage, delight, repeat. Force spins it faster. Friction cuts against the spin.</p>
              <p>Most leaks aren&apos;t missing effort. They&apos;re force pointed at the wrong stage, or friction nobody noticed was costing money. The audit finds which is which.</p>
            </div>
            <div className="flywheel-wrap">
              <svg className="flywheel-svg" viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" aria-label="Force and friction flywheel diagram">
                <defs>
                  <marker id="arr-cyan" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#22D3EE"/>
                  </marker>
                  <marker id="arr-amber" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#FF6B35"/>
                  </marker>
                </defs>

                <text x="172" y="18" textAnchor="middle" fill="#22D3EE" fontSize="10" fontWeight="700" letterSpacing="0.14em" fontFamily="Space Grotesk, sans-serif">FORCE</text>
                <line x1="172" y1="162" x2="172" y2="82" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <line x1="172" y1="162" x2="241" y2="202" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <line x1="172" y1="162" x2="103" y2="202" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <path d="M 177.6,82.2 A 80,80 0 0,1 243.9,197.1" fill="none" stroke="rgba(34,211,238,0.38)" strokeWidth="18" strokeLinecap="round"/>
                <path d="M 238.3,206.7 A 80,80 0 0,1 105.7,206.7" fill="none" stroke="rgba(34,211,238,0.26)" strokeWidth="18" strokeLinecap="round"/>
                <path d="M 100.1,197.1 A 80,80 0 0,1 166.4,82.2" fill="none" stroke="rgba(34,211,238,0.20)" strokeWidth="18" strokeLinecap="round"/>
                <circle cx="172" cy="162" r="42" fill="#0D0F14" stroke="rgba(237,238,240,0.12)" strokeWidth="1"/>
                <text x="172" y="158" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Space Grotesk, sans-serif">Revenue</text>
                <text x="172" y="170" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Space Grotesk, sans-serif">core</text>
                <text x="172" y="52" textAnchor="middle" fill="#EDEEF0" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">Attract</text>
                <text x="258" y="222" textAnchor="start" fill="#EDEEF0" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">Engage</text>
                <text x="86" y="222" textAnchor="end" fill="#EDEEF0" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">Delight</text>
                <path d="M 75.1,116.7 A 107,107 0 0,1 278.6,171.3" fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arr-cyan)"/>
                <text x="172" y="252" textAnchor="middle" fill="#22D3EE" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">spins faster</text>

                <text x="322" y="167" textAnchor="middle" fill="rgba(237,238,240,0.13)" fontSize="20" fontWeight="700" fontFamily="Space Grotesk, sans-serif">vs</text>

                <text x="472" y="18" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="700" letterSpacing="0.14em" fontFamily="Space Grotesk, sans-serif">FRICTION</text>
                <line x1="472" y1="162" x2="472" y2="82" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <line x1="472" y1="162" x2="541" y2="202" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <line x1="472" y1="162" x2="403" y2="202" stroke="rgba(237,238,240,0.07)" strokeWidth="1"/>
                <path d="M 477.6,82.2 A 80,80 0 0,1 543.9,197.1" fill="none" stroke="rgba(255,107,53,0.33)" strokeWidth="18" strokeLinecap="round"/>
                <path d="M 538.3,206.7 A 80,80 0 0,1 405.7,206.7" fill="none" stroke="rgba(255,107,53,0.23)" strokeWidth="18" strokeLinecap="round"/>
                <path d="M 400.1,197.1 A 80,80 0 0,1 466.4,82.2" fill="none" stroke="rgba(255,107,53,0.17)" strokeWidth="18" strokeLinecap="round"/>
                <circle cx="472" cy="162" r="42" fill="#0D0F14" stroke="rgba(237,238,240,0.12)" strokeWidth="1"/>
                <text x="472" y="158" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Space Grotesk, sans-serif">Revenue</text>
                <text x="472" y="170" textAnchor="middle" fill="#6B7280" fontSize="9" fontFamily="Space Grotesk, sans-serif">core</text>
                <line x1="541" y1="122" x2="514" y2="138" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arr-amber)"/>
                <line x1="472" y1="242" x2="472" y2="210" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arr-amber)"/>
                <line x1="403" y1="122" x2="430" y2="138" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arr-amber)"/>
                <text x="472" y="252" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">drag cuts the spin</text>
              </svg>
              <p className="flywheel-caption">Same flywheel. The audit finds whether you&apos;re accelerating it or fighting it.</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* SELECTED WORK */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="work">
            <div className="section-label">Selected work</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Results, not just deliverables
            </h2>
            <div className="divider" />
            <WorkAccordion items={homeWork} />
            <div style={{ marginTop: '2rem' }}>
              <Link href="/work" className="btn btn-outline">See all work →</Link>
            </div>
            <p style={{ marginTop: '1.2rem', fontSize: '0.88rem', color: 'var(--muted)', maxWidth: '520px' }}>
              No two revenue systems break the same way. If your situation isn&apos;t here,{' '}
              <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'none' }}>book a call</a>. We&apos;ll find where yours is leaking.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* MODULES TEASER */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-cyan">
          <div className="section-wrap" id="modules">
            <div className="section-label">What gets installed</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Five layers, installed in the order you need them
            </h2>
            <div className="divider" />
            <p className="modules-intro">We diagnose first. Then we install what your system needs: the operating layer, the trust layer, the signal engine, the continuity layer, and the visibility layer.</p>
            <div className="modules-cta">
              <p>See what each layer actually does and what changes once it&apos;s installed.</p>
              <Link href="/modules" className="btn btn-outline">See all modules →</Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-amber">
          <div className="section-wrap" id="testimonials">
            <div className="section-label">What clients say</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Don&apos;t take our word for it
            </h2>
            <div className="divider" />

            <div className="testimonial-video-wrap">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video className="testimonial-video" controls poster="/images/dave-poster.jpg" preload="none">
                <source src="/images/video1809712725.mp4" type="video/mp4" />
              </video>
              <div className="video-attribution">
                <Image src="/images/dave.png" alt="David Pugh, CEO of Scrub the Deck" width={44} height={44} className="author-avatar" />
                <div>
                  <strong>David Pugh</strong>
                  <span>CEO, Scrub the Deck</span>
                </div>
                <div className="video-stat">
                  £200k+
                  <small>revenue generated</small>
                </div>
              </div>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="quote-mark">&ldquo;</div>
                <blockquote>
                  Opsly found exactly where our revenue system was leaking: manual work that was quietly costing us real money every month. After the fix, that cost was gone and the team could focus on growth instead of admin. They&apos;re the first call I make for anything automation or systems related.
                </blockquote>
                <div className="testimonial-author">
                  <Image src="/images/kelly.jpg" alt="Kelly Sinclair, CEO of Vero Tech Sales" width={44} height={44} className="author-avatar" />
                  <div>
                    <strong>Kelly Sinclair</strong>
                    <span>CEO, Vero Tech Sales</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="quote-mark">&ldquo;</div>
                <blockquote>
                  Opsly completely transformed how our revenue operation runs. The CRM workflows were a mess: manual, inconsistent, and costing us hours every week. After the rebuild, everything just works. The team is saving serious time and we&apos;re seeing it directly in revenue. Genuinely one of the best operators I&apos;ve worked with.
                </blockquote>
                <div className="testimonial-author">
                  <Image src="/images/isaac.jpeg" alt="Isaac Adepoju, CEO of AIoTouch Softwares" width={44} height={44} className="author-avatar" />
                  <div>
                    <strong>Isaac Adepoju</strong>
                    <span>CEO, AIoTouch Softwares</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="how">
            <div className="section-label">How it works</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Three steps to a working revenue operation
            </h2>
            <div className="divider" />
            <div className="steps">
              {[
                { n: '1', h: 'Discovery call', p: "We talk through your business, your current setup, and where revenue is getting stuck. No prep needed, just an honest conversation about what's not working." },
                { n: '2', h: 'The audit', p: "We go into your stack and audit the full revenue system: CRM, outbound, attribution, and process. We put a number on what the gaps are costing you." },
                { n: '3', h: 'Review & close', p: "We walk you through the findings and agree on what gets fixed first. No obligation to continue, no pitch at the end." },
              ].map(step => (
                <div key={step.n} className="step">
                  <div className="step-num">{step.n}</div>
                  <div className="step-content">
                    <h3>{step.h}</h3>
                    <p>{step.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ABOUT TEASER */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-cyan">
          <div className="section-wrap" id="about">
            <div className="about-grid">
              <div className="about-image-wrap">
                <Image src="/images/ayo.jpeg" alt="Ayobami Kehinde, founder of Opsly" width={400} height={533} className="about-image" />
              </div>
              <div className="about-content">
                <div className="section-label">About</div>
                <h2 style={{ fontSize: 'clamp(1.3rem,3.5vw,1.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                  Ayobami Kehinde
                </h2>
                <div className="about-body">
                  <p>I started as a software engineer, then kept getting pulled toward a different question: not how do we build this, but why isn&apos;t this generating revenue. That question took me through sales operations, revenue operations, and into AI automation, and it&apos;s where Opsly comes from.</p>
                </div>
                <div style={{ marginTop: '1.6rem' }}>
                  <Link href="/about" className="btn btn-outline">Read the full story →</Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* FAQ */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="faq">
            <div className="section-label">FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
              Common questions
            </h2>
            <div className="divider" />
            <FaqAccordion items={faqItems} />
          </div>
        </FadeIn>
      </div>

      {/* FINAL CTA */}
      <section id="cta-section">
        <div className="section-label" style={{ marginBottom: '1rem' }}>Ready to fix it?</div>
        <h2>Book a free revenue audit</h2>
        <p>We&apos;ll tell you exactly what&apos;s broken and what it&apos;s costing you. No charge, no obligation.</p>
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a free audit ↗
          </a>
        </div>
      </section>
    </>
  )
}
