import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Cristina | BIM & Architecture
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#projects">
                <Button variant="ghost">Projects</Button>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <Button variant="ghost">Expertise</Button>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <Button variant="ghost">Contact</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

