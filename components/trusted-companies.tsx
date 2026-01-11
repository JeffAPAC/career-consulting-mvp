import { Hexagon, Circle, Triangle, Square, Pentagon, Octagon } from "lucide-react"

const companies = [
  { icon: Hexagon, name: "TechCorp" },
  { icon: Circle, name: "DataFlow" },
  { icon: Triangle, name: "CloudScale" },
  { icon: Square, name: "DevStack" },
  { icon: Pentagon, name: "InnovateLabs" },
  { icon: Octagon, name: "SysCore" },
]

export function TrustedCompanies() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-12">
      <div className="container mx-auto">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-500">
          Our mentors work at top companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-400"
            >
              <company.icon className="h-8 w-8" strokeWidth={1} />
              <span className="hidden text-sm font-medium md:inline">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
