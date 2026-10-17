import { EVENTS } from '@/data/events'

export default function Events() {
  return (
    <section id="events" style={{ padding: '110px 0' }}>
      <div className="container">
        <div className="section-label">Where I&rsquo;ve been</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Events &amp; <span className="gradient-text">workshops</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {EVENTS.map(e => (
            <a
              key={e.title}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${e.title}, read the ${e.source} article (opens in a new tab)`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden', height: '100%' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${e.accent}, transparent)` }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${e.accent}1a`, border: `1px solid ${e.accent}40`,
                    fontSize: '1.4rem',
                  }}>
                    {e.emoji}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>{e.title}</h3>
                    <div style={{ fontSize: '0.78rem', color: e.accent }}>{e.org}</div>
                  </div>
                </div>
                <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                  {e.date} &middot; {e.role}
                </div>
                <p style={{ color: 'var(--ink-dim)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 18 }}>{e.desc}</p>
                <span className="btn-outline" style={{ fontSize: '0.78rem', padding: '7px 16px', display: 'inline-block' }}>
                  Read in {e.source} &#8599;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}