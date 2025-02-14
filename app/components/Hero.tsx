import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Cristina</h1>
      <p className="text-xl mb-4">BIM Coordinator & Architect | Bridging Design and Technology</p>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Known for my patience, thoughtfulness, and meticulous attention to detail, I thrive on solving complex problems
        and creating innovative solutions in the world of architecture and BIM.
      </p>
      <Link href="#projects" passHref>
        <Button>
          Explore My Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </section>
  )
}

