import { useReveal } from '../hooks/useReveal'

const SKILL_GROUPS = [
  {
    label: 'Languages & Core Systems',
    skills: ['Python (AsyncIO)', 'SQL', 'TypeScript', 'Bash', 'C++ (Basics)'],
  },
  {
    label: 'Voice AI & Audio DSP',
    skills: [
      'WebSockets',
      'Plivo PSTN',
      'mu-law / PCM16 Codecs',
      'Silero VAD',
      'Pipecat Smart Turn (ONNX)',
      'WebRTC AEC',
      'Audio Jitter Buffering',
      'EBU R128 Loudness Gating',
    ],
  },
  {
    label: 'Speech & Foundation Models',
    skills: [
      'ElevenLabs Scribe',
      'Murf Falcon-2',
      'Sarvam AI (Saaras/Bulbul)',
      'Cerebras (Llama-3.3-70B)',
      'Groq (Low Latency)',
      'OpenAI GPT-4o / o1',
    ],
  },
  {
    label: 'Agentic AI & Orchestration',
    skills: [
      'LangGraph State Machines',
      'LangChain',
      'Tool-Calling Systems',
      'Dynamic Reasoning Routing',
      'Hybrid RAG (BM25 + FAISS)',
      'LoRA Fine-Tuning',
    ],
  },
  {
    label: 'Backend & Data Pipelines',
    skills: [
      'FastAPI',
      'Pydantic v2',
      'Redis 7.4 (Session Caching)',
      'Motor (Async MongoDB)',
      'PostgreSQL',
      'Supabase',
      'Uvicorn',
    ],
  },
  {
    label: 'Cloud, Serving & Observability',
    skills: [
      'RunPod Serverless',
      'Docker Containerization',
      'GitHub Actions (CI/CD)',
      'Linux Kernel & Audio Streams',
      'Locust Load Testing',
      'Pytest',
      'DeepEval',
      'LangSmith',
    ],
  },
]

export default function Skills() {
  const { ref } = useReveal()

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header reveal" ref={ref}>
          <span className="section-label">(TECHNICAL ARSENAL)</span>
          <h2 className="skills-headline">
            PRODUCTION-TESTED STACK & ARCHITECTURAL TOOLS
          </h2>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.label} className={`skill-group-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
