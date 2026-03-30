import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const { ref } = useReveal()

  return (
    <section className="experience" id="experience">
      <div className="container">
        <p className="section-label reveal" ref={ref}>Experience</p>
        <h2 className="section-title reveal reveal-delay-1">Real systems.<br />Measurable outcomes.</h2>
        <div className="exp-card reveal reveal-delay-2">
          <div className="exp-header">
            <h3 className="exp-company">Bodega Delivery</h3>
            <span className="exp-period">Jul 2024 – Jan 2025</span>
          </div>
          <p className="exp-role">AI / ML Engineering Intern</p>
          <ul className="exp-bullets">
            <li className="exp-bullet">
              Built a real-time food quality verification system using <strong>Gemini Vision API</strong>, reducing poor-quality deliveries by <strong>20%</strong> through automated image-based inspection at delivery dispatch.
            </li>
            <li className="exp-bullet">
              Engineered a <strong>BM25 RAG pipeline</strong> over 60+ business documents across 10 B2B clients, cutting internal information discovery time by <strong>50%</strong> and replacing an unstructured manual lookup process.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
