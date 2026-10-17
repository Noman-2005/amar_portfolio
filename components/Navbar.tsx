'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/data/site'
import { getTheme } from '@/lib/theme'



function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    setTheme(getTheme())
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
    setTheme(next)
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      style={{
        width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'transparent', border: '1px solid var(--line-strong)',
        borderRadius: 10, color: 'var(--ink)', fontSize: '1.1rem', cursor: 'pointer',
      }}
    >
      {theme === 'dark' ? '🌖' : '🌒'}
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px', transition: 'all 0.3s ease',
      background: open ? 'var(--nav-bg-solid)' : scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: solid ? 'blur(14px)' : 'none',
      borderBottom: solid ? '1px solid var(--line)' : '1px solid transparent',
    }}>
      <style>{`
        .mobile-toggle { display: none; }
        .mobile-panel { display: none; }
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex; }
          .mobile-panel.open { display: flex; }
          .header-cta { display: none !important; }
        }
      `}</style>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#" className="font-display" style={{ fontWeight: 800, fontSize: '1.15rem', textDecoration: 'none', color: 'var(--ink)' }}>
          N<span style={{ color: 'var(--teal)' }}>(t)</span>
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 30 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle />
          <a href="#contact" className="btn-primary header-cta" style={{ fontSize: '0.78rem', padding: '9px 20px' }}>Let&rsquo;s talk</a>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
            style={{
              width: 42, height: 42, alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: '1px solid var(--line-strong)',
              borderRadius: 10, color: 'var(--ink)', fontSize: '1.2rem', cursor: 'pointer',
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-panel${open ? ' open' : ''}`}
        style={{ flexDirection: 'column', gap: 4, padding: '8px 0 24px', maxHeight: 'calc(100vh - 68px)', overflowY: 'auto' }}
      >
        {NAV_LINKS.map(l => (
          <a
            key={l.label}
            href={l.href}
            className="nav-link"
            onClick={() => setOpen(false)}
            style={{ padding: '12px 4px', fontSize: '1rem' }}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}
           style={{ marginTop: 12, justifyContent: 'center' }}>
          Let&rsquo;s talk
        </a>
      </nav>
    </header>
  )
}
