import { useReveal } from '../hooks/useReveal'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const PROJECTS = [
  {
    number: '01',
    title: 'TradeMinds',
    desc: '3-agent autonomous paper trading system — Momentum, Scalp, and Chat agents with real-time decision loops, GPT-4o-mini tool calling, and full trade lifecycle management.',
    stack: ['FastAPI', 'GPT-4o-mini', 'APScheduler', 'Supabase', 'AWS EC2', 'Next.js'],
    github: 'https://github.com/Bharathsimhareddy18/TradeMinds---Autonomous-Trading-Agent',
    live: 'https://trademind-agent.vercel.app/',
  },
  {
    number: '02',
    title: 'Indian Law Assistant',
    desc: 'Hybrid RAG system (BM25 + FAISS) with HyDE query expansion, faithfulness and correctness scoring, streaming responses, and full LLMOps observability via Langfuse.',
    stack: ['FastAPI', 'FAISS', 'BM25', 'HyDE', 'Langfuse', 'DeepEval', 'HuggingFace'],
    github: 'https://github.com/Bharathsimhareddy18/indian-law-rag-eval',
    live: 'https://bharath-reddy-ai-indian-law-rag-eval.hf.space',
  },
  {
    number: '03',
    title: 'Career AI',
    desc: 'Resume-JD intelligence engine using asyncio parallelization, LLM semantic extraction, and cosine similarity scoring. Containerized with Docker and deployed on AWS ECS.',
    stack: ['FastAPI', 'LangChain', 'asyncio', 'Docker', 'AWS ECS', 'Pinecone'],
    github: 'https://github.com/Bharathsimhareddy18/Career-AI',
    live: null,
  },
]

export default function Projects() {
  const { ref } = useReveal()

  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label reveal" ref={ref}>Projects</p>
        <h2 className="section-title reveal reveal-delay-1">Production-grade systems,<br />not demos.</h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.number}
              className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <span className="project-number">{p.number}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(t => (
                  <span key={t} className="stack-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <GithubIcon /> GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalIcon /> Live
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
