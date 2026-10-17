import Image from 'next/image'
import { AWARDS } from '@/data/awards'

export default function Awards() {
  return (
    <section id="awards" style={{ padding: '110px 0', background: 'linear-gradient(180deg, transparent, var(--bg-raised) 18%, var(--bg-raised) 82%, transparent)' }}>
      <div className="container">
        <div className="section-label">Recognition</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Certificates &amp; <span className="gradient-text">awards</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {AWARDS.map(a => (
            <div key={a.title} className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${a.accent}, transparent)` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${a.accent}1a`, border: `1px solid ${a.accent}40`,
                  fontSize: '1.4rem',
                }}>
                  {a.emoji}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>{a.title}</h3>
                  <div style={{ fontSize: '0.78rem', color: a.accent }}>{a.org}</div>
                </div>
              </div>
              <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--line)' }}>
                <Image src={a.image} alt={a.title} width={600} height={420}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}