import { useReveal } from '../hooks/useReveal'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const CAPABILITIES = [
  {
    title: 'VOICE AI PIPELINES',
    desc: 'Bi-directional WebSocket audio transport streaming PCM16 / mu-law audio, two-tier VAD (Silero + Pipecat ONNX), EBU R128 loudness gating, and sub-800ms TTFA on live PSTN telephony.',
  },
  {
    title: 'LLM INFRASTRUCTURE',
    desc: 'Dynamic model routing across Groq, Cerebras, and GPT-4o, prompt prefetching, strict Pydantic v2 runtime validation, and multi-step tool-calling systems cutting API spend by 78%.',
  },
  {
    title: 'PRODUCTION BACKENDS',
    desc: 'High-concurrency FastAPI services, Redis 7.4 session caching, RunPod serverless microservices with <200ms cold starts, Docker containerization, and automated CI/CD.',
  },
]

export default function About() {
  const { ref } = useReveal()

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header reveal" ref={ref}>
          <span className="section-label">(ABOUT ME)</span>
          <h2 className="about-statement">
            BOLDLY EMBRACING REAL-TIME VOICE AI AND PRODUCTION LLM INFRASTRUCTURE. I ENGINEER HIGH-THROUGHPUT BACKENDS THAT SCALE UNDER PRESSURE, NOT TOY DEMOS.
          </h2>
        </div>

        <div className="capabilities-grid">
          {CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className={`capability-card reveal reveal-delay-${i + 1}`}>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="about-cta reveal reveal-delay-4">
          <a href="#contact" onClick={scrollToContact} className="btn-pill-dark">
            Let's talk <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
