'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function OpslyLogoMark({ muted = false }: { muted?: boolean }) {
  const stroke = muted ? '#6B7280' : '#EDEEF0'
  const textFill = muted ? '#6B7280' : '#EDEEF0'
  return (
    <svg width="108" height="32" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" aria-label="Opsly">
      <circle cx="40" cy="40" r="26" fill="none" stroke={stroke} strokeWidth="5"
        strokeDasharray="136 19" strokeLinecap="round" transform="rotate(-90 40 40)" />
      <path d="M 66 24 L 76 20 L 73 30 Z" fill="#FF6B35" />
      <text x="86" y="55" fontFamily="Arial, Helvetica, sans-serif" fontSize="42"
        fontWeight="700" fill={textFill}>psly</text>
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'nav--scrolled' : ''}>
      <Link href="/" className="nav-logo" aria-label="Opsly">
        <OpslyLogoMark />
      </Link>
      <ul className="nav-links">
        <li><Link href="/work">Work</Link></li>
        <li><Link href="/modules">Modules</Link></li>
        <li><Link href="/#testimonials">Clients</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/#faq">FAQ</Link></li>
        <li>
          <a
            href="https://calendly.com/kehindeayobami2022/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Book a free audit
          </a>
        </li>
      </ul>
    </nav>
  )
}
