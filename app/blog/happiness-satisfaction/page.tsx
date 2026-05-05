import Image from 'next/image'

export default function HappinessPost() {
  return (
    <article className="container mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-3xl bg-[#111827] p-10 border border-[#7c5cff]/20 shadow-[0_0_40px_rgba(0,212,255,0.18)]">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-[#7c5cff] mb-4 font-[var(--font-sora)]">Happiness and Satisfaction — What We're Actually Chasing</h1>
          <p className="text-[#00d4ff] text-lg opacity-80">May 5, 2026</p>
        </header>

        <div className="prose prose-invert prose-headings:text-[#e6e6e6] prose-p:text-[#e6e6e6] prose-strong:text-[#e6e6e6] prose-li:text-[#e6e6e6] max-w-none space-y-6">
          <p className="text-lg text-[#e6e6e6] opacity-90">
            There are days when I think life is supposed to look like a checklist.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Good job.<br />
            Stable income.<br />
            Some achievements.<br />
            A version of "success" that people can understand without asking too many questions.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            And for a long time, I believed that too.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            But somewhere between building things, learning new skills, and constantly trying to "figure it out," I started noticing something strange—none of it really feels complete on its own.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Even after small wins, there's always another goal waiting in the background. Another milestone. Another version of "I'll be happy when..."
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            That's when it slowly became clear to me.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Maybe happiness is not the result of reaching a destination. Maybe it's something quieter than that. Something that exists in between the milestones.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            And satisfaction… it feels even rarer. Not the loud kind that comes after success, but the calm kind that shows up when you're okay with where you are, even if everything isn't perfect yet.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            I don't think I've fully understood it. I don't think anyone really does.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            But I've started to believe this:
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Maybe the goal of life isn't to constantly become something more.<br />
            Maybe it's to feel enough while still becoming.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            Happiness, in that sense, isn't something you chase at the end. It's something you learn to notice along the way.
          </p>

          <p className="text-[#e6e6e6] opacity-90">
            And maybe that's all we're really trying to do.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border border-[#7c5cff]/20">
            <Image
              src="/images/Gemini_Generated_Image_8wn6mv8wn6mv8wn6.png"
              alt="Gemini Generated Image"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </article>
  )
}