import Image from "next/image"
import Link from "next/link"
import { Users, Wind, Shield, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { AnimatedSection } from "./animated-section"

interface BusCardProps {
  name: string
  seats: string
  description: string
  image: string
  href: string
  delay?: number
}

export function BusCard({ name, seats, description, image, href, delay = 0 }: BusCardProps) {
  return (
    <AnimatedSection delay={delay} className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent opacity-80" />
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="gold" className="shadow-lg">{seats} Seats</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8 -mt-6 relative z-10 bg-gradient-to-b from-transparent to-deep-navy">
        <div>
          <h3 className="mb-3 font-serif text-2xl font-bold text-cream group-hover:text-gold transition-colors">{name}</h3>
          <p className="mb-6 text-sm leading-relaxed text-cream/70 line-clamp-3">{description}</p>
          <div className="mb-8 grid grid-cols-3 gap-2 border-y border-white/10 py-5 text-xs text-cream/80 font-medium tracking-wide">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Users className="h-5 w-5 text-saffron" />
              <span>Spacious</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center border-x border-white/10 px-1">
              <Wind className="h-5 w-5 text-saffron" />
              <span>AC System</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Shield className="h-5 w-5 text-saffron" />
              <span>Safe Travel</span>
            </div>
          </div>
        </div>
        <Link href={href} className="block w-full mt-auto">
          <Button variant="outline" className="w-full justify-between group-hover:bg-gold group-hover:text-deep-navy group-hover:border-gold transition-all duration-300">
            View Details <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </AnimatedSection>
  )
}
