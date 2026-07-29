'use client'
import { useState } from 'react'

type WorkItem = {
  category: string
  title: string
  metrics: { label: string; accent?: boolean }[]
  body: string
  tags: string[]
}

export default function WorkAccordion({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="work-list">
      {items.map((item, i) => (
        <div key={i} className={`work-item${open === i ? ' open' : ''}`}>
          <div className="work-header" onClick={() => setOpen(open === i ? null : i)}>
            <div className="work-left">
              <div className="work-category">{item.category}</div>
              <h3>{item.title}</h3>
              <div className="work-metrics">
                {item.metrics.map((m, j) => (
                  <span key={j} className={`metric-pill${m.accent ? ' accent-pill' : ''}`}>{m.label}</span>
                ))}
              </div>
            </div>
            <span className="work-chevron">↓</span>
          </div>
          <div className="work-body">
            <p>{item.body}</p>
            <div className="work-tags">
              {item.tags.map((t, j) => <span key={j} className="work-tag">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
