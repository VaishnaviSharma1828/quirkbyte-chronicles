export default function WelcomePost() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to QuirkByte Chronicles</h1>
        <p className="text-slate-600 text-lg">May 4, 2026</p>
      </header>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
        <p className="text-lg">
          Hello! This is the first post on <strong>QuirkByte Chronicles</strong>, where technology and life lessons meet with a quirky twist.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why this blog?</h2>
          <ul className="space-y-2 ml-6">
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">•</span>
              <div><strong>Tech with personality</strong> — I write about tools, experiments, and code that matters.</div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">•</span>
              <div><strong>Real life reflection</strong> — I share the small surprises and habits that help me grow.</div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600">•</span>
              <div><strong>Bright and bold</strong> — The design is playful, and the voice is curious.</div>
            </li>
          </ul>
        </section>

        <blockquote className="border-l-4 border-purple-600 pl-4 italic text-slate-600">
          "Small experiments can lead to big ideas."
        </blockquote>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">What's ahead</h2>
          <ul className="space-y-2 ml-6">
            <li className="flex gap-3">
              <span>→</span>
              <span>posts about debugging life and code</span>
            </li>
            <li className="flex gap-3">
              <span>→</span>
              <span>musings on workflows and productivity</span>
            </li>
            <li className="flex gap-3">
              <span>→</span>
              <span>honest stories from the day-to-day</span>
            </li>
          </ul>
        </section>

        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm text-slate-800 overflow-x-auto">
          <p className="text-slate-600 mb-2">// JavaScript</p>
          <code>console.log('Hello from QuirkByte Chronicles!')</code>
        </div>
      </div>
    </article>
  )
}
