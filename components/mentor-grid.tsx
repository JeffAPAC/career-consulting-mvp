import { MentorCard } from "./mentor-card"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Engineer",
    company: "TechCorp",
    skills: ["React", "TypeScript", "Node.js"],
    avatar: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Product Manager",
    company: "DataFlow",
    skills: ["Strategy", "Agile", "Analytics"],
    avatar: "/professional-man-portrait.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Data Scientist",
    company: "CloudScale",
    skills: ["Python", "ML", "SQL"],
    avatar: "/professional-woman-scientist.png",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Tech Lead",
    company: "DevStack",
    skills: ["System Design", "Java", "AWS"],
    avatar: "/professional-engineer.png",
  },
]

export function MentorGrid() {
  return (
    <section id="mentors" className="px-4 py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Explore Top Mentors</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  )
}
