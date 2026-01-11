import Link from "next/link"
import { Compass } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111111]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-[#FF7F50]" />
          <span className="text-xl font-bold text-white">CareerPilot</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#mentors" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Find Mentors
          </Link>
          <Link href="#events" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Events
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/coach"
            className="hidden rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#FF7F50]/50 hover:bg-[#FF7F50]/10 md:inline-flex"
          >
            AI Coach
          </Link>
          <button className="rounded-lg bg-[#FF7F50] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF7F50]/90">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
