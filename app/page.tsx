import Link from 'next/link'

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="inline-block text-sm uppercase tracking-[0.4em] text-purple-600 mb-4">
          Quirky tech + life learnings
        </span>
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">QuirkByte Chronicles</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          A lively space for thoughtful technology stories, practical hacks, and the unexpected lessons that make life more interesting.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/blog" className="rounded-3xl bg-white p-10 shadow-glow hover:-translate-y-1 transition-transform">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Read the Blog</h2>
          <p className="text-slate-600">Jump into the latest posts on coding, creativity, and living smarter.</p>
        </Link>

        <Link href="/youtube" className="rounded-3xl bg-white p-10 shadow-glow hover:-translate-y-1 transition-transform">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">Watch Videos</h2>
          <p className="text-slate-600">Explore tech tutorials, life hacks, and quirky content on YouTube.</p>
        </Link>

        <Link href="/about" className="rounded-3xl bg-white p-10 shadow-glow hover:-translate-y-1 transition-transform">
          <h2 className="text-2xl font-semibold text-purple-700 mb-3">About the Author</h2>
          <p className="text-slate-600">Discover the personality behind the posts and the mindset that drives this quirky blog.</p>
        </Link>
      </div>
    </section>
  )
}
