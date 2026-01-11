import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustedCompanies } from "@/components/trusted-companies"
import { MentorGrid } from "@/components/mentor-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedCompanies />
        <MentorGrid />
      </main>
    </div>
  )
}
