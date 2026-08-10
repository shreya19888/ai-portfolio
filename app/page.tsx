import { agents } from "./data/agents";

const domainCount = new Set(
  agents.map((agent) => agent.industry)
).size;

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-24">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            AI Engineer • Enterprise AI • Agentic Systems • Full Stack AI
          </p>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Building AI systems that turn complex problems into useful
            products.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-white">
              Shreya Chakrabarti
            </span>
            . I build intelligent applications at the intersection of AI,
            data, and product design — from enterprise decision systems and
            workforce intelligence to consumer AI experiences.
            <br />
            <br />
            I&apos;m also building{" "}
            <span className="font-semibold text-white">
              100 Days • 100 AI Agents
            </span>
            , a hands-on journey exploring how agentic AI can solve real-world
            problems across industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Explore Projects
            </a>

            <a
              href="https://github.com/shreya19888"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-7 py-3 transition hover:border-blue-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-chakrabarti/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-7 py-3 transition hover:border-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-5xl font-black">{agents.length}</h2>
            <p className="mt-2 text-zinc-400">Agents Built</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">100</h2>
            <p className="mt-2 text-zinc-400">Agent Goal</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">{domainCount}+</h2>
            <p className="mt-2 text-zinc-400">Domains Explored</p>
          </div>

          <div>
            <h2 className="text-5xl font-black">AI</h2>
            <p className="mt-2 text-zinc-400">First Product Mindset</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-8 pb-24"
      >
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            100 Days • 100 AI Agents
          </p>

          <h2 className="mt-3 text-5xl font-black">
            AI Products, Built in Public
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-zinc-400">
            A growing collection of AI applications exploring how intelligent
            systems can solve real problems across enterprise, healthcare,
            workforce, developer productivity, climate, consumer wellness,
            and beyond.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                  {agent.industry}
                </span>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                  {agent.status}
                </span>
              </div>

              <div className="mb-2 text-sm text-zinc-500">
                Day {agent.day}
              </div>

              <h3 className="text-2xl font-bold">{agent.title}</h3>

              {agent.hackathon && (
                <a
                  href={
                    agent.hackathon.toLowerCase().includes("youcam")
                      ? "https://youcam-api.devpost.com/"
                      : agent.hackathon.toLowerCase().includes("datahub")
                        ? "https://datahub.devpost.com/"
                        : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 transition hover:bg-purple-500/30"
                >
                  🏆 {agent.hackathon}
                </a>
              )}

              <p className="mt-3 text-zinc-400">{agent.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {agent.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={agent.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

                <a
                  href={agent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-blue-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-7xl px-8">
          <p className="text-center text-zinc-400">
            Building AI products with Next.js, TypeScript, React, OpenAI,
            LangGraph, computer vision, agentic workflows, and modern cloud
            technologies.
          </p>

          <p className="mt-4 text-center text-sm text-zinc-600">
            © {new Date().getFullYear()} Shreya Chakrabarti
          </p>
        </div>
      </footer>
    </main>
  );
}