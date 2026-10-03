import type { Metadata } from "next";
import { agents } from "./data/agents";

export const metadata: Metadata = {
  title: "Shreya's Portfolio",
  description:
    "Shreya Chakrabarti's AI engineering portfolio and the 100 AI Agents project: agentic systems, enterprise AI, and full stack AI products built in public.",
};

const AGENT_GOAL = 100;

const domainCount = new Set(agents.map((agent) => agent.industry)).size;
const progress = Math.min(
  100,
  Math.round((agents.length / AGENT_GOAL) * 100)
);

// Add new hackathons here instead of nesting more ternaries
const hackathonLinks: Record<string, string> = {
  youcam: "https://youcam-api.devpost.com/",
  datahub: "https://datahub.devpost.com/",
  "social good": "https://oa-ai-for-social-good.devpost.com/",
};

function getHackathonLink(name: string) {
  const lower = name.toLowerCase();
  const match = Object.keys(hackathonLinks).find((key) =>
    lower.includes(key)
  );
  return match ? hackathonLinks[match] : null;
}

const navLinks = [
  { label: "Featured", href: "#featured" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/shreya19888" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreya-chakrabarti/",
  },
  // Drop your resume into /public as resume.pdf, or swap in a hosted link
  { label: "Resume", href: "/resume.pdf" },
];

const featuredCapabilities = [
  {
    title: "Constraint-aware matching",
    body: "Matches food, destinations, and volunteers using geography, timing, dietary needs, occupancy, and transport capacity. Large donations can be split across multiple volunteers when needed.",
  },
  {
    title: "Human-in-the-loop outreach",
    body: "The coordinator decides when a volunteer gets contacted. Community Pilot prepares the match but never dials on its own.",
  },
  {
    title: "Recovery after failure",
    body: "A decline or no-answer doesn't end the rescue. The workflow moves to the next qualified volunteer or holds the rescue as volunteer-match pending.",
  },
  {
    title: "Closed-loop execution",
    body: "Accepted matches move through donor notification, calendar coordination, pickup, in transit, and delivery instead of stopping at a recommendation.",
  },
  {
    title: "Expiration-aware intelligence",
    body: "Flags donations getting close to their pickup deadline so coordinators can focus on the food that has to move first.",
  },
  {
    title: "Community intelligence",
    body: "Blends operational signals with community need, shelter-system pressure, and weather to show what's actually happening on the ground.",
  },
];

const featuredTech = [
  "OpenAI",
  "Vapi",
  "FastAPI",
  "Next.js",
  "Supabase",
  "Agentic Workflows",
  "AI Matching",
  "WeatherAPI",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight">
            Shreya&apos;s <span className="text-blue-400">Portfolio</span>
          </a>

          <div className="flex items-center gap-6 text-sm text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden transition hover:text-white sm:inline"
              >
                {link.label}
              </a>
            ))}
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-8 pb-24 pt-24">
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
            . I build intelligent applications where AI, data, and product
            design meet, from enterprise decision systems and workforce
            intelligence to real-world agentic apps.
          </p>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
            This is{" "}
            <span className="font-semibold text-white">100 AI Agents</span>,
            a hands-on series exploring how agentic AI can solve real
            problems across industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Explore Projects
            </a>

            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-700 px-7 py-3 transition hover:border-blue-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-5xl font-black">{agents.length}</p>
            <p className="mt-2 text-zinc-400">Agents built</p>
          </div>

          <div>
            <p className="text-5xl font-black">{AGENT_GOAL}</p>
            <p className="mt-2 text-zinc-400">Agent goal</p>
          </div>

          <div>
            <p className="text-5xl font-black">{domainCount}+</p>
            <p className="mt-2 text-zinc-400">Domains explored</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-2 flex justify-between text-sm text-zinc-500">
            <span>Progress toward {AGENT_GOAL} agents</span>
            <span>{progress}%</span>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-zinc-800"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        id="featured"
        className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-24"
      >
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Featured Agent
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Community Pilot AI
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI-powered food rescue coordination system that connects
            surplus food, community need, volunteers, and voice outreach into
            one working flow.
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
                  🏆 AI for Social Good Hackathon
                </a>
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                From surplus food to coordinated delivery.
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-400">
                Community Pilot AI helps coordinators figure out what needs to
                happen next. It connects food donors, community organizations,
                and volunteers, and matches donations against real
                constraints like distance, time windows, dietary needs,
                availability, and transport capacity.
              </p>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                When the coordinator is ready, an AI voice agent calls the
                selected volunteer. If they decline or don&apos;t pick up, the
                rescue moves on to the next qualified volunteer. Once someone
                says yes, the workflow carries through donor notification,
                calendar coordination, pickup, transit, and delivery.
              </p>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                The intelligence layer pulls together operational data,
                community need, shelter-system pressure, and weather. It also
                flags donations close to expiring so the most urgent food
                moves first.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

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
                {featuredCapabilities.map((cap) => (
                  <div key={cap.title}>
                    <h4 className="font-semibold text-white">{cap.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-zinc-500">
                      {cap.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            100 AI Agents
          </p>

          <h2 className="mt-3 text-5xl font-black">
            AI Products, Built in Public
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-zinc-400">
            A growing collection of AI apps tackling real problems in
            enterprise, healthcare, workforce, developer productivity,
            climate, consumer wellness, and more.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => {
            const hackathonUrl = agent.hackathon
              ? getHackathonLink(agent.hackathon)
              : null;

            return (
              <article
                key={agent.id}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="mb-4 flex items-center justify-between gap-2">
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

                {agent.hackathon &&
                  (hackathonUrl ? (
                    <a
                      href={hackathonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 transition hover:bg-purple-500/30"
                    >
                      🏆 {agent.hackathon}
                    </a>
                  ) : (
                    <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                      🏆 {agent.hackathon}
                    </span>
                  ))}

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

                <div className="mt-auto flex gap-3 pt-8">
                  {agent.demo && (
                    <a
                      href={agent.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
                    >
                      Live Demo
                    </a>
                  )}

                  {agent.github && (
                    <a
                      href={agent.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-blue-500"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <p className="text-lg font-bold">
            Shreya&apos;s <span className="text-blue-400">Portfolio</span>
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Building AI products with Next.js, TypeScript, React, OpenAI,
            LangGraph, computer vision, agentic workflows, and modern cloud
            tech.
          </p>

          <div className="mt-6 flex justify-center gap-6 text-sm text-zinc-400">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-600">
            © {new Date().getFullYear()} Shreya Chakrabarti
          </p>
        </div>
      </footer>
    </main>
  );
}
