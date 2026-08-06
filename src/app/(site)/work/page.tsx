import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import WorkAccordion from '@/components/WorkAccordion'

export const metadata: Metadata = {
  title: 'Selected Work | Opsly',
  description: 'Case studies from fractional RevOps engagements: diagnostic audits, AI SDR agents, speed-to-lead automation, and revenue attribution systems.',
  alternates: { canonical: 'https://www.opslyco.uk/work' },
}

const allWork = [
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
    body: 'Leads contacted within 5 minutes were 21x more likely to qualify than those contacted after 30 minutes. New inbound leads weren\'t getting a response for hours, sometimes longer, while deals that had gone quiet sat untouched with no system to bring them back. Built two agents: one fired an instant reply to every new inbound lead within minutes, no rep needed. The second monitored deal age and activity, triggering a re-engagement sequence automatically once a lead went cold. Response time cut to minutes. 30% of stale deals re-engaged, recovering pipeline that would otherwise have gone cold. Ran 24/7, zero manual follow-up.',
    tags: ['Make', 'Claude', 'HubSpot', 'n8n'],
  },
  {
    category: 'Revenue attribution',
    title: 'Audit found £0 visibility into which outbound sequences were actually closing deals. Built the attribution layer to find out',
    metrics: [
      { label: '64,000+ events attributed' },
      { label: 'Full funnel visibility' },
      { label: 'ICP profiling delivered' },
    ],
    body: '64,000+ outbound events were running with no connection back to what actually closed. The team knew activity was happening but had no idea which sequences, messages, or channels were driving revenue versus just generating noise. Built a CRM attribution system in Claude Code, merging outbound events and inbound replies across Attio, Supabase, and campaign data. Delivered full funnel visibility and ICP profiling, replacing what would normally have required a dedicated revenue analyst to assemble manually.',
    tags: ['Claude Code', 'Attio', 'Supabase', 'Python'],
  },
  {
    category: 'Call transcription',
    title: 'Audit found reps losing ~8 hours a week to manual note-taking and deal updates. Built an agent to remove it entirely',
    metrics: [
      { label: '~8 hrs/week saved' },
      { label: 'Zero manual note-taking' },
      { label: 'Deal stages updated in real time' },
    ],
    body: 'Every sales call required a rep to manually write up notes, extract next steps, and update the CRM by hand afterward, work that ate roughly 8 hours a week across the team and was inconsistently done. Built a call transcription agent that listened to recordings, extracted pain points and next steps, logged them directly to the CRM, and moved the deal to the correct stage automatically. Zero manual note-taking. Deal stages updated in real time. Gave reps 8 hours a week back, time that went into selling instead of admin.',
    tags: ['Claude', 'Make', 'HubSpot', 'GHL'],
  },
  {
    category: 'Integration fix',
    title: 'Audit found leads disappearing between form submission and the sales team ever seeing them. Built the connection to close it',
    metrics: [
      { label: 'Lead drop-off eliminated' },
      { label: 'Instant sequence enrolment' },
      { label: 'Real-time Slack alerts' },
    ],
    body: 'Leads filling out web forms weren\'t reliably creating CRM contacts, weren\'t being enrolled in any sequence, and the sales team often never found out a lead existed at all. Every disconnected handoff point was a place a real lead could vanish. Wired the full chain end to end: form to CRM to sequence to Slack alert. Eliminated lead drop-off entirely. Instant enrollment. Real-time alerts to the team, closing a gap that had been silently costing leads with no one aware it was happening.',
    tags: ['Make', 'HubSpot', 'Salesforce', 'n8n', 'Slack'],
  },
]

export default function WorkPage() {
  return (
    <FadeIn>
      <div className="section-wrap" style={{ paddingTop: '9rem' }}>
        <div className="section-label">Selected work</div>
        <h1 style={{ fontSize: 'clamp(1.8rem,5vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
          Results, not just deliverables
        </h1>
        <div className="divider" />
        <WorkAccordion items={allWork} />
        <p style={{ marginTop: '2rem', fontSize: '0.88rem', color: 'var(--muted)', maxWidth: '520px' }}>
          No two revenue systems break the same way. If your situation isn&apos;t here,{' '}
          <a href="https://calendly.com/kehindeayobami2022/30min" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--accent)', textDecoration: 'none' }}>book a call</a>.
          {' '}We&apos;ll find where yours is leaking.
        </p>
      </div>
    </FadeIn>
  )
}
