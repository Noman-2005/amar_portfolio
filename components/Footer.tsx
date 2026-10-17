export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '28px 24px', textAlign: 'center' }}>
      <p className="font-mono" style={{ color: 'var(--ink-faint)', fontSize: '0.78rem' }}>
        Built by <span style={{ color: 'var(--violet)' }}>Shibli Noman Arnob</span> &middot; {new Date().getFullYear()} &middot; Next.js
      </p>
    </footer>
  )
}