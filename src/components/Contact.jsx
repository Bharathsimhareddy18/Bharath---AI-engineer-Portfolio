import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export default function Contact() {
  const { ref } = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('bharathsimhareddybhureddy@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleNav = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        {/* Top footer row with columns matching reference image */}
        <div className="footer-top-grid reveal" ref={ref}>
          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <span className="footer-brand">(BHARATH)</span>
            <p className="footer-bio">
              AI Backend Engineer specializing in real-time voice infrastructure and high-throughput production LLM backends.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-nav-list">
              <li><a href="#hero" onClick={(e) => handleNav(e, 'hero')}>HOME</a></li>
              <li><a href="#about" onClick={(e) => handleNav(e, 'about')}>ABOUT</a></li>
              <li><a href="#projects" onClick={(e) => handleNav(e, 'projects')}>WORK</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>SERVICES</a></li>
              <li><a href="#experience" onClick={(e) => handleNav(e, 'experience')}>EXPERIENCE</a></li>
              <li><a href="#skills" onClick={(e) => handleNav(e, 'skills')}>STACK</a></li>
            </ul>
          </div>

          {/* Column 3: Core Domains */}
          <div className="footer-nav-col">
            <span className="footer-col-title">SPECIALTIES</span>
            <ul className="footer-nav-list">
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>VOICE AI PIPELINES</a></li>
              <li><a href="#projects" onClick={(e) => handleNav(e, 'projects')}>PSTN TELEPHONY</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>HYBRID RAG</a></li>
              <li><a href="#services" onClick={(e) => handleNav(e, 'services')}>RUNPOD SERVING</a></li>
              <li><a href="/Bharath_AI_Engineer.pdf" target="_blank" rel="noopener noreferrer">RESUME (PDF) ↗</a></li>
            </ul>
          </div>

          {/* Column 4: Reach out box + Socials */}
          <div className="footer-contact-col">
            <span className="footer-col-title">GET IN TOUCH</span>
            <div className="footer-input-box">
              <input
                type="text"
                readOnly
                value="bharathsimhareddybhureddy@gmail.com"
                className="footer-email-input"
              />
              <button
                type="button"
                onClick={copyEmail}
                className="footer-submit-btn"
              >
                {copied ? 'COPIED!' : 'COPY ↗'}
              </button>
            </div>

            <div className="footer-social-row">
              <a
                href="https://github.com/Bharathsimhareddy18"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/bharath-simha-reddy-bhureddy-b988092b0"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com/ai_bharath"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href="tel:+917670978187"
                className="footer-social-icon"
                aria-label="Phone"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Massive Display Text: Let's Connect */}
        <div className="footer-giant-cta reveal reveal-delay-2">
          <a
            href="mailto:bharathsimhareddybhureddy@gmail.com"
            className="footer-giant-text"
          >
            Let's Connect
          </a>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom-row">
          <span className="footer-copy-text">
            © {new Date().getFullYear()} Bharath Simha Reddy Bhureddy · All Rights Reserved
          </span>
          <span className="footer-credit-text">
            Hyderabad, India · Open to Relocation & Remote
          </span>
        </div>
      </div>
    </footer>
  )
}
