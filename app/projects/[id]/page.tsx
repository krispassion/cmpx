import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const projects = [
  {
    id: "sustainable-office",
    title: "Sustainable Office Complex",
    description: "A LEED-certified office building with integrated BIM workflow for efficient design and construction",
    technologies: ["Revit", "Navisworks", "AutoCAD"],
    fullDescription:
      "This state-of-the-art office complex showcases the seamless integration of sustainable design principles and advanced BIM methodologies. The project aimed to create a workspace that not only minimizes environmental impact but also enhances occupant well-being and productivity. Through the use of Revit, we developed a comprehensive 3D model that facilitated collaborative decision-making among architects, engineers, and sustainability consultants. Navisworks was instrumental in clash detection and construction simulation, significantly reducing on-site conflicts and optimizing the construction schedule. The final design achieved LEED Platinum certification, featuring energy-efficient systems, abundant natural light, and green spaces that promote a healthy work environment.",
    challenges: [
      "Integrating complex MEP systems within a constrained structural grid",
      "Balancing energy efficiency with occupant comfort in a glass-heavy design",
      "Coordinating with multiple stakeholders to ensure LEED certification requirements were met",
    ],
    solutions: [
      "Utilized Revit's parametric modeling capabilities to optimize MEP routing",
      "Employed advanced energy modeling to fine-tune the building envelope and HVAC systems",
      "Implemented regular BIM coordination meetings and used Navisworks for virtual walk-throughs with stakeholders",
    ],
    outcomes: [
      "30% reduction in energy consumption compared to baseline",
      "95% of construction waste diverted from landfills",
      "Increased productivity and satisfaction reported by building occupants",
    ],
  },
  // Add other projects here...
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <div className="mb-6">
        <Image
          src={`/placeholder.svg?height=400&width=800`}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      <p className="mb-6">{project.fullDescription}</p>
      <h3 className="text-xl font-semibold mb-2">Challenges</h3>
      <ul className="list-disc pl-5 mb-4">
        {project.challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Solutions</h3>
      <ul className="list-disc pl-5 mb-4">
        {project.solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-2">Outcomes</h3>
      <ul className="list-disc pl-5 mb-4">
        {project.outcomes.map((outcome, index) => (
          <li key={index}>{outcome}</li>
        ))}
      </ul>
    </div>
  )
}

