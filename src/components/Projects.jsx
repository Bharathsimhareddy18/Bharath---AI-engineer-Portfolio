import { useReveal } from '../hooks/useReveal'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const PROJECTS = [
  {
    title: 'Conversational Voice Agent Engine',
    client: 'dvitva.ai',
    category: 'PRODUCTION PSTN TELEPHONY · VOICE AI',
    desc: 'Bi-directional audio transport streaming linear PCM16 / mu-law audio over WebSockets for live PSTN telephony at sub-800ms p90 latency. Engineered two-tier VAD (Silero + Pipecat Smart Turn ONNX) for semantic turn detection and EBU R128 acoustic gating.',
    metrics: '< 800ms p90 TTFA · Plivo PSTN · RunPod Serverless',
    stack: ['FastAPI', 'WebSockets', 'Plivo', 'RunPod', 'Redis 7.4', 'Silero VAD', 'Pipecat', 'Murf Falcon-2'],
    live: 'https://dvitva.ai',
    github: null,
    featured: true,
  },
  {
    title: 'Indian Law Hybrid RAG Platform',
    client: 'Legal AI',
    category: 'HYBRID RETRIEVAL · STATUTE SEARCH',
    desc: 'Hybrid retrieval architecture combining BM25 sparse lexical search with FAISS dense vector search over legal statutes and precedents. Boosted citation recall by 35% over dense-only retrieval with async telemetry in Supabase.',
    metrics: '+35% Citation Recall · DeepEval Verified',
    stack: ['FastAPI', 'BM25', 'FAISS', 'Supabase', 'Hugging Face', 'DeepEval', 'Langfuse'],
    live: 'https://bharath-reddy-ai-indian-law-rag-eval.hf.space',
    github: 'https://github.com/Bharathsimhareddy18/indian-law-rag-eval',
    featured: false,
  },
  {
    title: 'TradeMinds — Autonomous Paper Trading',
    client: 'FinTech AI',
    category: 'AUTONOMOUS AGENTS · GPT-4o-mini',
    desc: 'Multi-step financial tool calls with live market feeds from yfinance. Supabase ledger state machine with idempotent checks for exactly-once execution and automated risk management outside LLM context.',
    metrics: '0% Idempotency Drift · 100% Type-Safe',
    stack: ['FastAPI', 'GPT-4o-mini', 'Supabase', 'yfinance', 'Pydantic v2', 'Next.js'],
    live: 'https://trademind-agent.vercel.app/',
    github: 'https://github.com/Bharathsimhareddy18/TradeMinds---Autonomous-Trading-Agent',
    featured: false,
  },
]

export default function Projects() {
  const { ref } = useReveal()
  const featured = PROJECTS.find(p => p.featured)
  const regular = PROJECTS.filter(p => !p.featured)

  return (
    <section className="work" id="projects">
      <div className="container">
        <div className="work-header reveal" ref={ref}>
          <span className="section-label">(MY WORK)</span>
          <a
            href="https://github.com/Bharathsimhareddy18"
            target="_blank"
            rel="noopener noreferrer"
            className="work-all-link"
          >
            ALL PROJECTS <ArrowUpRight />
          </a>
        </div>

        {/* Featured Project */}
        {featured && (
          <div className="work-featured-card reveal reveal-delay-1">
            <div className="work-featured-header">
              <span className="work-cat">{featured.category}</span>
              <span className="work-badge-highlight">{featured.metrics}</span>
            </div>
            <h3 className="work-featured-title">{featured.title}</h3>
            <p className="work-featured-desc">{featured.desc}</p>
            <div className="work-stack">
              {featured.stack.map(s => (
                <span key={s} className="work-pill">{s}</span>
              ))}
            </div>
            <div className="work-actions">
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-dark"
                >
                  Live Platform <ArrowUpRight />
                </a>
              )}
            </div>
          </div>
        )}

        {/* 2-Column Projects */}
        <div className="work-grid">
          {regular.map((p, i) => (
            <div key={p.title} className={`work-card reveal reveal-delay-${i + 2}`}>
              <div className="work-card-header">
                <span className="work-cat">{p.category}</span>
                <span className="work-badge-pill">{p.metrics}</span>
              </div>
              <h3 className="work-card-title">{p.title}</h3>
              <p className="work-card-desc">{p.desc}</p>
              <div className="work-stack">
                {p.stack.map(s => (
                  <span key={s} className="work-pill">{s}</span>
                ))}
              </div>
              <div className="work-card-footer">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    Live Demo <ArrowUpRight />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    <GithubIcon /> Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
