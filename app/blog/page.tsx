import Link from 'next/link'

export default function Blog() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-700">Blog Posts</h1>
        <p className="mt-4 text-slate-600">Fresh stories from the intersection of technology and everyday life.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/blog/welcome" className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-xl">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">Featured</div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Welcome to QuirkByte Chronicles</h2>
          <p className="text-slate-600">Kick off the blog with a playful introduction to the mission and tone of this site.</p>
        </Link>
      </div>
    </section>
  )
}
