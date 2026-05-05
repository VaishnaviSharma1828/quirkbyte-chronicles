import Link from 'next/link'

export default function YouTube() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#7c5cff] mb-4 font-[var(--font-sora)]">YouTube Channel</h1>
        <p className="text-[#e6e6e6] opacity-80">Check out my YouTube channel for philosophy, personal growth, and meaningful insights!</p>
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
        <div className="rounded-2xl bg-[#1a1f2e] p-8 border border-[#7c5cff]/20">
          <h2 className="text-2xl font-semibold text-[#00d4ff] mb-4">About the Channel</h2>
          <p className="text-[#e6e6e6] opacity-90 leading-relaxed">
            Welcome to our channel, where we share everything that sparks our curiosity, from philosophy and personal growth to life lessons and meaningful insights. Whether we are helping friends tackle their problems or diving deep into how to live a more fulfilling life, this space is for anyone who vibes with exploring deeper thoughts and finding balance. If you're into discovering new perspectives and growing together, hit subscribe and let's embark on this journey!
          </p>
        </div>
      </div>
    </section>
  )
}