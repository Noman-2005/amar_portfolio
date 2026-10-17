'use client'

import { useState } from 'react'
import { RESOURCES } from '@/data/resources'

export default function Resources() {
  const [expanded, setExpanded] = useState(false)
  const VISIBLE = 6
  const shown = expanded ? RESOURCES : RESOURCES.slice(0, VISIBLE)

  return (
    <section id="resources" style={{ padding: '110px 0' }}>
      <div className="container">
        <div className="section-label">Reference points</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 12 }}>
          Institutions &amp; <span className="gradient-text">inspiration</span>
        </h2>
        <p style={{ color: 'var(--ink-dim)', fontSize: '0.92rem', marginBottom: 48 }}>
          Universities and institutions I respect and reference.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
        {shown.map(r => (
  <a
    key={r.short}
    href={r.url}
    target="_blank"
    rel="noreferrer"
    aria-label={`${r.name} (opens in a new tab)`}
    style={{ textDecoration: 'none' }}
  >
    <div className="card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        flexShrink: 0, width: 36, height: 36, borderRadius: 8,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${r.accent}1a`, border: `1px solid ${r.accent}40`,
        fontSize: '1.1rem',
      }}>
        {r.emoji}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>{r.short}</span>
          <span style={{ fontSize: '0.65rem', color: r.accent }}>&#8599;</span>
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</div>
      </div>
    </div>
  </a>
))}
        </div>
       {!expanded && RESOURCES.length > VISIBLE && (
  <div style={{ textAlign: 'center', marginTop: 28 }}>
    <button
      type="button"
      onClick={() => setExpanded(true)}
      className="btn-outline"
      style={{ fontSize: '0.8rem', padding: '9px 24px', cursor: 'pointer', background: 'transparent', fontFamily: 'inherit' }}
    >
      Show all {RESOURCES.length} institutions ↓
    </button>
  </div>
)}
{expanded && (
  <div style={{ textAlign: 'center', marginTop: 28 }}>
    <button
      type="button"
      onClick={() => setExpanded(false)}
      className="btn-outline"
      style={{ fontSize: '0.8rem', padding: '9px 24px', cursor: 'pointer', background: 'transparent', fontFamily: 'inherit' }}
    >
      Show less ↑
    </button>
  </div>
)} 
      </div>
    </section>
  )
}