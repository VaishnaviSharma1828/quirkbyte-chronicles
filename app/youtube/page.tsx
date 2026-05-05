import Link from 'next/link'

export default function YouTube() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">Latest Videos</h1>
        <p className="text-slate-600">Check out my YouTube channel for tech tutorials, life hacks, and quirky content!</p>
        <Link
          href="https://www.youtube.com/channel/UCt0sDf2yZSSPCTrQG4Gk1LA/posts?pvf=CAI%253D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Visit YouTube Channel
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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