'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PHOTOS } from '@/data/photos'

export default function PhotoFrame() {
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
          {PHOTOS.map((src, i: number) => (
            <Image
              key={src}
              src={src}
              alt={i === index ? `Shibli Noman Arnob, photo ${i + 1}` : ''}
              aria-hidden={i !== index}
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
      </div>
      {PHOTOS.length > 1 && (
        <div
          aria-hidden="true"
          style={{ position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}
        >
          {PHOTOS.map((_, i) => (
            <span
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
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