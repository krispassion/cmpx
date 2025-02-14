import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:cristina@bimarchitect.com">cristina@bimarchitect.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>New York City, USA</span>
              </li>
            </ul>
          </div>
          <div>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Project Type (e.g., Residential, Commercial, Renovation)" />
              <Textarea placeholder="Tell me about your project or inquiry" required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

