'use client'

import { useEffect, useRef } from 'react'
import { PALETTES, getTheme } from '@/lib/theme'

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let palette = PALETTES[getTheme()]
    let width = 0
    let height = 0
    let raf = 0
    let t = 0
    let particles: { x: number; y: number; life: number }[] = []

    const paintBackground = () => {
      ctx.fillStyle = `rgb(${palette.bg})`
      ctx.fillRect(0, 0, width, height)
    }

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paintBackground()
    }
    resize()

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(canvas)

    // repaint immediately when the theme is switched
    const themeObserver = new MutationObserver(() => {
      palette = PALETTES[getTheme()]
      paintBackground()
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    if (reduced) {
      return () => {
        resizeObserver.disconnect()
        themeObserver.disconnect()
      }
    }

    particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      life: 60 + Math.random() * 180,
    }))

    const angleAt = (x: number, y: number) => {
      const nx = x / width - 0.5
      const ny = y / height - 0.5
      return Math.sin(nx * 3.2 + t) * 1.6 + Math.cos(ny * 2.4 - t * 0.6) * 1.6
    }

    const draw = () => {
      const auroraCount = 4
      for (let i = 0; i < auroraCount; i++) {
        const offset = (i / auroraCount) * Math.PI * 2
        const cx = width * (0.2 + 0.6 * ((Math.sin(t * 0.3 + offset) + 1) / 2))
        const cy = height * (0.1 + 0.5 * ((Math.sin(t * 0.2 + offset * 1.3) + 1) / 2))
        const rx = width * (0.28 + 0.1 * Math.sin(t * 0.4 + offset))
        const ry = height * (0.14 + 0.06 * Math.cos(t * 0.35 + offset))

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rx)
        grad.addColorStop(0, palette.aurora[i])
        grad.addColorStop(0.5, palette.aurora[i])
        grad.addColorStop(1, `rgba(${palette.bg},0)`)

        ctx.save()
        ctx.scale(1, ry / rx)
        ctx.beginPath()
        ctx.arc(cx, cy * (rx / ry), rx, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      }

      ctx.fillStyle = `rgba(${palette.bg},0.06)`
      ctx.fillRect(0, 0, width, height)

      for (const p of particles) {
        const angle = angleAt(p.x, p.y)
        const nx = p.x + Math.cos(angle) * 1.1
        const ny = p.y + Math.sin(angle) * 1.1

        const grad = ctx.createLinearGradient(p.x, p.y, nx, ny)
        grad.addColorStop(0, palette.trailStart)
        grad.addColorStop(1, palette.trailEnd)
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
      resizeObserver.disconnect()
      themeObserver.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
