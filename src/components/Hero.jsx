// Icons as inline SVGs — zero dependencies
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-layout">

        <div className="hero-content">
          <p className="hero-eyebrow">Available for full-time roles — 2026</p>
          <h1 className="hero-name">
            Bharath<br />
            Simha <span>Reddy</span>
          </h1>
          <p className="hero-title">AI Engineer &nbsp;·&nbsp; LLM Backends &nbsp;·&nbsp; RAG Pipelines &nbsp;·&nbsp; Autonomous Agents</p>
          <div className="hero-divider" />
          <p className="hero-bio">
            AI Engineer specializing in scalable LLM backends — building tool-calling agents, RAG pipelines,
            and model-serving APIs with strict Pydantic validation and end-to-end production deployment.
          </p>
          <div className="hero-actions">
            <a href="/Bharath_AI_Engineer.pdf" className="btn-primary" download>
              <DownloadIcon /> Resume
            </a>
            <a
              href="#projects"
              className="btn-secondary"
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View work <ArrowIcon />
            </a>
          </div>
          <div className="hero-social-links">
            <a href="https://github.com/Bharathsimhareddy18" target="_blank" rel="noopener noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href="https://linkedin.com/in/bharath-simha-reddy-bhureddy-b988092b0" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://x.com/ai_bharath" target="_blank" rel="noopener noreferrer">
              <XIcon /> X
            </a>
            <a href="mailto:bharathsimhareddybhureddy@gmail.com">
              <MailIcon /> Email
            </a>
          </div>
        </div>

        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring">
            <img
              src="/avatar.png"
              alt="Bharath Simha Reddy"
              className="hero-avatar-img"
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
