import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight hover:text-yellow-200">
          QuirkByte Chronicles
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/" className="transition hover:text-yellow-200">Home</Link>
          <Link href="/blog" className="transition hover:text-yellow-200">Blog</Link>
          <Link href="/about" className="transition hover:text-yellow-200">About</Link>
        </nav>
      </div>
    </header>
  )
}
