import Image from "next/image"

interface MentorCardProps {
  mentor: {
    id: number
    name: string
    title: string
    company: string
    skills: string[]
    avatar: string
  }
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#FF7F50]/30 hover:bg-white/[0.05]">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-white/10">
          <Image src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
        </div>

        <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
        <p className="mt-1 text-sm text-gray-400">
          {mentor.title} at {mentor.company}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {mentor.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-[#FF7F50]/10 px-3 py-1 text-xs font-medium text-[#FF7F50]">
              {skill}
            </span>
          ))}
        </div>

        <button className="mt-6 w-full rounded-lg border border-white/10 bg-transparent py-2.5 text-sm font-medium text-white transition-all hover:border-[#FF7F50] hover:bg-[#FF7F50] hover:text-white">
          View Profile
        </button>
      </div>
    </div>
  )
}
