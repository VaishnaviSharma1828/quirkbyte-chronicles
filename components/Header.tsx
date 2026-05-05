import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#7c5cff] via-[#0b0f19] to-[#00d4ff] text-[#e6e6e6] shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#00d4ff]">
            <img
              src="/images/ChatGPT Image May 5, 2026, 02_58_03 PM.png"
              alt="QuirkByte Chronicles logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-extrabold tracking-tight hover:text-[#00d4ff] transition-colors font-[var(--font-sora)]">
              <span className="font-mono text-[#00d4ff] text-2xl">Q</span>uirkByte ✨
            </Link>
            <span className="text-sm opacity-90">Where tech meets life</span>
          </div>
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/" className="transition hover:text-[#00d4ff] relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/blog" className="transition hover:text-[#00d4ff] relative group">
            Blogs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/youtube" className="transition hover:text-[#00d4ff] relative group">
            YouTube
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="transition hover:text-[#00d4ff] relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
