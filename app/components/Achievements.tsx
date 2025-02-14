import { Award } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 bg-muted p-4 rounded-lg">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">Syka Academy Certification</h3>
              <p className="text-muted-foreground">
                Awarded in 2014 for excellence in architectural studies and BIM proficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

