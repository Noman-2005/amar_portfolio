'use client'

import { useState } from 'react'
import { TIMELINE } from '@/data/timeline'

export default function Journey() {
  const [showAll, setShowAll] = useState(false)

  const filteredTimeline = TIMELINE.filter((item) => {
    const title = item.title.trim().toLowerCase()

    return (
      title !== 'started web development' &&
      title !== 'c, java and python'
    )
  })

  const visibleTimeline = showAll
    ? filteredTimeline
    : filteredTimeline.slice(0, 2)

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
            marginBottom: 32,
          }}
        >
          Coursework &amp; <span className="gradient-text">timeline</span>
        </h2>

        <div
          style={{
            position: 'relative',
            paddingLeft: 40,
          }}
        >
          <div className="timeline-line" />

          {visibleTimeline.map((item, i) => {
            const title = item.title.trim().toLowerCase()

            const matchedCourse = Object.keys(pdfFiles).find((course) =>
              title.includes(course)
            )

            const pdfPath = matchedCourse
              ? pdfFiles[matchedCourse]
              : null

            const card = (
              <div
                className="card"
                style={{
                  padding: '20px 24px',
                  transition: 'transform 0.2s ease',
                }}
              >
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
                key={item.title}
                style={{
                  position: 'relative',
                  marginBottom: 24,
                }}
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

        {filteredTimeline.length > 2 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 12,
            }}
          >
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '11px 24px',
                borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'var(--bg-raised)',
                color: 'var(--teal)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition:
                  'background 0.2s ease, border-color 0.2s ease',
              }}
            >
              {showAll ? 'Show Less ↑' : 'Show More ↓'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}