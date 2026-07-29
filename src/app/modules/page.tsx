import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Modules | Opsly',
  description: 'The five layers Opsly installs into a B2B revenue system: operating layer, trust layer, signal engine, continuity layer, and visibility layer.',
  alternates: { canonical: 'https://opslyco.uk/modules' },
}

const modules = [
  {
    num: '01', name: 'The Operating Layer',
    tagline: 'Before anything gets built, we map how your revenue process actually works today, then define how it should work. The system follows the process, not the other way round.',
    items: [
      'End-to-end process mapping from first touch to closed-won and beyond',
      'Ownership defined at every stage so nothing sits in no-man\'s-land',
      'Playbooks written for recurring scenarios: inbound, outbound, re-engagement, handoff',
      'Entry and exit criteria for each pipeline stage, agreed before anything is configured',
      'A living process doc your team updates, not a PDF that gets ignored',
    ],
  },
  {
    num: '02', name: 'The Trust Layer',
    tagline: 'Most CRMs aren\'t broken. The data inside them is. We rebuild from the record up so your pipeline reflects what\'s real.',
    items: [
      'Every duplicate resolved with a full rollback trail, nothing deleted blind',
      'Stage definitions rewritten around what buyers actually do, not what reps think they do',
      'Field rules enforced at entry so bad data can\'t propagate before anyone notices',
      'Schema documented so the next person who touches it doesn\'t start from scratch',
      'Follow-up tasks built into stage logic so nothing moves forward without a next action',
    ],
  },
  {
    num: '03', name: 'The Signal Engine',
    tagline: 'An AI SDR that researches the list, scores it against your ICP, writes personalised copy, and pushes to the sequencer. No human in the loop.',
    items: [
      'Lead sourcing built in Clay with custom enrichment agents written in Claude Code',
      'Inbound leads get a response in under three minutes, without a rep touching it',
      'ICP fit and intent scored automatically so reps call the right people first',
      'Follow-up and objection handling managed by AI reply agents you approve once, not every time',
    ],
  },
  {
    num: '04', name: 'The Continuity Layer',
    tagline: 'The context that lives in the AE\'s head needs to survive the handoff. We wire it so CS starts with everything, not a blank page.',
    items: [
      'Deal close fires a structured handoff to CS automatically, no internal email needed',
      'Onboarding steps tied to deal type and triggered from the CRM, not from someone remembering',
      'Accounts that go quiet surface before they become a churn conversation',
      'Expansion signals tracked the same way new pipeline is, not discovered by accident',
    ],
  },
  {
    num: '05', name: 'The Visibility Layer',
    tagline: 'You find out which channels actually close, not just which ones look busy. Attribution built across your full outbound and inbound stack.',
    items: [
      'Outbound events merged with inbound replies to show which sequences touched each closed deal',
      'Dashboards on live data, no weekly export, no manual refresh, no one building slides',
      'Pipeline health reported in revenue terms your CFO will read',
      'Sequence and campaign performance ranked by closed revenue, not open rate',
    ],
  },
]

export default function ModulesPage() {
  return (
    <FadeIn className=" glow-cyan">
      <div className="section-wrap" style={{ paddingTop: '9rem' }}>
        <div className="section-label">What gets installed</div>
        <h1 style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
          The five layers we build
        </h1>
        <div className="divider" />
        <p className="modules-intro">We diagnose first. Then we install what your system needs, in the order it needs it.</p>
        <div className="modules-grid">
          {modules.map(m => (
            <div key={m.num} className="module-card">
              <div className="module-meta">
                <span className="module-num">{m.num}</span>
                <span className="module-name">{m.name}</span>
              </div>
              <p className="module-tagline">{m.tagline}</p>
              <ul className="module-list">
                {m.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="modules-cta">
          <p>Not sure which modules you need? We scope it together on the audit call. No charge, no pitch.</p>
          <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a free audit
          </a>
        </div>
      </div>
    </FadeIn>
  )
}
