import { useState, useEffect } from 'react'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={(e) => handleNav(e, 'hero')}>
          Bharath
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => handleNav(e, 'about')}>About</a>
          <a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Work</a>
          <a href="#services" onClick={(e) => handleNav(e, 'services')}>Services</a>
          <a href="#experience" onClick={(e) => handleNav(e, 'experience')}>Experience</a>
          <a href="#skills" onClick={(e) => handleNav(e, 'skills')}>Stack</a>
          <a
            href="/Bharath_AI_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            <FileTextIcon /> Resume (PDF) <ArrowUpRight />
          </a>
          <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="nav-cta-btn">
            Let's Talk <ArrowUpRight />
          </a>
        </nav>

        <button
          className="hamburger-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>MENU</span>
          <div className="hamburger-bars">
            <span />
            <span />
          </div>
        </button>
      </div>
    </header>
  )
}
