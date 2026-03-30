import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={e => handleNav(e, 'hero')}>
          Bharath - AI engineer Portfolio
        </a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <a href="#projects" onClick={e => handleNav(e, 'projects')}>Projects</a>
          <a href="#skills"   onClick={e => handleNav(e, 'skills')}>Skills</a>
          <a href="#experience" onClick={e => handleNav(e, 'experience')}>Experience</a>
          <a href="#contact"  onClick={e => handleNav(e, 'contact')} className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  )
}
