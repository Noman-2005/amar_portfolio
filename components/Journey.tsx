import { TIMELINE } from '@/data/timeline'

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        padding: '110px 0',
        background:
          'linear-gradient(180deg, transparent, var(--bg-raised) 18%, var(--bg-raised) 82%, transparent)',
      }}
    >
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">My journey, in order</div>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: 48,
          }}
        >
          Coursework &amp; <span className="gradient-text">timeline</span>
        </h2>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div className="timeline-line" />

          {TIMELINE.map((item, i) => {
            const title = item.title.toLowerCase()

            const pdfFiles: Record<string, string> = {
              'digital logic design': '/DLD-summary.pdf',
              'probability and statistics': '/STAT-Summary.pdf',
              'discrete mathematics': '/DM-summary.pdf',
              'data structures & algorithms': '/DSA-summary.pdf',
              'data structures and algorithms': '/DSA-summary.pdf',
              'fundamental calculus': '/FC-summary.pdf',
              'calculus and linear algebra': '/CLA-summary.pdf',
              'coordinate geometry and vector analysis': '/CGVA-summary.pdf',
            }

            const matchedCourse = Object.keys(pdfFiles).find((course) =>
              title.includes(course)
            )

            const pdfPath = matchedCourse
              ? pdfFiles[matchedCourse]
              : null

            const card = (
              <div className="card" style={{ padding: '20px 24px' }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'var(--ink-dim)',
                    fontSize: '0.85rem',
                    lineHeight: 1.65,
                  }}
                >
                  {item.sub}
                </p>

                {item.status && (
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: '0.72rem',
                      color: 'var(--teal)',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Status: {item.status}
                  </p>
                )}

                {pdfPath && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: '0.72rem',
                      color: 'var(--teal)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    View Learning Summary ↗
                  </p>
                )}
              </div>
            )

            return (
              <div
                key={i}
                style={{ position: 'relative', marginBottom: 28 }}
              >
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    left: -40,
                    top: 18,
                    fontSize: '0.65rem',
                    color: 'var(--ink-faint)',
                    width: 22,
                    textAlign: 'right',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {pdfPath ? (
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} learning summary PDF`}
                    style={{
                      display: 'block',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}