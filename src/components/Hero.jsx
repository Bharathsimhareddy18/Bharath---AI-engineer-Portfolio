const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const CAPABILITIES = [
  {
    num: '01',
    metric: '< 800ms',
    metricLabel: 'p90 TTFA Turnaround',
    title: 'Voice AI & Telephony Transport',
    desc: 'Bi-directional WebSockets, Plivo PSTN bridging, Silero VAD, and Pipecat ONNX delivering sub-800ms audio turnaround on live telephone calls.',
  },
  {
    num: '02',
    metric: '78%',
    metricLabel: 'API Cost Reduction',
    title: 'Model Routing & LLM Infrastructure',
    desc: 'Dynamic inference routing across Groq, Cerebras, and GPT-4o with prompt prefetching and strict Pydantic v2 runtime validation.',
  },
  {
    num: '03',
    metric: '< 200ms',
    metricLabel: 'Cold Start Latency',
    title: 'Serverless GPU & Microservice Serving',
    desc: 'RunPod serverless containerized speech microservices with warm-pool caching and runtime memory pre-allocations.',
  },
  {
    num: '04',
    metric: '+35%',
    metricLabel: 'Citation Recall Gain',
    title: 'Hybrid RAG & LangGraph Workflows',
    desc: 'BM25 sparse lexical search coupled with FAISS dense vector search over legal statutes and deterministic multi-step agent tool loops.',
  },
]

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* Top bar: Resume link & CTA buttons on left, Portrait + badge on right */}
        <div className="hero-top fade-in fade-in-1">
          <div className="hero-top-left">
            <div className="hero-actions-row">
              <a
                href="/Bharath_AI_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-white"
              >
                <FileTextIcon /> Resume (PDF) <ArrowUpRight />
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="btn-pill-translucent"
              >
                Let's talk <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="hero-top-right">
            <span className="hero-badge">[ASSOCIATE AI/ML ENGINEER · DVITVA.AI (ALONZO AI)]</span>
            <div className="hero-photo-wrapper">
              <img
                src="/avatar.jpeg"
                alt="Bharath Simha Reddy"
                className="hero-photo-img"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Massive Display Headline + Name/Role Kicker + Experience Aside Description */}
        <div className="hero-headline-wrap fade-in fade-in-2">
          <div className="hero-headline-group">
            <div className="hero-author-kicker">
              <span className="hero-kicker-name">BHARATH SIMHA REDDY</span>
              <span className="hero-kicker-sep">/</span>
              <span className="hero-kicker-role">ASSOCIATE AI/ML ENGINEER</span>
            </div>
            <h1 className="hero-headline">
              Voice AI &<br />Systems Architect
            </h1>
          </div>

          <div className="hero-aside">
            <p>
              Associate AI/ML Engineer specializing in low-latency audio transport,
              stateful multi-agent systems, and production backends for{' '}
              <a
                href="https://dvitva.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-dvitva-link"
              >
                DVITVA.AI <ArrowUpRight />
              </a>{' '}
              (child company of Alonzo AI). Delivering sub-800ms TTFA telephony and cutting LLM costs by 78%.
              Formerly AI/ML Engineering Intern at Bodega Delivery.
            </p>
          </div>
        </div>

        {/* What I Can Do For You — Featured Right At The Start */}
        <div className="hero-offer-section fade-in fade-in-3">
          <div className="hero-offer-header">
            <span className="hero-offer-eyebrow">(WHAT I CAN DO FOR YOU)</span>
            <span className="hero-offer-lead">
              High-concurrency, ultra-low-latency backend architectures ready for production deployment:
            </span>
          </div>

          <div className="hero-capabilities-grid">
            {CAPABILITIES.map((cap) => (
              <div key={cap.num} className="hero-cap-card">
                <div className="hero-cap-accent-bar" />
                <div className="hero-cap-header">
                  <span className="hero-cap-num">{cap.num}</span>
                  <span className="hero-cap-metric-label">{cap.metricLabel}</span>
                </div>
                <div className="hero-cap-metric-value">{cap.metric}</div>
                <h3 className="hero-cap-title">{cap.title}</h3>
                <p className="hero-cap-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="hero-tags fade-in fade-in-4">
          <div className="hero-tag-item">
            <span>ASSOCIATE AI/ML ENGINEER</span>
          </div>
          <div className="hero-tag-item">
            <span>VOICE AI & AUDIO TRANSPORT</span>
          </div>
          <div className="hero-tag-item">
            <span>PRODUCTION LLM SYSTEMS</span>
          </div>
        </div>

      </div>
    </section>
  )
}
