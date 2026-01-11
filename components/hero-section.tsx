"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { useState } from "react"

const tags = ["Frontend", "PM", "Data Science", "Backend", "Design", "DevOps"]

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FF7F50]/5 to-transparent" />

      <div className="container relative mx-auto max-w-4xl text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Find Your Career Mentor, <span className="text-[#FF7F50]">Accelerate Your Growth.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          Connect with industry experts for resume reviews and mock interviews.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-[#FF7F50] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#FF7F50]/25 transition-all hover:bg-[#FF7F50]/90 hover:shadow-[#FF7F50]/40">
              Find a Mentor
            </button>
            <Link
              href="/coach"
              className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[#FF7F50]/50 hover:bg-[#FF7F50]/10"
            >
              Try AI Interview Coach
            </Link>
          </div>

          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search mentors by name, skill, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-[#FF7F50]/50 focus:outline-none focus:ring-2 focus:ring-[#FF7F50]/20"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-[#FF7F50]/50 hover:bg-[#FF7F50]/10 hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
