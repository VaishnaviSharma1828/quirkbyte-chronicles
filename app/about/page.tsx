export default function About() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl bg-[#1a1f2e] p-10 shadow-lg border border-[#7c5cff]/20">
        <h1 className="text-4xl font-bold text-[#7c5cff] mb-6 font-[var(--font-sora)]">About QuirkByte Chronicles</h1>
        <p className="text-[#e6e6e6] opacity-90 mb-4">
          Hi, I’m Vaishnavi.
        </p>
        <p className="text-[#e6e6e6] opacity-80 mb-4">
          I build with code, but I think in stories.
        </p>
        <p className="text-[#e6e6e6] opacity-80 mb-4">
          QuirkByte Chronicles is my personal space on the internet where I write about technology, ideas, and the small moments of learning that shape how I see the world.
        </p>
        <p className="text-[#e6e6e6] opacity-80 mb-4">
          Some posts are technical. Some are reflective. Most are somewhere in between.
        </p>
        <p className="text-[#e6e6e6] opacity-80 mb-8">
          This isn’t just a blog—it’s a record of curiosity.
        </p>

        <div className="rounded-2xl bg-[#131725] p-6 border border-[#00d4ff]/20">
          <h2 className="text-2xl font-semibold text-[#00d4ff] mb-4">What you’ll find here</h2>
          <ul className="space-y-3 text-[#e6e6e6] opacity-85">
            <li className="rounded-xl border border-[#7c5cff]/20 bg-[#0f1425] p-4">
              <strong className="text-[#7c5cff]">Tech explorations</strong> — deep dives, practical ideas, and the code behind them.
            </li>
            <li className="rounded-xl border border-[#7c5cff]/20 bg-[#0f1425] p-4">
              <strong className="text-[#7c5cff]">Personal reflections</strong> — the moments and thoughts that make learning feel alive.
            </li>
            <li className="rounded-xl border border-[#7c5cff]/20 bg-[#0f1425] p-4">
              <strong className="text-[#7c5cff]">Build logs</strong> — behind-the-scenes notes from projects, experiments, and creative work.
            </li>
            <li className="rounded-xl border border-[#7c5cff]/20 bg-[#0f1425] p-4">
              <strong className="text-[#7c5cff]">Random experiments</strong> — the unexpected ideas I try just to see what happens.
            </li>
          </ul>
        </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-[#7c5cff]/20 shadow-[0_0_40px_rgba(0,212,255,0.18)]">
              <img
                src="/images/Profile Photo.jpg"
                alt="Vaishnavi - Author of QuirkByte Chronicles"
                className="w-full max-w-sm h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
