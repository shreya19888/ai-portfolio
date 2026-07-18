import { agents } from "./data/agents";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-8 pt-16 pb-12">
        <div>
          <p className="mb-4 text-blue-400">
            🚀 AI Engineer • 100 Days • 100 AI Agents
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Building 100 production-ready AI agents that solve real-world
            problems.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-zinc-400">
            Hi, I'm Shreya. I build AI products that solve real business
            problems. Through my <span className="font-semibold text-white">100
            Days • 100 AI Agents</span> challenge, I'm building production-ready
            applications across healthcare, HR, climate, finance, and
            enterprise AI while exploring agentic workflows, Retrieval-Augmented
            Generation (RAG), LLMs, and modern AI engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Explore Projects
            </a>

            <a
              href="https://github.com/shreya19888"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-chakrabarti/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-8 pb-16">
        <div className="flex flex-wrap gap-10">
          <div>
            <h2 className="text-4xl font-bold">{agents.length}</h2>
            <p className="text-zinc-400">Projects Built</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100</h2>
            <p className="text-zinc-400">Goal</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">AI</h2>
            <p className="text-zinc-400">Production Ready</p>
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-8 pb-24"
      >
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Featured AI Agents
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            A growing collection of production-ready AI applications built in
            public.
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

              <h3 className="text-2xl font-bold">
                {agent.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {agent.tagline}
              </p>

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
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-zinc-500"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        <p>
          Built with Next.js, TypeScript, OpenAI, LangChain, and a passion for
          solving real-world problems with AI.
        </p>

        <p className="mt-2">
          © {new Date().getFullYear()} Shreya Chakrabarti
        </p>
      </footer>
    </main>
  );
}