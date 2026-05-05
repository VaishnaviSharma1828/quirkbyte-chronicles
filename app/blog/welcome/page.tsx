export default function WelcomePost() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl bg-[#111827] p-10 border border-[#7c5cff]/20 shadow-[0_0_40px_rgba(0,212,255,0.18)]">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-[#7c5cff] mb-4 font-[var(--font-sora)]">Welcome to QuirkByte Chronicles</h1>
          <p className="text-[#00d4ff] text-lg opacity-80">May 4, 2026</p>
        </header>

        <div className="prose prose-invert prose-headings:text-[#e6e6e6] prose-p:text-[#e6e6e6] prose-strong:text-[#e6e6e6] prose-li:text-[#e6e6e6] max-w-none space-y-6">
          <p className="text-lg text-[#e6e6e6] opacity-90">
            Hello! This is the first post on <strong>QuirkByte Chronicles</strong>, where technology and life lessons meet with a quirky twist.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-4">Why this blog?</h2>
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3 text-[#e6e6e6] opacity-90">
                <span className="font-bold text-[#00d4ff]">•</span>
                <div><strong>Tech with personality</strong> — I write about tools, experiments, and code that matters.</div>
              </li>
              <li className="flex gap-3 text-[#e6e6e6] opacity-90">
                <span className="font-bold text-[#00d4ff]">•</span>
                <div><strong>Real life reflection</strong> — I share the small surprises and habits that help me grow.</div>
              </li>
              <li className="flex gap-3 text-[#e6e6e6] opacity-90">
                <span className="font-bold text-[#00d4ff]">•</span>
                <div><strong>Bright and bold</strong> — The design is playful, and the voice is curious.</div>
              </li>
            </ul>
          </section>

          <blockquote className="border-l-4 border-[#00d4ff] bg-[#0b1220] pl-4 italic text-[#e6e6e6] rounded-xl">
            "Small experiments can lead to big ideas."
          </blockquote>

          <section>
            <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-4">What's ahead</h2>
            <ul className="space-y-3 ml-6 text-[#e6e6e6] opacity-90">
              <li className="flex gap-3">
                <span className="text-[#00d4ff]">→</span>
                <span>posts about debugging life and code</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#00d4ff]">→</span>
                <span>musings on workflows and productivity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#00d4ff]">→</span>
                <span>honest stories from the day-to-day</span>
              </li>
            </ul>
          </section>

          <div className="bg-[#0f172a] p-4 rounded-xl font-mono text-sm text-[#e6e6e6] overflow-x-auto border border-[#7c5cff]/20">
            <p className="text-[#00d4ff] mb-2">// JavaScript</p>
            <code className="block">console.log('Hello from QuirkByte Chronicles!')</code>
          </div>
        </div>
      </div>
    </article>
  )
}
