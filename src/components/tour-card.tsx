import Image from "next/image"
import { Clock, MapPin, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { AnimatedSection } from "./animated-section"

interface TourCardProps {
  title: string
  duration: string
  location: string
  description: string
  image: string
  category: string
  delay?: number
}

export function TourCard({ title, duration, location, description, image, category, delay = 0 }: TourCardProps) {
  return (
    <AnimatedSection delay={delay} className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-deep-navy border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,168,76,0.25)] hover:border-gold/30">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-black/20" />
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary" className="shadow-lg backdrop-blur-md bg-saffron/90 text-deep-navy">{category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8 -mt-8 relative z-10 bg-gradient-to-b from-transparent to-deep-navy">
        <div>
          <div className="mb-4 flex flex-wrap gap-4 text-xs font-semibold tracking-wide text-cream/90">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5"><Clock className="h-3.5 w-3.5 text-gold" /> {duration}</div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5"><MapPin className="h-3.5 w-3.5 text-gold" /> {location}</div>
          </div>
          <h3 className="mb-4 font-serif text-2xl font-bold text-cream group-hover:text-gold transition-colors">{title}</h3>
          <p className="mb-8 text-sm leading-relaxed text-cream/70 line-clamp-3">{description}</p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <Button href="tel:+919440440969" variant="gold" className="w-full justify-between text-sm group-hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300">
            Book (Y.N. Prasad) <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="tel:+919440737138" variant="outline" className="w-full justify-between text-sm border-gold/50 text-cream hover:text-deep-navy group-hover:border-gold transition-all duration-300">
            Book (Y.N. Kumar) <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
