import { useReveal } from '../hooks/useReveal'

const SKILL_GROUPS = [
  {
    label: 'Core Languages & Frameworks',
    skills: ['Python', 'FastAPI', 'LangChain', 'PyTorch'],
  },
  {
    label: 'Retrieval & Vector Search',
    skills: ['RAG Pipelines', 'FAISS', 'BM25', 'Pinecone', 'HyDE'],
  },
  {
    label: 'LLM & Agents',
    skills: ['Tool Calling', 'GPT-4o-mini', 'Gemini Vision', 'Pydantic', 'Hugging Face'],
  },
  {
    label: 'Infrastructure & Cloud',
    skills: ['Docker', 'AWS EC2', 'AWS ECS', 'GCP', 'Supabase', 'APScheduler'],
  },
  {
    label: 'LLMOps & Evaluation',
    skills: ['LLMOps', 'Langfuse', 'DeepEval', 'tenacity'],
  },
]

export default function Skills() {
  const { ref } = useReveal()

  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label reveal" ref={ref}>Skills</p>
        <h2 className="section-title reveal reveal-delay-1">Stack built for<br />production LLM systems.</h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.label} className={`skill-group reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
