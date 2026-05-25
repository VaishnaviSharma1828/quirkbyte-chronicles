import Link from 'next/link'

export default function Blog() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#7c5cff] font-[var(--font-sora)]">Blog Posts</h1>
        <p className="mt-4 text-[#e6e6e6] opacity-80">Fresh stories from the intersection of technology and everyday life.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/blog/happiness-satisfaction" className="group block rounded-2xl bg-[#1a1f2e] p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-2 border border-[#7c5cff]/20">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">Latest</div>
          <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-3 group-hover:text-[#00d4ff] transition-colors">Happiness and Satisfaction — What We're Actually Chasing</h2>
          <p className="text-[#e6e6e6] opacity-80 leading-relaxed">Exploring the quiet pursuit of feeling enough while still becoming.</p>
          <div className="mt-4 text-sm text-[#7c5cff] font-medium group-hover:text-[#00d4ff] transition-colors">Read more →</div>
        </Link>

        <Link href="/blog/welcome" className="group block rounded-2xl bg-[#1a1f2e] p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-2 border border-[#7c5cff]/20">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">Featured</div>
          <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-3 group-hover:text-[#00d4ff] transition-colors">Welcome to QuirkByte Chronicles</h2>
          <p className="text-[#e6e6e6] opacity-80 leading-relaxed">Kick off the blog with a playful introduction to the mission and tone of this site.</p>
          <div className="mt-4 text-sm text-[#7c5cff] font-medium group-hover:text-[#00d4ff] transition-colors">Read more →</div>
        </Link>

        <Link href="/blog/sap-sapphire" className="group block rounded-2xl bg-[#1a1f2e] p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-2 border border-[#7c5cff]/20">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">Latest</div>
          <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-3 group-hover:text-[#00d4ff] transition-colors">SAP Sapphire 2026 — What It Really Means for Fiori Developers 🚀</h2>
          <p className="text-[#e6e6e6] opacity-80 leading-relaxed">Exploring the transformative impact of SAP Sapphire 2026 on Fiori development and the shift towards AI-driven enterprise experiences.</p>
          <div className="mt-4 text-sm text-[#7c5cff] font-medium group-hover:text-[#00d4ff] transition-colors">Read more →</div>
        </Link>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-[#7c5cff] mb-6 font-[var(--font-sora)]">AI</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/blog/prompt-engineering-matters" className="group block rounded-2xl bg-[#1a1f2e] p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-2 border border-[#7c5cff]/20">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">AI</div>
            <h2 className="text-2xl font-semibold text-[#e6e6e6] mb-3 group-hover:text-[#00d4ff] transition-colors">Prompt Engineering Matters — Don’t Trust Confident AI</h2>
            <p className="text-[#e6e6e6] opacity-80 leading-relaxed">AI is a powerful tool — but confidence isn't correctness. Learn how to ask better questions and detect hallucinations.</p>
            <div className="mt-4 text-sm text-[#7c5cff] font-medium group-hover:text-[#00d4ff] transition-colors">Read more →</div>
          </Link>
        </div>
      </div>
    </section>
  )
}
