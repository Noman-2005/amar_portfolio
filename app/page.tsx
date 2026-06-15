'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/* ────────────────────────────────────────────────────────────────────
   CONTENT
   Edit the arrays below to update copy, projects, links, etc.
   ──────────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = {
  github: 'https://github.com/Noman-2005',
  linkedin: 'https://www.linkedin.com/in/shibli-noman-arnob-1247b4335',
  email: 'sarnob2430277@bscse.uiu.ac.bd',
}

// Add as many images as you like — drop them in /public and list them here.
// The frame will cycle through them automatically every 4 seconds.
const PHOTOS = ['/arnob.jpg', '/arnob2.jpg', '/arnob3.jpg']

const SKILLS = {
  Languages: [
    { name: 'Java', icon: '☕' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
  ],
  Frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML / CSS', icon: '🌐' },
  ],
  'AI & Tools': [
    { name: 'Claude API', icon: '🤖' },
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Vercel', icon: '🚀' },
  ],
  'Math Foundation': [
    { name: 'Calculus', icon: '∫' },
    { name: 'Linear Algebra', icon: '📐' },
    { name: 'Vector Analysis', icon: '→' },
    { name: 'Statistics', icon: '📊' },
  ],
}

const PROJECTS = [
  {
    title: 'CreatorOS',
    desc: 'AI-powered social media creator platform built for a hackathon — content calendar, trend hunter, and Claude API integrations.',
    tags: ['Next.js', 'Claude API', 'Vercel'],
    emoji: '🚀',
    accent: 'var(--violet)',
    href: SOCIALS.github,
    featured: true,
  },
  {
    title: 'Java OOP Suite',
    desc: 'A collection of Java programs demonstrating abstraction, interfaces, polymorphism, and exception handling with clean design patterns.',
    tags: ['Java', 'OOP', 'Design Patterns'],
    emoji: '☕',
    accent: 'var(--amber)',
    href: SOCIALS.github,
    featured: false,
  },
  {
    title: 'Math Visualizer',
    desc: 'An interactive tool to visualize vector fields, line integrals, and multivariable calculus concepts from coursework — the same idea behind this site\u2019s hero.',
    tags: ['JavaScript', 'Canvas API', 'Math'],
    emoji: '📐',
    accent: 'var(--teal)',
    href: SOCIALS.github,
    featured: false,
  },
]

const TIMELINE = [
  { year: '2023', title: 'Started Web Development', sub: 'Built first React projects and discovered a pull toward frontend engineering.' },
  { year: '2023', title: 'Calculus, Linear Algebra & Vector Analysis', sub: 'Differentiation, integration, matrix operations, vector fields, line integrals, Green\u2019s and Divergence theorems.' },
  { year: '2024', title: 'C, Java & Object-Oriented Programming', sub: 'Abstraction, polymorphism, interfaces, and exception handling, applied through design patterns.' },
  { year: '2024', title: 'Data Structures & Algorithms', sub: 'Arrays, linked lists, trees, graphs, sorting and searching — and how to choose between them.' },
  { year: '2024', title: 'Theory of Computation', sub: 'Automata, formal languages, Turing machines, and computational complexity.' },
  { year: '2024', title: 'Digital Logic Design', sub: 'Logic gates, boolean algebra, combinational and sequential circuits.' },
]

const RESOURCES = [
  { name: 'United International University', short: 'UIU', emoji: '🏛️', desc: 'My home university — BSc in CSE.', url: 'https://uiu.ac.bd', accent: 'var(--violet)' },
  { name: 'North South University', short: 'NSU', emoji: '🎓', desc: 'Leading private university in Bangladesh.', url: 'https://northsouth.edu', accent: 'var(--teal)' },
  { name: 'BRAC University', short: 'BRACU', emoji: '📚', desc: 'Top-ranked private university in Bangladesh.', url: 'https://bracu.ac.bd', accent: 'var(--amber)' },
  { name: 'Military Institute of Science and Technology', short: 'MIST', emoji: '⚙️', desc: 'Engineering and technology focused institution.', url: 'https://mist.ac.bd', accent: 'var(--violet)' },
  { name: 'Bangladesh University of Engineering & Technology', short: 'BUET', emoji: '🔬', desc: 'Bangladesh\u2019s leading engineering university.', url: 'https://buet.ac.bd', accent: 'var(--teal)' },
  { name: 'Armed Forces Medical College', short: 'AFMC', emoji: '🏥', desc: 'Premier medical institution in Bangladesh.', url: 'https://afmc.edu.bd', accent: 'var(--amber)' },
  { name: 'Massachusetts Institute of Technology', short: 'MIT', emoji: '🌍', desc: 'Global reference point for engineering education.', url: 'https://mit.edu', accent: 'var(--violet)' },
  { name: 'Dhaka University', short: 'DU', emoji: '🎓', desc: 'Bangladesh\u2019s oldest and most prestigious public university.', url: 'https://www.du.ac.bd', accent: 'var(--teal)' },
  { name: 'Chittagong University of Engineering & Technology', short: 'CUET', emoji: '🏗️', desc: 'Leading public engineering university in Chattogram.', url: 'https://www.cuet.ac.bd', accent: 'var(--amber)' },
  { name: 'Khulna University of Engineering & Technology', short: 'KUET', emoji: '⚙️', desc: 'Public engineering university based in Khulna.', url: 'https://www.kuet.ac.bd', accent: 'var(--violet)' },
  { name: 'Bangladesh Military Academy', short: 'BMA', emoji: '🪖', desc: 'Officer training academy of the Bangladesh Army.', url: 'https://www.bma.gov.bd', accent: 'var(--teal)' },
  { name: 'Islamic University of Madinah', short: 'IUM', emoji: '🕌', desc: 'Major Islamic university in Madinah, Saudi Arabia.', url: 'https://www.iu.edu.sa', accent: 'var(--amber)' },
  { name: 'Umm Al-Qura University', short: 'UQU', emoji: '🕋', desc: 'Public university based in Makkah, Saudi Arabia.', url: 'https://uqu.edu.sa', accent: 'var(--violet)' },
  { name: 'Peking University', short: 'PKU', emoji: '🏯', desc: 'One of China\u2019s most prestigious research universities.', url: 'https://www.pku.edu.cn', accent: 'var(--teal)' },
  { name: 'Tsinghua University', short: 'THU', emoji: '🎓', desc: 'Top-ranked Chinese university for engineering and tech.', url: 'https://www.tsinghua.edu.cn', accent: 'var(--amber)' },
  { name: 'University of Oxford', short: 'OXFORD', emoji: '🏰', desc: 'World\u2019s oldest English-speaking university.', url: 'https://www.ox.ac.uk', accent: 'var(--violet)' },
  { name: 'University of Cambridge', short: 'CAMBRIDGE', emoji: '📖', desc: 'Historic UK university renowned for research.', url: 'https://www.cam.ac.uk', accent: 'var(--teal)' },
  { name: 'Durham University', short: 'DURHAM', emoji: '🏰', desc: 'Leading UK university known for its collegiate system.', url: 'https://www.durham.ac.uk', accent: 'var(--amber)' },
  { name: 'University of Zurich', short: 'UZH', emoji: '🏔️', desc: 'Switzerland\u2019s largest university.', url: 'https://www.uzh.ch', accent: 'var(--violet)' },
]

const ROLES = ['Developer', 'Builder', 'Problem Solver', 'Hackathon Winner']

/* ────────────────────────────────────────────────────────────────────
   SIGNATURE: animated vector-field canvas
   A live streamline field rendered behind the hero — a quiet nod to
   Noman's vector calculus background, expressed as a running system
   rather than a static illustration.
   ──────────────────────────────────────────────────────────────────── */

function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let raf = 0
    let t = 0

    let particles: { x: number; y: number; life: number }[] = []

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#08070d'
      ctx.fillRect(0, 0, width, height)
    }
    resize()
    window.addEventListener('resize', resize)

    if (reduced) return () => window.removeEventListener('resize', resize)

    particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      life: 60 + Math.random() * 180,
    }))

    // analytic field: streamlines drifting across the canvas
    const angleAt = (x: number, y: number) => {
      const nx = x / width - 0.5
      const ny = y / height - 0.5
      return Math.sin(nx * 3.2 + t) * 1.6 + Math.cos(ny * 2.4 - t * 0.6) * 1.6
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(8,7,13,0.06)'
      ctx.fillRect(0, 0, width, height)

      for (const p of particles) {
        const angle = angleAt(p.x, p.y)
        const nx = p.x + Math.cos(angle) * 1.1
        const ny = p.y + Math.sin(angle) * 1.1

        const grad = ctx.createLinearGradient(p.x, p.y, nx, ny)
        grad.addColorStop(0, 'rgba(140,123,255,0.0)')
        grad.addColorStop(1, 'rgba(79,227,201,0.35)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(nx, ny)
        ctx.stroke()

        p.x = nx
        p.y = ny
        p.life -= 1

        if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          p.x = Math.random() * width
          p.y = Math.random() * height
          p.life = 60 + Math.random() * 180
        }
      }

      t += 0.0026
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

/* ────────────────────────────────────────────────────────────────────
   NAVBAR
   ──────────────────────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8,7,13,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#" className="font-display" style={{ fontWeight: 800, fontSize: '1.15rem', textDecoration: 'none', color: 'var(--ink)' }}>
          N<span style={{ color: 'var(--teal)' }}>(t)</span>
        </a>
        <nav className="desktop-nav" style={{ display: 'flex', gap: 30 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary" style={{ fontSize: '0.78rem', padding: '9px 20px' }}>Let&rsquo;s talk</a>
      </div>
    </header>
  )
}

/* ────────────────────────────────────────────────────────────────────
   HERO
   ──────────────────────────────────────────────────────────────────── */

function Hero() {
  const [typed, setTyped] = useState('')
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const tick = () => {
      const current = ROLES[roleIdx.current]
      if (!deleting.current) {
        setTyped(current.slice(0, charIdx.current + 1))
        charIdx.current++
        if (charIdx.current === current.length) {
          deleting.current = true
          timeout = setTimeout(tick, 1700)
          return
        }
      } else {
        setTyped(current.slice(0, charIdx.current - 1))
        charIdx.current--
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % ROLES.length
        }
      }
      timeout = setTimeout(tick, deleting.current ? 55 : 95)
    }
    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <FlowField />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,7,13,0.2) 0%, rgba(8,7,13,0.55) 60%, var(--bg) 100%)' }} />

      {/* signature marginalia */}
      <span className="annotation hide-mobile" style={{ top: '18%', left: '6%' }}>&nabla; &times; F</span>
      <span className="annotation hide-mobile" style={{ top: '70%', left: '9%' }}>&part;f / &part;x</span>
      <span className="annotation hide-mobile" style={{ top: '24%', right: '7%' }}>&Sigma; n &rarr; &infin;</span>
      <span className="annotation hide-mobile" style={{ top: '66%', right: '10%' }}>&int;&int; F &middot; dA</span>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 96, paddingBottom: 64 }}>
        <div className="section-label">Portfolio &mdash; v2026.1</div>

        <h1 className="font-display" style={{ fontSize: 'clamp(2.6rem, 8vw, 5.4rem)', fontWeight: 800, lineHeight: 1.04, marginBottom: 22, maxWidth: 820 }}>
          Hi, I&rsquo;m <span className="gradient-text">Noman</span> &mdash;
          <br />
          <span style={{ color: 'var(--ink-dim)', fontWeight: 700 }}>a </span>
          <span className="gradient-text">{typed}</span>
          <span className="cursor-blink" style={{ color: 'var(--teal)' }}>_</span>
        </h1>

        <p style={{ color: 'var(--ink-dim)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 540, marginBottom: 36 }}>
          I build fast, thoughtful software &mdash; from AI-powered web apps to elegant Java systems &mdash;
          grounded in calculus and linear algebra. Currently studying CSE at UIU and shipping things that matter.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#projects" className="btn-primary">View my work &rarr;</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { value: '10+', label: 'Projects built' },
            { value: '2+', label: 'Hackathons' },
            { value: '\u221E', label: 'Curiosity' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: '1.9rem', fontWeight: 800 }}>{s.value}</div>
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--ink-faint)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   PHOTO FRAME
   Crossfades between PHOTOS every 4 seconds. With a single photo it
   just renders that one image — add more strings to PHOTOS to enable
   the rotation.
   ──────────────────────────────────────────────────────────────────── */

function PhotoFrame() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (PHOTOS.length <= 1) return
    const id = setInterval(() => {
      setIndex(i => (i + 1) % PHOTOS.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="avatar-ring" style={{ width: 220, height: 220 }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'var(--bg-raised)', position: 'relative' }}>
        {PHOTOS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Shibli Noman Arnob"
            width={220}
            height={220}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.9s ease',
            }}
            priority={i === 0}
          />
        ))}
      </div>
      {PHOTOS.length > 1 && (
        <div style={{ position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {PHOTOS.map((_, i) => (
            <span
              key={i}
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: i === index ? 'var(--teal)' : 'var(--line-strong)',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────
   ABOUT
   ──────────────────────────────────────────────────────────────────── */

function About() {
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
            I code. I ship.
            <br />
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

/* ────────────────────────────────────────────────────────────────────
   SKILLS
   ──────────────────────────────────────────────────────────────────── */

function Skills() {
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

/* ────────────────────────────────────────────────────────────────────
   PROJECTS
   ──────────────────────────────────────────────────────────────────── */

function Projects() {
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
              <a href={p.href} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.78rem', padding: '7px 16px' }}>View repo &#8599;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   JOURNEY / TIMELINE
   ──────────────────────────────────────────────────────────────────── */

function Journey() {
  return (
    <section id="journey" style={{ padding: '110px 0', background: 'linear-gradient(180deg, transparent, var(--bg-raised) 18%, var(--bg-raised) 82%, transparent)' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">My journey, in order</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: 48 }}>
          Coursework &amp; <span className="gradient-text">timeline</span>
        </h2>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div className="timeline-line" />
          {TIMELINE.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 28 }}>
              <div className="font-mono" style={{ position: 'absolute', left: -40, top: 18, fontSize: '0.65rem', color: 'var(--ink-faint)', width: 22, textAlign: 'right' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="card" style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</h3>
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--ink-faint)' }}>{item.year}</span>
                </div>
                <p style={{ color: 'var(--ink-dim)', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   RESOURCES
   ──────────────────────────────────────────────────────────────────── */

function Resources() {
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {RESOURCES.map(r => (
            <a key={r.short} href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ padding: '20px 22px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  flexShrink: 0, width: 44, height: 44, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `${r.accent}1a`, border: `1px solid ${r.accent}40`,
                  fontSize: '1.4rem',
                }}>
                  {r.emoji}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.short}</span>
                    <span style={{ fontSize: '0.7rem', color: r.accent }}>&#8599;</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--ink-dim)', lineHeight: 1.5 }}>{r.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginTop: 4, lineHeight: 1.4 }}>{r.desc}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   CONTACT
   ──────────────────────────────────────────────────────────────────── */

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n\u2014\nFrom: ${form.name}\nEmail: ${form.email}`
    )
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" style={{ padding: '110px 0' }}>
      <div className="container" style={{ maxWidth: 580, textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center', width: '100%' }}>Let&rsquo;s talk</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: 16 }}>
          Got a project? <span className="gradient-text">Hit me up.</span>
        </h2>
        <p style={{ color: 'var(--ink-dim)', marginBottom: 48, lineHeight: 1.7 }}>
          I&rsquo;m open to internships, freelance work, and interesting collaborations.
          Send a message and your email client will open with everything pre-filled.
        </p>
        <form onSubmit={handleSubmit} className="card" style={{ padding: 32, textAlign: 'left' }}>
          {sent && (
            <div style={{ marginBottom: 18, padding: '10px 14px', borderRadius: 10, background: 'rgba(79,227,201,0.1)', border: '1px solid rgba(79,227,201,0.3)', color: 'var(--teal)', fontSize: '0.85rem' }}>
              Opening your email client with this message ready to send.
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 14 }}>
            <input type="text" placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <textarea placeholder="Tell me about your project..." rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ marginBottom: 20, resize: 'vertical' }} />
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '14px' }}>
            Send message &rarr;
          </button>
        </form>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>GitHub &#8599;</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>LinkedIn &#8599;</a>
          <a href={`mailto:${SOCIALS.email}`} className="btn-outline" style={{ fontSize: '0.8rem', padding: '8px 18px' }}>Email &#8599;</a>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────
   FOOTER
   ──────────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '28px 24px', textAlign: 'center' }}>
      <p className="font-mono" style={{ color: 'var(--ink-faint)', fontSize: '0.78rem' }}>
        Built by <span style={{ color: 'var(--violet)' }}>Shibli Noman Arnob</span> &middot; {new Date().getFullYear()} &middot; Next.js
      </p>
    </footer>
  )
}

/* ────────────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}