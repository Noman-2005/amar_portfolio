import PhotoFrame from '@/components/PhotoFrame'
import { SOCIALS } from '@/data/socials'

export default function About() {
  return (
    <section id="about" style={{ padding: '110px 0', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <PhotoFrame />
          <div style={{ position: 'absolute', bottom: 6, right: '32%', width: 18, height: 18, borderRadius: '50%', background: 'var(--teal)', border: '3px solid var(--bg)', boxShadow: '0 0 14px rgba(79,227,201,0.7)' }} />
        </div>
        <div>
          <div className="section-label">About me</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20 }}>
            I code. I ship.<br />
            <span className="gradient-text">I don&rsquo;t stop.</span>
          </h2>
          <p style={{ color: 'var(--ink-dim)', lineHeight: 1.85, marginBottom: 16, fontSize: '0.95rem' }}>
            I&rsquo;m <strong style={{ color: 'var(--ink)' }}>Shibli Noman Arnob</strong>, a CSE student at United International University.
            I like building products that feel good to use &mdash; spanning Java OOP, React frontends, and AI integrations.
          </p>
          <p style={{ color: 'var(--ink-dim)', lineHeight: 1.85, marginBottom: 28, fontSize: '0.95rem' }}>
            Outside of code, I explore calculus, linear algebra, and vector analysis &mdash; the same ideas
            that quietly shape how this page moves. Currently open to internships and freelance work.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {['React', 'Java', 'Next.js', 'AI APIs', 'Math'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>GitHub &#8599;</a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>LinkedIn &#8599;</a>
            <a href={`mailto:${SOCIALS.email}`} className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>Email &#8599;</a>
          </div>
        </div>
      </div>
    </section>
  )
}