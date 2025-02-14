import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "sustainable-office",
    title: "Sustainable Office Complex",
    description: "A LEED-certified office building with integrated BIM workflow for efficient design and construction",
    technologies: ["Revit", "Navisworks", "AutoCAD"],
  },
  {
    id: "historic-renovation",
    title: "Historic Building Renovation",
    description:
      "BIM-based restoration project of a 19th-century landmark, combining preservation with modern amenities",
    technologies: ["ArchiCAD", "BIMx", "Lumion"],
  },
  {
    id: "smart-city",
    title: "Smart City Infrastructure",
    description: "Comprehensive BIM model for urban planning, integrating transportation, utilities, and public spaces",
    technologies: ["Civil 3D", "InfraWorks", "ArcGIS"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Link href={`/projects/${project.id}`} passHref>
                <Button>View Project Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

