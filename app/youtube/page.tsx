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
            Welcome to Quirkbyte Chronicles, a space where I share everything that sparks curiosity—from philosophy and personal growth to life lessons and meaningful insights.

            Here, I explore thoughts that sit between everyday life and deeper reflection—sometimes through personal experiences, sometimes through learning, and sometimes just through questions I don't have answers to yet.

            Whether it's talking about navigating life, understanding ourselves better, or simply making sense of the world around us, this channel is for anyone who enjoys thinking a little deeper and growing along the way.

            If you're into discovering new perspectives, reflecting on life, and evolving together, hit subscribe—and let's begin this journey.
          </p>
          <div className="mt-8 rounded-xl overflow-hidden border border-[#7c5cff]/20">
            <img
              src="/images/ChatGPT Image May 5, 2026, 02_29_02 PM.png"
              alt="Quirkbyte Chronicles YouTube logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}