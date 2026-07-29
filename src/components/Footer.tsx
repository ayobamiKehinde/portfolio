import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/" aria-label="Opsly">
        <svg width="80" height="24" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="26" fill="none" stroke="#6B7280" strokeWidth="5"
            strokeDasharray="136 19" strokeLinecap="round" transform="rotate(-90 40 40)" />
          <path d="M 66 24 L 76 20 L 73 30 Z" fill="#FF6B35" />
          <text x="86" y="55" fontFamily="Arial, Helvetica, sans-serif" fontSize="42"
            fontWeight="700" fill="#6B7280">psly</text>
        </svg>
      </Link>
      <p>© {new Date().getFullYear()} Opsly</p>
      <div className="footer-links">
        <a href="mailto:kehindeayobami2022@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/ayobami-kehinde-a00215245/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
