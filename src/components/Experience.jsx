import { useReveal } from '../hooks/useReveal'

const EXPERIENCES = [
  {
    company: 'Dvitva AI',
    subtext: 'Child Company of Alonzo AI',
    role: 'ASSOCIATE AI/ML ENGINEER',
    location: 'Hyderabad, India',
    period: 'Apr 2026 – Present',
    bullets: [
      {
        bold: 'Core Voice Engine:',
        text: 'Architected and deployed real-time voice infrastructure for dvitva.ai, serving concurrent inbound telephony calls via FastAPI and bi-directional WebSockets.',
      },
      {
        bold: 'Low-Latency Streaming:',
        text: 'Hit sub-800ms Time-to-First-Audio (TTFA) turnaround by streaming intermediate LLM token chunks asynchronously into TTS pipelines using asyncio and Redis session caching.',
      },
      {
        bold: 'Serverless Serving:',
        text: 'Engineered ASR and TTS containerized microservices on RunPod, reducing cold-start latency to <200ms through runtime memory optimizations and warm-pool caching.',
      },
      {
        bold: 'Telephony Integration:',
        text: 'Built dynamic phone number provisioning and webhook dispatchers using Plivo API, binding incoming PSTN calls instantly to persistent agent loops.',
      },
      {
        bold: 'Agent Reliability:',
        text: 'Enforced strict Pydantic v2 runtime validation across dynamic tool executions, preventing JSON schema mismatches and API dropouts during live calls.',
      },
    ],
  },
  {
    company: 'Bodega Delivery',
    subtext: null,
    role: 'AI/ML ENGINEERING INTERN',
    location: 'Guntur, AP, India',
    period: 'Jul 2025 – Jan 2026',
    bullets: [
      {
        bold: 'Vision Verification:',
        text: 'Shipped a production FastAPI microservice using Gemini Vision API to verify catalog freshness and expiry labels, cutting delivery complaints by 20%.',
      },
      {
        bold: 'Lexical Retrieval:',
        text: 'Built an internal enterprise retrieval system using BM25 indexing across 60+ partner technical documents, reducing internal lookup latency by 50%.',
      },
      {
        bold: 'Testing and Deployment:',
        text: 'Containerized microservices using Docker and instituted automated CI/CD integration suites with Pytest and GitHub Actions.',
      },
    ],
  },
]

export default function Experience() {
  const { ref } = useReveal()

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="exp-intro reveal" ref={ref}>
          <span className="section-label">(EXPERIENCE)</span>
          <p className="exp-manifesto">
            I ARCHITECT RESILIENT, ULTRA-LOW-LATENCY BACKENDS FOR PRODUCTION AI. MY WORK ENSURES LIVE CALL STABILITY, SUB-SECOND RESPONSE TIMES, AND RIGOROUS COST EFFICIENCY.
          </p>
        </div>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className={`exp-entry reveal reveal-delay-${i + 1}`}>
              <div className="exp-entry-header">
                <div>
                  <span className="exp-company-name">{exp.company}</span>
                  {exp.subtext && <span className="exp-company-sub"> ({exp.subtext})</span>}
                </div>
                <span className="exp-date">{exp.period}</span>
              </div>
              <h3 className="exp-role-title">
                {exp.role} · <span className="exp-location">{exp.location}</span>
              </h3>
              <ul className="exp-bullet-list">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="exp-bullet-item">
                    <strong>{b.bold}</strong> {b.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
