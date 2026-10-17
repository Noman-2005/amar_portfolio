import { PROJECTS } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '110px 0', position: 'relative' }}>
      <span className="annotation hide-mobile" style={{ top: 0, right: '4%' }}>f(x) &rarr; output</span>
      <div className="container">
        <div className="section-label">What I&rsquo;ve built</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Featured <span className="gradient-text">projects</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {PROJECTS.map(p => (
            <div key={p.title} className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />
              {p.featured && (
                <div style={{ position: 'absolute', top: 18, right: 18 }}>
                  <span className="tag">Featured</span>
                </div>
              )}
              <div style={{ fontSize: '2.2rem', marginBottom: 14 }}>{p.emoji}</div>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: 'var(--ink-dim)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.href} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.78rem', padding: '7px 16px' }}>View project &#8599;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}