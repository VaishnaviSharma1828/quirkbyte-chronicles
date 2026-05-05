import Link from 'next/link'

export default function YouTube() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#7c5cff] mb-4 font-[var(--font-sora)]">Latest Videos</h1>
        <p className="text-[#e6e6e6] opacity-80">Check out my YouTube channel for tech tutorials, life hacks, and quirky content!</p>
        <Link
          href="https://www.youtube.com/channel/UCt0sDf2yZSSPCTrQG4Gk1LA/posts?pvf=CAI%253D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-[#00d4ff] text-[#0b0f19] font-semibold rounded-lg hover:bg-[#7c5cff] hover:text-[#e6e6e6] transition-colors"
        >
          Visit YouTube Channel
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#7c5cff]/20">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed?listType=user_uploads&list=UCt0sDf2yZSSPCTrQG4Gk1LA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}