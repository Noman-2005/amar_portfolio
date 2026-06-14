'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Links', href: '#links' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = {
  Languages: [
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
  ],
  Frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML / CSS', icon: '🌐' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Vercel', icon: '🚀' },
    { name: 'Claude API', icon: '🤖' },
  ],
  Math: [
    { name: 'Calculus', icon: '∫' },
    { name: 'Linear Algebra', icon: '📐' },
    { name: 'Vector Analysis', icon: '→' },
    { name: 'Statistics', icon: '📊' },
  ],
}

const PROJECTS = [
  {
    title: 'CreatorOS',
    desc: 'AI-powered social media creator platform built for a hackathon. Features content calendar, trend hunter, and Claude API integrations.',
    tags: ['React', 'Next.js', 'Claude API', 'Vercel'],
    emoji: '🚀',
    accent: '#7c6fff',
    github: 'https://github.com/Noman-2005',
    live: 'https://vercel.com',
    highlight: true,
  },
  {
    title: 'Java OOP Suite',
    desc: 'Collection of Java programs demonstrating abstraction, interfaces, polymorphism, and exception handling with clean design patterns.',
    tags: ['Java', 'OOP', 'Design Patterns'],
    emoji: '☕',
    accent: '#f59e0b',
    github: 'https://github.com/Noman-2005',
    live: null,
    highlight: false,
  },
  {
    title: 'Math Visualizer',
    desc: 'Interactive tool to visualize vector fields, line integrals, and multivariable calculus concepts from coursework.',
    tags: ['JavaScript', 'Canvas API', 'Math'],
    emoji: '📐',
    accent: '#10b981',
    github: 'https://github.com/Noman-2005',
    live: null,
    highlight: false,
  },
]

const TIMELINE = [
  {
    year: '2024',
    title: 'Digital Logic Design',
    sub: 'Studied logic gates, boolean algebra, combinational and sequential circuits.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Data Structures & Algorithms',
    sub: 'Mastered arrays, linked lists, trees, graphs, sorting and searching algorithms.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Theory of Computation',
    sub: 'Explored automata, formal languages, Turing machines and computational complexity.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'C, Java & OOP',
    sub: 'Deep-dived into abstraction, polymorphism, interfaces and exception handling.',
    type: 'learning',
  },
  {
    year: '2023',
    title: 'Structured Programming Language',
    sub: 'Built a strong foundation in structured programming logic and problem solving.',
    type: 'learning',
  },
  {
    year: '2023',
    title: 'Calculus & Linear Algebra',
    sub: 'Covered differentiation, integration, matrix operations and vector spaces.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Coordinate Geometry & Vector Analysis',
    sub: "Studied vector fields, line integrals, Green's theorem and the Divergence Theorem.",
    type: 'education',
  },
  {
    year: '2023',
    title: 'Started Web Development',
    sub: 'Built first React projects, discovered passion for frontend engineering.',
    type: 'learning',
  },
]

const USEFUL_LINKS = [
  {
    name: 'United International University',
    short: 'UIU',
    emoji: '🏛️',
    desc: 'My home university — BSc in CSE.',
    url: 'https://uiu.ac.bd',
    accent: '#7c6fff',
  },
  {
    name: 'North South University',
    short: 'NSU',
    emoji: '🎓',
    desc: 'Leading private university in Bangladesh.',
    url: 'https://northsouth.edu',
    accent: '#3b82f6',
  },
  {
    name: 'BRAC University',
    short: 'BRACU',
    emoji: '📚',
    desc: 'Top-ranked private university in Bangladesh.',
    url: 'https://bracu.ac.bd',
    accent: '#f59e0b',
  },
  {
    name: 'MIST',
    short: 'MIST',
    emoji: '⚙️',
    desc: 'Military Institute of Science and Technology.',
    url: 'https://mist.ac.bd',
    accent: '#10b981',
  },
  {
    name: 'BUET',
    short: 'BUET',
    emoji: '🔬',
    desc: 'Bangladesh University of Engineering & Technology.',
    url: 'https://buet.ac.bd',
    accent: '#ef4444',
  },
  {
    name: 'Armed Forces Medical College',
    short: 'AFMC',
    emoji: '🏥',
    desc: 'Premier medical institution in Bangladesh.',
    url: 'https://afmc.edu.bd',
    accent: '#ec4899',
  },
  {
    name: 'MIT',
    short: 'MIT',
    emoji: '🌍',
    desc: 'Massachusetts Institute of Technology — global inspiration.',
    url: 'https://mit.edu',
    accent: '#a855f7',
  },
]

// ── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px', transition: 'all 0.3s',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#f0f0f5', textDecoration: 'none' }}>
            N<span style={{ color: '#7c6fff' }}>.</span>
          </a>
          <nav style={{ display: 'flex', gap: 28 }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.78rem', padding: '9px 20px' }}>Hire Me</a>
        </div>
      </header>
      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const roles = ['Developer', 'Builder', 'Problem Solver', 'Hackathon Winner']
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    const tick = () => {
      const current = roles[roleIdx.current]
      if (!deleting.current) {
        setTyped(current.slice(0, charIdx.current + 1))
        charIdx.current++
        if (charIdx.current === current.length) {
          deleting.current = true
          setTimeout(tick, 1800)
          return
        }
      } else {
        setTyped(current.slice(0, charIdx.current - 1))
        charIdx.current--
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % roles.length
        }
      }
      setTimeout(tick, deleting.current ? 60 : 100)
    }
    const t = setTimeout(tick, 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, #7c6fff12, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 300, height: 300, background: 'radial-gradient(circle, #c084fc10, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', maxWidth: 720 }}>
        <div className="tag" style={{ marginBottom: 24 }}>✦ Available for opportunities</div>

        <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20 }}>
          Hi, I'm <span className="gradient-text">Noman</span><br />
          <span style={{ color: '#8888a0', fontWeight: 700 }}>a </span>
          <span className="gradient-text">{typed}</span>
          <span className="cursor-blink" style={{ color: '#7c6fff' }}>|</span>
        </h1>

        <p style={{ color: '#8888a0', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 auto 40px', maxWidth: 520 }}>
          I build fast, thoughtful software — from AI-powered web apps to elegant Java systems.
          Currently studying CSE at UIU and shipping things that matter.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>

        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
          {[{ value: '10+', label: 'Projects Built' }, { value: '2+', label: 'Hackathons' }, { value: '∞', label: 'Curiosity' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f0f0f5' }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#8888a0', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div className="avatar-ring" style={{ width: 200, height: 200 }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#16161f' }}>
                <Image
                  src="/arnob.jpg"
                  alt="Shibli Noman Arnob"
                  width={200}
                  height={200}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  priority
                />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderRadius: '50%', background: '#22c55e', border: '3px solid #0a0a0f', boxShadow: '0 0 12px #22c55e80' }} />
          </div>
        </div>

        <div>
          <div className="section-label">About me</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            I code. I ship.<br /><span className="gradient-text">I don't stop.</span>
          </h2>
          <p style={{ color: '#8888a0', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' }}>
            I'm <strong style={{ color: '#d0d0e0' }}>Shibli Noman Arnob</strong>, a CSE student at United International University.
            I love building products that feel good to use — spanning Java OOP, React frontends, and AI integrations.
          </p>
          <p style={{ color: '#8888a0', lineHeight: 1.8, marginBottom: 28, fontSize: '0.95rem' }}>
            Outside of code, I explore calculus, linear algebra, and vector analysis.
            Currently open to internships and freelance projects.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {['React', 'Java', 'Next.js', 'AI APIs', 'Math'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://github.com/Noman-2005" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>GitHub ↗</a>
            <a href="https://www.linkedin.com/in/shibli-noman-arnob-1247b4335" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>LinkedIn ↗</a>
            <a href="mailto:sarnob2430277@bscse.uiu.ac.bd" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>Email ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, transparent, #111118 30%, #111118 70%, transparent)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-label">What I work with</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48 }}>
          Skills & <span className="gradient-text">Tech Stack</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div style={{ fontSize: '0.72rem', color: '#7c6fff', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{cat}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(s => (
                  <div key={s.name} className="skill-badge">
                    <span style={{ fontSize: '1rem' }}>{s.icon}</span>
                    <span style={{ color: '#d0d0e0', fontSize: '0.85rem' }}>{s.name}</span>
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

function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-label">What I've built</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48 }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {PROJECTS.map(p => (
            <div key={p.title} className="card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
              {p.highlight && <div style={{ position: 'absolute', top: 16, right: 16 }}><span className="tag">✦ Featured</span></div>}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${p.accent}60, transparent)` }} />
              <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{p.emoji}</div>
              <h3 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 10, color: '#f0f0f5' }}>{p.title}</h3>
              <p style={{ color: '#8888a0', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.78rem', padding: '7px 16px' }}>GitHub ↗</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.78rem', padding: '7px 16px' }}>Live →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const typeColor: Record<string, string> = {
    hackathon: '#7c6fff',
    learning: '#10b981',
    education: '#f59e0b',
  }
  return (
    <section id="experience" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, transparent, #111118 20%, #111118 80%, transparent)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="section-label">My journey</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 48 }}>
          Experience & <span className="gradient-text">Timeline</span>
        </h2>
        <div style={{ position: 'relative', paddingLeft: 52 }}>
          <div className="timeline-line" />
          {TIMELINE.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
              <div style={{ position: 'absolute', left: -40, top: 4, width: 12, height: 12, borderRadius: '50%', background: typeColor[item.type], boxShadow: `0 0 12px ${typeColor[item.type]}80`, border: '2px solid #0a0a0f' }} />
              <div className="card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontWeight: 600, fontSize: '0.95rem', color: '#f0f0f5' }}>{item.title}</h3>
                  <span style={{ fontSize: '0.72rem', color: '#8888a0', fontFamily: 'JetBrains Mono, monospace' }}>{item.year}</span>
                </div>
                <p style={{ color: '#8888a0', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UsefulLinks() {
  return (
    <section id="links" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-label">Resources</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>
          Useful <span className="gradient-text">Links</span>
        </h2>
        <p style={{ color: '#8888a0', fontSize: '0.92rem', marginBottom: 48 }}>
          Universities and institutions I respect and reference.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {USEFUL_LINKS.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '22px 24px', display: 'flex', alignItems: 'flex-start', gap: 16, cursor: 'pointer' }}>
                <div style={{ fontSize: '1.8rem', flexShrink: 0, width: 44, height: 44, background: `${link.accent}18`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${link.accent}30` }}>
                  {link.emoji}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f0f0f5' }}>{link.short}</span>
                    <span style={{ fontSize: '0.65rem', color: link.accent, fontFamily: 'JetBrains Mono, monospace', background: `${link.accent}18`, padding: '1px 6px', borderRadius: 4 }}>↗</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#8888a0', lineHeight: 1.5 }}>{link.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#606075', marginTop: 4, lineHeight: 1.4 }}>{link.desc}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#16161f',
    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10,
    padding: '12px 16px', color: '#f0f0f5', fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif', outline: 'none',
    transition: 'border-color 0.2s', marginBottom: 14,
  }

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label" style={{ display: 'flex', justifyContent: 'center' }}>Let's talk</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Got a project? <span className="gradient-text">Hit me up.</span>
        </h2>
        <p style={{ color: '#8888a0', marginBottom: 48, lineHeight: 1.7 }}>
          I'm open to internships, freelance work, and interesting collaborations. Drop a message and I'll reply fast.
        </p>
        <div className="card" style={{ padding: 32, textAlign: 'left' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>✅</div>
              <p style={{ color: '#22c55e', fontWeight: 600 }}>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 14px' }}>
                <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              </div>
              <textarea placeholder="Tell me about your project..." rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical', marginBottom: 20 }} />
              <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '14px' }}>
                Send Message →
              </button>
            </>
          )}
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <a href="https://github.com/Noman-2005" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/shibli-noman-arnob-1247b4335" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>LinkedIn ↗</a>
          <a href="mailto:sarnob2430277@bscse.uiu.ac.bd" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>Email ↗</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 24px', textAlign: 'center' }}>
      <p style={{ color: '#8888a0', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>
        Built by <span style={{ color: '#7c6fff' }}>Shibli Noman Arnob</span> · {new Date().getFullYear()} · Next.js + Tailwind
      </p>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <UsefulLinks />
      <Contact />
      <Footer />
    </main>
  )
}