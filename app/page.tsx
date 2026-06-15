'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Voluntary', href: '#voluntary' },
  { label: 'Awards', href: '#awards' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = {
  github: 'https://github.com/Noman-2005',
  linkedin: 'https://www.linkedin.com/in/shibli-noman-arnob-1247b4335?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'sarnob2430277@bscse.uiu.ac.bd',
}

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
    desc: 'An interactive tool to visualize vector fields, line integrals, and multivariable calculus concepts from coursework.',
    tags: ['JavaScript', 'Canvas API', 'Math'],
    emoji: '📐',
    accent: 'var(--teal)',
    href: SOCIALS.github,
    featured: false,
  },
]

const TIMELINE: { title: string; sub: string; status?: string }[] = [
  {
    title: 'Started Web Development',
    sub: 'Built first React projects and discovered a pull toward frontend engineering.',
  },
  {
    title: 'C, Java and Python',
    sub: 'Core programming fundamentals, syntax, and problem solving across three languages.',
  },
  {
    title: 'Calculus and Linear Algebra',
    sub: 'Differentiation, integration, matrix operations, and their applications.',
    status: 'Completed with GPA 4.00 / 4.00',
  },
  {
    title: 'Coordinate Geometry and Vector Analysis',
    sub: "Vector fields, line integrals, Green's and Divergence theorems.",
    status: 'Completed with GPA 4.00 / 4.00',
  },
  {
    title: 'Discrete Mathematics',
    sub: 'Logic, set theory, combinatorics, graph theory, and proof techniques.',
    status: 'Completed with GPA 3.67 / 4.00',
  },
  {
    title: 'Object Oriented Programming',
    sub: 'Abstraction, polymorphism, interfaces, and exception handling applied through design patterns.',
    status: 'Ongoing',
  },
  {
    title: 'Data Structures & Algorithms',
    sub: 'Arrays, linked lists, trees, graphs, sorting and searching — and how to choose between them.',
    status: 'Completed with GPA 4.00 / 4.00',
  },
  {
    title: 'Theory of Computation',
    sub: 'Automata, formal languages, Turing machines, and computational complexity.',
    status: 'Ongoing',
  },
  {
    title: 'Digital Logic Design',
    sub: 'Logic gates, boolean algebra, combinational and sequential circuits.',
    status: 'Completed with GPA 4.00 / 4.00',
  },
]

const VOLUNTARY = [
  {
    title: 'Former Cadet Lance Corporal',
    org: 'Bangladesh National Cadet Corps (BNCC)',
    desc: 'Served as a Cadet Lance Corporal, developing leadership, discipline, and teamwork skills.',
    notable: "Participated in BANGLADESH AIR FORCE ANNUAL WINTER EXERCISE 'WINTEX-2021'",
    image: '/bncc.jpg',
    accent: 'var(--violet)',
    emoji: '🪖',
  },
  {
    title: 'Lifelong Blood Donor',
    org: 'Quantum Foundation',
    desc: "Committed lifelong blood donor contributing to save lives through one of Bangladesh's leading welfare organizations.",
    notable: '',
    image: '',
    accent: 'var(--teal)',
    emoji: '🩸',
  },
  {
    title: 'Blood Donor',
    org: 'Bangladesh Thalassemia Foundation',
    desc: 'Active blood donor supporting thalassemia patients across Bangladesh.',
    notable: '',
    image: '',
    accent: 'var(--amber)',
    emoji: '❤️',
  },
]

const AWARDS = [
  {
    title: 'Lifelong Blood Donor Award',
    org: 'Quantum Foundation',
    image: '/certificate.jpg',
    accent: 'var(--teal)',
    emoji: '🩸',
  },
  {
    title: 'Academic Excellence Award',
    org: 'BAF Shaheen College Kurmitola',
    image: '/award.jpg',
    accent: 'var(--violet)',
    emoji: '🏆',
  },
]

const RESOURCES = [
  { name: 'United International University', short: 'UIU', emoji: '🏛️', desc: 'My home university — BSc in CSE.', url: 'https://uiu.ac.bd', accent: 'var(--violet)' },
  { name: 'North South University', short: 'NSU', emoji: '🎓', desc: 'Leading private university in Bangladesh.', url: 'https://northsouth.edu', accent: 'var(--teal)' },
  { name: 'BRAC University', short: 'BRACU', emoji: '📚', desc: 'Top-ranked private university in Bangladesh.', url: 'https://bracu.ac.bd', accent: 'var(--amber)' },
  { name: 'Military Institute of Science and Technology', short: 'MIST', emoji: '⚙️', desc: 'Engineering and technology focused institution.', url: 'https://mist.ac.bd', accent: 'var(--violet)' },
  { name: 'Bangladesh University of Engineering & Technology', short: 'BUET', emoji: '🔬', desc: "Bangladesh's leading engineering university.", url: 'https://buet.ac.bd', accent: 'var(--teal)' },
  { name: 'Armed Forces Medical College', short: 'AFMC', emoji: '🏥', desc: 'Premier medical institution in Bangladesh.', url: 'https://afmc.edu.bd', accent: 'var(--amber)' },
  { name: 'Massachusetts Institute of Technology', short: 'MIT', emoji: '🌍', desc: 'Global reference point for engineering education.', url: 'https://mit.edu', accent: 'var(--violet)' },
  { name: 'Dhaka University', short: 'DU', emoji: '🎓', desc: "Bangladesh's oldest and most prestigious public university.", url: 'https://www.du.ac.bd', accent: 'var(--teal)' },
  { name: 'Chittagong University of Engineering & Technology', short: 'CUET', emoji: '🏗️', desc: 'Leading public engineering university in Chattogram.', url: 'https://www.cuet.ac.bd', accent: 'var(--amber)' },
  { name: 'Khulna University of Engineering & Technology', short: 'KUET', emoji: '⚙️', desc: 'Public engineering university based in Khulna.', url: 'https://www.kuet.ac.bd', accent: 'var(--violet)' },
  { name: 'ISPR', short: 'ISPR', emoji: '📡', desc: 'Inter-Services Public Relations, Bangladesh Armed Forces.', url: 'https://ispr.gov.bd', accent: 'var(--teal)' },
  { name: 'Islamic University of Madinah', short: 'IUM', emoji: '🕌', desc: 'Major Islamic university in Madinah, Saudi Arabia.', url: 'https://www.iu.edu.sa', accent: 'var(--amber)' },
  { name: 'Umm Al-Qura University', short: 'UQU', emoji: '🕋', desc: 'Public university based in Makkah, Saudi Arabia.', url: 'https://uqu.edu.sa', accent: 'var(--violet)' },
  { name: 'Peking University', short: 'PKU', emoji: '🏯', desc: "One of China's most prestigious research universities.", url: 'https://www.pku.edu.cn', accent: 'var(--teal)' },
  { name: 'Tsinghua University', short: 'THU', emoji: '🎓', desc: 'Top-ranked Chinese university for engineering and tech.', url: 'https://www.tsinghua.edu.cn', accent: 'var(--amber)' },
  { name: 'University of Oxford', short: 'OXFORD', emoji: '🏰', desc: "World's oldest English-speaking university.", url: 'https://www.ox.ac.uk', accent: 'var(--violet)' },
  { name: 'University of Cambridge', short: 'CAMBRIDGE', emoji: '📖', desc: 'Historic UK university renowned for research.', url: 'https://www.cam.ac.uk', accent: 'var(--teal)' },
  { name: 'Durham University', short: 'DURHAM', emoji: '🏰', desc: 'Leading UK university known for its collegiate system.', url: 'https://www.durham.ac.uk', accent: 'var(--amber)' },
  { name: 'University of Zurich', short: 'UZH', emoji: '🏔️', desc: "Switzerland's largest university.", url: 'https://www.uzh.ch', accent: 'var(--violet)' },
]

const ROLES = ['Developer', 'Builder', 'Problem Solver', 'Hackathon Winner']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px', transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(8,7,13,0.78)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
    }}>
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
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(124,111,255,0.08), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(79,227,201,0.06), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
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

function PhotoFrame() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (PHOTOS.length <= 1) return
    const id = setInterval(() => setIndex(i => (i + 1) % PHOTOS.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
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
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: i === index ? 1 : 0,
                transition: 'opacity 0.9s ease',
              }}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
      {PHOTOS.length > 1 && (
        <div style={{ position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
          {PHOTOS.map((_, i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === index ? 'var(--teal)' : 'var(--line-strong)', transition: 'background 0.3s ease' }} />
          ))}
        </div>
      )}
    </div>
  )
}

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
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ color: 'var(--ink-dim)', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.sub}</p>
                {item.status && (
                  <p style={{
                    marginTop: 8, fontSize: '0.72rem',
                    color: item.status === 'Ongoing' ? 'var(--amber)' : 'var(--teal)',
                    fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
                  }}>
                    Status: {item.status}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Voluntary() {
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

function Awards() {
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

function Resources() {
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
            <a key={r.short} href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
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
            <button onClick={() => setExpanded(true)} className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 24px', cursor: 'pointer', border: 'none' }}>
              Show all {RESOURCES.length} institutions ↓
            </button>
          </div>
        )}
        {expanded && (
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <button onClick={() => setExpanded(false)} className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 24px', cursor: 'pointer', border: 'none' }}>
              Show less ↑
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n\u2014\nFrom: ${form.name}\nEmail: ${form.email}`)
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

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '28px 24px', textAlign: 'center' }}>
      <p className="font-mono" style={{ color: 'var(--ink-faint)', fontSize: '0.78rem' }}>
        Built by <span style={{ color: 'var(--violet)' }}>Shibli Noman Arnob</span> &middot; {new Date().getFullYear()} &middot; Next.js
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
      <Journey />
      <Voluntary />
      <Awards />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}