import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const SERVICES = [
  {
    num: '01',
    title: 'REAL-TIME VOICE AI & TELEPHONY TRANSPORT',
    desc: 'Bi-directional audio streaming over WebSockets, PSTN telephony integration via Plivo, Silero VAD, Pipecat Smart Turn ONNX, and EBU R128 acoustic loudness gating delivering sub-800ms p90 TTFA.',
    tags: ['WebSockets', 'Plivo PSTN', 'Silero VAD', 'Pipecat ONNX', 'PCM16 / mu-law'],
  },
  {
    num: '02',
    title: 'AGENTIC LLM ORCHESTRATION & HYBRID RAG',
    desc: 'Stateful multi-agent architectures using LangGraph and LangChain. Hybrid retrieval pipelines pairing BM25 sparse lexical search with FAISS dense vector embeddings (+35% recall gain).',
    tags: ['LangGraph', 'BM25 + FAISS', 'Tool Calling', 'Prompt Prefetching', 'DeepEval'],
  },
  {
    num: '03',
    title: 'SERVERLESS GPU & INFERENCE PIPELINES',
    desc: 'Containerized ASR and TTS serving on RunPod serverless microservices with warm-pool caching and runtime memory optimization, driving cold-start latency down to <200ms.',
    tags: ['RunPod Serverless', 'Docker', 'Murf Falcon-2', 'ElevenLabs', 'Cold-Start Optimization'],
  },
  {
    num: '04',
    title: 'PRODUCTION BACKENDS & HIGH-THROUGHPUT APIS',
    desc: 'High-concurrency asynchronous FastAPI architectures, Redis 7.4 session caching, strict Pydantic v2 runtime verification (0% tool failures), and robust CI/CD deployment pipelines.',
    tags: ['FastAPI', 'Redis 7.4', 'Pydantic v2', 'Motor / MongoDB', 'PostgreSQL / Supabase'],
  },
]

export default function Services() {
  const { ref } = useReveal()
  const [expanded, setExpanded] = useState(null)

  const toggle = (idx) => {
    setExpanded(prev => prev === idx ? null : idx)
  }

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal" ref={ref}>
          <span className="section-label">(SERVICES)</span>
          <a
            href="/Bharath_AI_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="services-link"
          >
            VIEW RESUME <ArrowUpRight />
          </a>
        </div>

        <div className="services-list">
          {SERVICES.map((s, i) => {
            const isExp = expanded === i
            return (
              <div
                key={s.num}
                className={`service-item reveal reveal-delay-${i + 1} ${isExp ? 'expanded' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
              >
                <div className="service-row">
                  <span className="service-num">{s.num}</span>
                  <h3 className="service-title">{s.title}</h3>
                  <span className={`service-arrow ${isExp ? 'rotate' : ''}`}>
                    <ArrowUpRight />
                  </span>
                </div>
                <div className={`service-content ${isExp ? 'open' : ''}`}>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map(t => (
                      <span key={t} className="service-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
