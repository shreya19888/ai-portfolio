export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8">
        <div>
          <p className="mb-4 text-blue-400">
            🚀 AI Engineer • 100 Days • 100 Agents
          </p>

          <h1 className="max-w-4xl text-6xl font-bold leading-tight">
            Building production-ready AI systems that solve real-world business
            problems.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-zinc-400">
            Hi, I'm Shreya. I build AI agents, enterprise AI applications, and
            open-source projects while documenting everything I learn.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
              Explore Projects
            </button>

            <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-zinc-500">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}