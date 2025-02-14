import { Badge } from "@/components/ui/badge"

const skills = [
  "Revit",
  "AutoCAD",
  "Navisworks",
  "ArchiCAD",
  "SketchUp",
  "BIM 360",
  "Grasshopper",
  "Lumion",
  "Adobe Creative Suite",
  "Project Management",
  "Sustainable Design",
  "Building Codes & Regulations",
  "BIM Coordination",
  "Architectural Design",
  "Construction Documentation",
  "3D Modeling",
  "Rendering",
  "Space Planning",
  "Site Analysis",
  "Energy Modeling",
  "Cost Estimation",
  "MEP Systems",
  "Building Performance Simulation",
  "Augmented Reality",
  "Parametric Design",
  "Facility Management",
  "Building Information Management",
  "Clash Detection",
  "4D Scheduling",
  "5D Cost Planning",
  "Laser Scanning",
  "Point Cloud Processing",
  "Photogrammetry",
]

// Remove duplicates and sort alphabetically
const uniqueSkills = [...new Set(skills)].sort((a, b) => a.localeCompare(b))

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {uniqueSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

