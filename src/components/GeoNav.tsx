'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function GeoNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'nav--scrolled' : ''}>
      <Link href="/" className="nav-logo" aria-label="Opsly">
        <svg width="108" height="32" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="26" fill="none" stroke="#EDEEF0" strokeWidth="5"
            strokeDasharray="136 19" strokeLinecap="round" transform="rotate(-90 40 40)" />
          <path d="M 66 24 L 76 20 L 73 30 Z" fill="#FF6B35" />
          <text x="86" y="55" fontFamily="Arial, Helvetica, sans-serif" fontSize="42"
            fontWeight="700" fill="#EDEEF0">psly</text>
        </svg>
      </Link>
    </nav>
  )
}
