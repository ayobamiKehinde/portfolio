import type { Metadata } from 'next'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import GeoNav from '@/components/GeoNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Are You Showing Up on AI Search? | Opsly',
  description: 'Most consultants and coaches are invisible on ChatGPT and Perplexity. I fix that. Book a free 20-minute call to see exactly where you stand right now.',
  alternates: { canonical: 'https://opslyco.uk/geo' },
}

const CALENDLY = 'https://calendly.com/kehindeayobami2022/30min?month=2026-07&date=2026-07-28'

export default function GeoPage() {
  return (
    <>
      <GeoNav />
      <section id="hero" style={{ minHeight: '90vh' }}>
        <div className="hero-content">
          <h1>Your ideal clients are asking AI who to hire. Are you showing up?</h1>
          <p className="hero-sub">
            When someone asks ChatGPT or Perplexity to recommend a consultant or coach in your space, most people aren&apos;t in the answer. Their competitors are.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free 20-minute call →</a>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-cyan">
          <div className="section-wrap" id="proof">
            <div className="section-label">Proof</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>What this looks like in practice</h2>
            <div className="divider" />
            <p style={{ fontSize: '0.97rem', color: 'var(--muted2)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '2rem' }}>
              A client came to me completely invisible on AI search. Within 48 hours of the technical foundation going live, their content was appearing in Google AI search results and ranking on page 1 for searches about their competitors.
            </p>
            <div className="proof-image-wrap">
              <Image src="/images/geo-result.png" alt="Google Search Console data for Scrub the Deck showing growth in impressions and clicks" width={2109} height={845} className="proof-image" />
              <p className="flywheel-caption">
                Scrub the Deck: Google Search Console data showing consistent growth in impressions and clicks since AI search optimisation was implemented in June 2026. <strong style={{ color: 'var(--accent)' }}>92 clicks</strong>, <strong style={{ color: 'var(--accent)' }}>1,560 impressions</strong>, average position 7.9 across all tracked queries.
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', maxWidth: '480px' }}>
                Google Search Console measures overall search visibility, including Google AI Overviews.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-amber">
          <div className="section-wrap" id="testimonials">
            <div className="section-label">What clients say</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Don&apos;t take our word for it</h2>
            <div className="divider" />
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="quote-mark">&quot;</div>
                <blockquote>
                  I didn&apos;t realise how invisible we were until Ayo showed me. Within 48 hours of the technical foundation going live we were being cited in Google AI Overviews. The speed of it was surprising.
                </blockquote>
                <div className="testimonial-author">
                  <Image src="/images/dave.png" alt="David Pugh" width={44} height={44} className="author-avatar" />
                  <div>
                    <strong>David Pugh</strong>
                    <span>Founder, Scrub the Deck</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <blockquote style={{ fontStyle: 'normal' }}>
                  Currently running the same process for a second client in the software engineering industry. Results in progress.
                </blockquote>
                <div className="testimonial-author">
                  <Image src="/images/isaac.jpeg" alt="Isaac Adepoju" width={44} height={44} className="author-avatar" />
                  <div>
                    <strong>Isaac Adepoju</strong>
                    <span>Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="how">
            <div className="section-label">How it works</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Three phases. Starting from £800.</h2>
            <div className="divider" />
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-content">
                  <h3>Technical foundation</h3>
                  <div style={{ marginBottom: '0.6rem' }}><span className="step-price">£800</span></div>
                  <p>Makes your site readable by AI systems. llms.txt, schema markup, sitemap, robots.txt audit. One-time setup, takes about a week. This is where most businesses are invisible, and where we start.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-content">
                  <h3>Content</h3>
                  <div style={{ marginBottom: '0.6rem' }}><span className="step-price">£700-£800</span></div>
                  <p>Structured articles and page copy built specifically to be cited in AI responses. Written around the queries your ideal clients are already asking.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-content">
                  <h3>Monitoring &amp; optimisation</h3>
                  <div style={{ marginBottom: '0.6rem' }}><span className="step-price">£300-£500</span></div>
                  <p>Track where you&apos;re being cited, identify gaps, refine what&apos;s working. Ongoing visibility management.</p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: '1.6rem', fontSize: '0.88rem', color: 'var(--muted)' }}>Most clients start with Phase 1 only. No commitment to Phases 2 or 3 required.</p>
          </div>
        </FadeIn>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn>
          <div className="section-wrap" id="not-seo">
            <div className="section-label">The difference</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>This isn&apos;t SEO</h2>
            <div className="divider" />
            <div className="about-body" style={{ maxWidth: '680px' }}>
              <p>You can rank fine on Google and still be completely invisible to ChatGPT and Perplexity. They don&apos;t read your site the way Google does. They look for clear, structured signals about who you are and what you&apos;re good at.</p>
              <p>Most websites weren&apos;t built for this. That&apos;s a fixable, one-time problem.</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <FadeIn className=" glow-cyan">
          <div className="section-wrap" id="about">
            <div className="about-grid">
              <div className="about-image-wrap">
                <Image src="/images/ayo.jpeg" alt="Ayobami Kehinde" width={400} height={533} className="about-image" />
              </div>
              <div className="about-content">
                <div className="section-label">About</div>
                <h2 style={{ fontSize: 'clamp(1.3rem,3.5vw,1.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Who does this work</h2>
                <div className="about-body">
                  <p>I&apos;m Ayo, founder of Opsly. I build revenue infrastructure for scaling B2B teams and help service businesses show up where their buyers are increasingly searching. My background is in software engineering and revenue operations. I handle the technical side so you don&apos;t have to.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <section id="cta-section">
        <div className="section-label" style={{ marginBottom: '1rem' }}>Ready when you are</div>
        <h2>Ready to see where you currently stand?</h2>
        <p>Book a free 20-minute call. No pitch. Just a live search showing you exactly where you show up on AI search right now.</p>
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a free 20-minute call →</a>
        </div>
      </section>
      <Footer />
    </>
  )
}
