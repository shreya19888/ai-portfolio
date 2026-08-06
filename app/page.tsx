import Link from "next/link";
import { agents } from "./data/agents";

const DATAPILOT_URL =
  "https://datapilotai-j07o2081f-shreyachakrabarti19-2079s-projects.vercel.app/";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8 py-20">
        <div>
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
            🚀 AI Engineer • Enterprise AI • Full Stack AI Applications
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Building production-ready AI applications that solve real business
            problems.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            Hi, I'm{" "}
            <span className="font-semibold text-white">
              Shreya Chakrabarti
            </span>
            . I build intelligent software that combines AI, data engineering,
            and modern product design to create practical enterprise
            applications.

            <br />
            <br />

            My work spans enterprise data, healthcare, HR, climate, developer
            productivity and agentic workflows through my{" "}
            <span className="font-semibold text-white">
              100 Days • 100 AI Agents
            </span>{" "}
            challenge.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Explore Portfolio
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
            <p className="mt-2 text-zinc-400">
              Projects Built
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">100</h2>
            <p className="mt-2 text-zinc-400">
              Project Goal
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">6+</h2>
            <p className="mt-2 text-zinc-400">
              Business Domains
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">AI</h2>
            <p className="mt-2 text-zinc-400">
              Production Ready
            </p>
          </div>

        </div>
      </section>

      {/* Featured Project */}

      <section className="mx-auto max-w-7xl px-8 pb-24">

        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 via-zinc-900 to-zinc-950 p-10">

          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400">
            ⭐ Featured Project
          </span>

          <h2 className="mt-6 text-5xl font-black">
            DataPilot AI
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            An enterprise data discovery platform that helps engineers
            understand datasets faster through documentation, lineage,
            metadata, learning resources, SQL examples and an intelligent
            enterprise assistant.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "TypeScript",
              "Tailwind",
              "OpenAI",
              "Enterprise AI",
              "Data Engineering",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-800 px-3 py-2 text-sm"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={DATAPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/shreya19888/100-days-100-agents/tree/master/day-005-datapilot-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-blue-500"
            >
              💻 View Code
            </a>

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
            Portfolio
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-zinc-400">
            A growing collection of production-ready AI applications focused on
            enterprise software, healthcare, developer productivity, and
            intelligent automation.
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
            Building production-ready AI applications with Next.js,
            TypeScript, React, OpenAI, LangGraph, and modern cloud
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