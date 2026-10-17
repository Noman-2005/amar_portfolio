import { SKILLS } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '110px 0', background: 'linear-gradient(180deg, transparent, var(--bg-raised) 25%, var(--bg-raised) 75%, transparent)' }}>
      <div className="container">
        <div className="section-label">What I work with</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Skills &amp; <span className="gradient-text">tech stack</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--violet)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>{cat}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(s => (
                  <div key={s.name} className="skill-badge">
                    <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}