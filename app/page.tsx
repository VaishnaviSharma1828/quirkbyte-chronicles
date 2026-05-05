import Link from 'next/link'

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="inline-block text-sm uppercase tracking-[0.4em] text-[#7c5cff] mb-4">
          Digital Journal
        </span>
        <h1 className="text-6xl font-extrabold tracking-tight text-[#e6e6e6] mb-6 font-[var(--font-sora)] animate-float">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] to-[#00d4ff]">QuirkByte Chronicles</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#e6e6e6] opacity-90">
          A digital journal of tech, life, and everything I can't stop thinking about.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/blog" className="group rounded-3xl bg-[#1a1f2e] p-10 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all duration-300 border border-[#7c5cff]/20">
          <h2 className="text-2xl font-semibold text-[#7c5cff] mb-3 group-hover:text-[#00d4ff] transition-colors">Read the Blog</h2>
          <p className="text-[#e6e6e6] opacity-80">Jump into the latest posts on coding, creativity, and living smarter.</p>
        </Link>

        <Link href="/youtube" className="group rounded-3xl bg-[#1a1f2e] p-10 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all duration-300 border border-[#7c5cff]/20">
          <h2 className="text-2xl font-semibold text-[#7c5cff] mb-3 group-hover:text-[#00d4ff] transition-colors">Watch Videos</h2>
          <p className="text-[#e6e6e6] opacity-80">Explore tech tutorials, life hacks, and quirky content on YouTube.</p>
        </Link>

        <Link href="/about" className="group rounded-3xl bg-[#1a1f2e] p-10 shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:-translate-y-1 transition-all duration-300 border border-[#7c5cff]/20">
          <h2 className="text-2xl font-semibold text-[#7c5cff] mb-3 group-hover:text-[#00d4ff] transition-colors">About the Author</h2>
          <p className="text-[#e6e6e6] opacity-80">Discover the personality behind the posts and the mindset that drives this quirky blog.</p>
        </Link>
      </div>
    </section>
  )
}
