'use client'

import { useEffect, useRef, useState } from 'react'
import FlowField from '@/components/FlowField'
import { ROLES } from '@/data/roles'
import { PROJECTS } from '@/data/projects'

export default function Hero() {
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
    <section style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>
      <FlowField />
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(124,111,255,0.08), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(79,227,201,0.06), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <span className="annotation hide-mobile" style={{ top: '18%', left: '6%' }}>&nabla; &times; F</span>
<span className="annotation hide-mobile" style={{ top: '70%', left: '9%' }}>&part;f / &part;x</span>
<span className="annotation hide-mobile" style={{ top: '24%', right: '7%' }}>&Sigma; n &rarr; &infin;</span>
<span className="annotation hide-mobile" style={{ top: '66%', right: '10%' }}>&int;&int; F &middot; dA</span>
<span className="annotation hide-mobile" style={{ top: '45%', right: '5%' }}>𝒪(n log<sub>2</sub> n)</span>
<span className="annotation hide-mobile" style={{ top: '84%', right: '22%' }}>A ∧ B ∨ ¬C</span>
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
          <a href="/Shibli-Noman-Arnob-CV.pdf" download className="btn-outline">Download CV &darr;</a>
        </div>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { value: `${PROJECTS.length}`, label: 'Featured projects' },
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