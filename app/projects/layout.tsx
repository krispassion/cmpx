import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Project Details | Cristina - BIM Coordinator & Architect",
  description: "Detailed information about architectural and BIM projects by Cristina",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Details</h1>
      {children}
    </div>
  )
}

