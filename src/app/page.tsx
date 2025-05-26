import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { JourneySection } from "@/components/journey-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroSection />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <Container className="w-full">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-left max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-black/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-6 animate-fade-in">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Māori-Led Civil Construction & Trades Training
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
                  <span className="sr-only">Tamoko Whenua Development Collective - </span>
                  Empowering Northland
                  <span className="block mt-3 text-primary">
                    Māori-Led Civil Works & Trades Training
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-8 animate-fade-in">
                  Building Futures on Solid Ground
                </h2>
                
                <p className="text-lg leading-8 text-white/90 mb-10 animate-fade-in max-w-3xl">
                  Tamoko Whenua Development Collective delivers high-quality civil construction, earthworks, and site preparation services throughout Northland. As a Māori-led collective, we combine decades of local expertise with a commitment to community uplift, environmental kaitiakitanga, and training the next generation of tradespeople.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <Button size="lg" asChild className="group bg-primary hover:bg-primary/90">
                    <Link href="/contact" className="flex items-center gap-2 text-white">
                      Partner with Us
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group bg-transparent text-white border-white/20 hover:bg-white/10">
                    <Link href="/services" className="flex items-center gap-2">
                      Our Services
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
