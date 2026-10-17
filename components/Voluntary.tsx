'use client'

import Image from 'next/image'
import { VOLUNTARY } from '@/data/voluntary'

export default function Voluntary() {
  return (
    <section id="voluntary" style={{ padding: '110px 0' }}>
      <div className="container">
        <div className="section-label">Giving back</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Voluntary <span className="gradient-text">work</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'start' }}>
          {VOLUNTARY.map(v => (
            <div key={v.title} className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${v.accent}1a`, border: `1px solid ${v.accent}40`,
                  fontSize: '1.4rem',
                }}>
                  {v.emoji}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>{v.title}</h3>
                  <div style={{ fontSize: '0.78rem', color: v.accent }}>{v.org}</div>
                </div>
              </div>
              <p style={{ color: 'var(--ink-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: v.notable ? 12 : 0 }}>{v.desc}</p>
              {v.notable && (
                <div style={{
                  marginTop: 4, padding: '8px 12px', borderRadius: 8,
                  background: `${v.accent}0f`, border: `1px solid ${v.accent}30`,
                  fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.5,
                }}>
                  <span style={{ color: v.accent, fontWeight: 600 }}>Notable: </span>{v.notable}
                </div>
              )}
              {v.image && (
                <div style={{ marginTop: 16, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)' }}>
                  <Image src={v.image} alt={v.title} width={600} height={340}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}