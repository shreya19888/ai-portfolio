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
            workforce intelligence to real-world agentic applications.
            <br />
            <br />
            This is{" "}
            <span className="font-semibold text-white">
              100 AI Agents
            </span>
            , a hands-on portfolio exploring how agentic AI can solve
            real-world problems across industries.
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

      {/* Featured Project */}
      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Featured Agent
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Community Pilot AI
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI-powered community food rescue coordination system that
            connects surplus food, community need, volunteers, and voice
            outreach into one operational workflow.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <div className="grid lg:grid-cols-2">
            {/* Project Story */}
            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
                  Agent 006
                </span>

                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                  Agentic AI
                </span>

                <a
                  href="https://oa-ai-for-social-good.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400 transition hover:bg-green-500/30"
                >
                  AI for Social Good Hackathon
                </a>
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                From surplus food to coordinated delivery.
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-400">
                Community Pilot AI helps coordinators decide what needs to
                happen next. It connects food donors, community organizations,
                and volunteers while matching donations to real-world
                constraints such as distance, time windows, dietary
                requirements, availability, and transport capacity.
              </p>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                When the coordinator is ready, an AI voice agent can contact
                the selected volunteer. If they decline or do not answer, the
                rescue can recover by moving to the next qualified volunteer.
                Once someone accepts, the workflow can continue through donor
                notification, calendar coordination, pickup, in transit, and
                delivery.
              </p>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                The intelligence layer combines operational data with
                community need, shelter-system pressure, and weather. It also
                identifies donations approaching their expiration window so
                coordinators can prioritize food that needs to move first.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "OpenAI",
                  "Vapi",
                  "FastAPI",
                  "Next.js",
                  "Supabase",
                  "Agentic Workflows",
                  "AI Matching",
                  "WeatherAPI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://community-pilot-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

                <a
                  href="https://oa-ai-for-social-good.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm transition hover:border-blue-500"
                >
                  Hackathon
                </a>

                <a
                  href="https://github.com/shreya19888/100-days-100-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm transition hover:border-blue-500"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Agentic Capabilities */}
            <div className="border-t border-zinc-800 bg-zinc-950/60 p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                What makes it agentic
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-white">
                    Constraint-aware matching
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Matches food, destinations, and volunteers using
                    geography, timing, dietary requirements, occupancy, and
                    transport capacity — including splitting large donations
                    across multiple volunteers when necessary.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Human-in-the-loop outreach
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    The coordinator decides when a volunteer should be
                    contacted. Community Pilot prepares the match but does not
                    automatically dial.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Recovery after failure
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    A decline or no-answer does not end the rescue. The
                    workflow can move to the next qualified volunteer or hold
                    the rescue as volunteer-match pending.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Closed-loop execution
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Accepted matches can progress through donor notification,
                    calendar coordination, pickup, in transit, and delivery
                    rather than stopping at a recommendation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Expiration-aware intelligence
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    The intelligence layer identifies donations approaching
                    their pickup deadline so coordinators can focus attention
                    on food that needs action first.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Community intelligence
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Operational signals are combined with community need,
                    shelter-system pressure, and weather to provide context
                    around what is happening on the ground.
                  </p>
                </div>
              </div>
            </div>
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
            100 AI Agents
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
                Agent {agent.day}
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
