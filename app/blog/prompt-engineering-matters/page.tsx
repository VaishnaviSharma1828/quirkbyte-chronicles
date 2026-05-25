import React from 'react'
import Image from 'next/image'

export default function PromptEngineeringPost() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl bg-[#111827] p-10 border border-[#7c5cff]/20 shadow-[0_0_40px_rgba(0,212,255,0.18)]">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7c5cff] mb-4 font-[var(--font-sora)]">Prompt Engineering Matters — Don’t Trust Confident AI 💀🐸</h1>
          <p className="text-[#00d4ff] text-lg opacity-80">May 25, 2026</p>
        </header>

        <div className="my-8 rounded-xl overflow-hidden border border-[#7c5cff]/20">
          <Image
            src="/images/ai-frog-meme.png"
            alt="AI frog meme"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-invert prose-headings:text-[#e6e6e6] prose-p:text-[#e6e6e6] prose-strong:text-[#e6e6e6] prose-li:text-[#e6e6e6] max-w-none space-y-6">
          <p className="text-lg text-[#e6e6e6] opacity-90">
            AI is amazing… until it confidently tells you a poisonous frog is edible.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            That’s exactly why Prompt Engineering matters.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            People think AI is magic. It’s not. It’s a tool that depends heavily on:
          </p>

          <ul>
            <li className="text-[#e6e6e6] opacity-90">🧠 the quality of your instructions</li>
            <li className="text-[#e6e6e6] opacity-90">📌 the context you provide</li>
            <li className="text-[#e6e6e6] opacity-90">🔍 whether you’re smart enough to verify the answer</li>
          </ul>

          <p className="text-[#e6e6e6] opacity-90">
            Because let’s be honest… Some people are using AI like this: “Do my work.”
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            And others are using it like this: “Help me think better, faster, and smarter.” ⚡
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Huge difference.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            AI can write code, generate presentations, summarize documents, and sound extremely confident while doing it. But confidence ≠ correctness.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            That’s why the future advantage won’t belong to people who avoid AI. It will belong to people who know:
          </p>

          <ul>
            <li className="text-[#e6e6e6] opacity-90">✔️ how to ask better questions</li>
            <li className="text-[#e6e6e6] opacity-90">✔️ how to refine outputs</li>
            <li className="text-[#e6e6e6] opacity-90">✔️ how to detect hallucinations</li>
            <li className="text-[#e6e6e6] opacity-90">✔️ and when NOT to trust the first answer</li>
          </ul>

          <p className="text-[#e6e6e6] opacity-90">
            AI won’t take your job. But someone using AI properly might take the promotion you wanted.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Learn the tools. Learn the prompts. Most importantly — learn to think.
          </p>

          <p className="text-[#00d4ff] opacity-90">#AI #PromptEngineering #ArtificialIntelligence #FutureOfWork #Technology #Innovation #Productivity #Learning #Tech #CareerGrowth</p>
        </div>
      </div>
    </article>
  )
}
