import { useReveal } from '../hooks/useReveal'

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

const MailArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Contact() {
  const { ref } = useReveal()

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-inner">
            <p className="contact-label reveal" ref={ref}>Contact</p>
            <h2 className="contact-title reveal reveal-delay-1">
              Open to the right role.
            </h2>
            <p className="contact-sub reveal reveal-delay-2">
              AI engineer targeting full-time roles at Indian AI-first startups.
              Reach out directly — no recruiters required.
            </p>
            <a
              href="mailto:bharathsimhareddybhureddy@gmail.com"
              className="contact-email-btn reveal reveal-delay-3"
              style={{display:'inline-flex',marginBottom:40}}
            >
              bharathsimhareddybhureddy@gmail.com <MailArrow />
            </a>
            <div className="contact-links reveal reveal-delay-4">
              <a href="https://github.com/Bharathsimhareddy18" target="_blank" rel="noopener noreferrer" className="contact-link">
                <GithubIcon /> GitHub
              </a>
              <a href="https://linkedin.com/in/bharath-simha-reddy-bhureddy-b988092b0" target="_blank" rel="noopener noreferrer" className="contact-link">
                <LinkedinIcon /> LinkedIn
              </a>
              <a href="https://x.com/ai_bharath" target="_blank" rel="noopener noreferrer" className="contact-link">
                <XIcon /> X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Bharath Simha Reddy
          </span>
          <span className="footer-copy">Built with React &amp; deployed on Vercel</span>
        </div>
      </footer>
    </>
  )
}
