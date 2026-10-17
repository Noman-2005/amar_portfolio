'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { SOCIALS } from '@/data/socials'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
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