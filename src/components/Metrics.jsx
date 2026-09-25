import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const TESTIMONIALS = [
  {
    author: 'AI Engineering Lead',
    company: 'Dvitva AI / Alonzo AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    quote: '"BHARATH ARCHITECTED OUR LIVE VOICE TELEPHONY ENGINE FROM THE GROUND UP. ACHIEVING SUB-800MS TTFA ON PRODUCTION PSTN CALLS AND CUTTING INFERENCE COSTS BY 78% MADE LIVE CONVERSATIONAL AI SCALABLE FOR OUR CUSTOMERS."',
  },
  {
    author: 'Senior Systems Architect',
    company: 'FinTech AI Collaborator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    quote: '"HIS STRICT DISCIPLINE WITH ASYNCIO, REDIS SESSION LOCKING, AND PYDANTIC RUNTIME TYPING ELIMINATED OUR RUNTIME DRIFT ENTIRELY. HIS FOCUS ON LATENCY AND OBSERVABILITY IS WORLD-CLASS."',
  },
]

const KEY_METRICS = [
  { value: '< 800ms', label: 'p90 TTFA Latency', desc: 'Live PSTN telephony' },
  { value: '78%', label: 'API Cost Reduction', desc: 'Routing + prefetching' },
  { value: '30%', label: 'Cloud Compute Savings', desc: 'RunPod serverless' },
  { value: '< 200ms', label: 'Cold Start Latency', desc: 'Warm pool caching' },
  { value: '0%', label: 'Tool Failures', desc: 'Strict Pydantic v2' },
]

export default function Metrics() {
  const { ref } = useReveal()
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))

  const current = TESTIMONIALS[activeIdx]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header reveal" ref={ref}>
          <span className="section-label">(TESTIMONIAL & IMPACT)</span>
        </div>

        <div className="testimonials-grid">
          {/* Card 1: Testimonial */}
          <div className="testimonial-card reveal reveal-delay-1">
            <div className="testimonial-author-row">
              <img
                src={current.avatar}
                alt={current.author}
                className="testimonial-avatar"
              />
              <div className="testimonial-author-meta">
                <span className="testimonial-name">{current.author}</span>
                <span className="testimonial-company">{current.company}</span>
              </div>
            </div>
            <p className="testimonial-quote">{current.quote}</p>
          </div>

          {/* Card 2: Production Benchmark Metrics */}
          <div className="impact-card reveal reveal-delay-2">
            <span className="impact-heading">PRODUCTION BENCHMARKS</span>
            <div className="impact-metrics-grid">
              {KEY_METRICS.map((m) => (
                <div key={m.label} className="impact-metric-item">
                  <div className="impact-value">{m.value}</div>
                  <div className="impact-label">{m.label}</div>
                  <div className="impact-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls on bottom right */}
        <div className="testimonial-controls reveal reveal-delay-3">
          <button
            onClick={prev}
            className="testimonial-arrow-btn"
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            className="testimonial-arrow-btn"
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
