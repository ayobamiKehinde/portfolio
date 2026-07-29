'use client'
import { useEffect, useRef } from 'react'

type Ring = { rf: number; n: number; spd: number; phase: number; amber: number[] }

const RINGS: Ring[] = [
  { rf: 0.14, n: 4,  spd:  0.00032, phase: 0,              amber: [1] },
  { rf: 0.24, n: 7,  spd: -0.00022, phase: Math.PI / 5,    amber: [3] },
  { rf: 0.35, n: 11, spd:  0.00016, phase: Math.PI / 3,    amber: [5] },
  { rf: 0.47, n: 15, spd: -0.00011, phase: Math.PI / 7,    amber: [7, 12] },
]

const CYAN: [number, number, number]  = [34, 211, 238]
const AMBER: [number, number, number] = [255, 107, 53]
const WHITE: [number, number, number] = [237, 238, 240]

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let start: number | null = null

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function drawRing(ring: Ring, t: number) {
      if (!canvas || !ctx) return
      const R = ring.rf * canvas.height
      const ox = canvas.width * 0.5
      const oy = canvas.height * 0.5
      const baseAngle = ring.phase + t * ring.spd

      ctx.beginPath()
      ctx.arc(ox, oy, R, 0, Math.PI * 2)
      ctx.setLineDash([10, 7])
      ctx.strokeStyle = 'rgba(237,238,240,0.07)'
      ctx.lineWidth = 0.9
      ctx.stroke()
      ctx.setLineDash([])

      const nodes = Array.from({ length: ring.n }, (_, i) => {
        const a = baseAngle + (i / ring.n) * Math.PI * 2
        const isAmber = ring.amber.includes(i)
        const col: [number, number, number] = isAmber ? AMBER : (i % 4 === 0 ? WHITE : CYAN)
        return { x: ox + Math.cos(a) * R, y: oy + Math.sin(a) * R, col, amber: isAmber }
      })

      for (let i = 0; i < nodes.length; i++) {
        const next = nodes[(i + 1) % nodes.length]
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(next.x, next.y)
        ctx.strokeStyle = 'rgba(34,211,238,0.08)'
        ctx.lineWidth = 0.6
        ctx.stroke()
      }

      for (const nd of nodes) {
        const c = nd.col
        const r = nd.amber ? 3 : (c === WHITE ? 1.3 : 2)
        const al = nd.amber ? 0.9 : 0.65
        ctx.shadowBlur = nd.amber ? 14 : 9
        ctx.shadowColor = `rgba(${c[0]},${c[1]},${c[2]},0.85)`
        ctx.beginPath()
        ctx.arc(nd.x, nd.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${al})`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    function tick(ts: number) {
      if (!canvas || !ctx) return
      if (!start) start = ts
      const t = ts - start
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const g = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.22
      )
      g.addColorStop(0, 'rgba(34,211,238,0.07)')
      g.addColorStop(0.5, 'rgba(34,211,238,0.02)')
      g.addColorStop(1, 'rgba(34,211,238,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      RINGS.forEach(ring => drawRing(ring, t))
      animId = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 1, pointerEvents: 'none',
      }}
    />
  )
}
