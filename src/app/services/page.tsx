import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Home, Users, Lightbulb, Leaf } from "lucide-react"
import { Footpath, Earthworks, Roading, Drainage, Wall } from "@/components/icons"
import { TeamSection } from "@/components/team-section"
import { ServiceCard } from "@/components/service-card"

export const metadata = {
  title: "Our Services - Tamoko Whenua Development Collective",
  description: "Māori-led civil construction, earthworks, and workforce development services across Northland, New Zealand.",
}

const services = [
  {
    title: "Footpath Construction & Renewals",
    description: "Safe, accessible pathways for our communities across Northland—built to last.",
    icon: <Footpath className="h-6 w-6" />,
    href: "/services/footpaths",
    color: "from-blue-500 to-blue-600",
    features: [
      "New footpath construction",
      "Footpath renewals and upgrades",
      "Accessibility improvements",
      "Urban walkway development"
    ]
  },
  {
    title: "Earthworks & Site Levelling",
    description: "Preparing whenua for new homes, parks, and commercial development.",
    icon: <Earthworks className="h-6 w-6" />,
    href: "/services/earthworks",
    color: "from-amber-500 to-amber-600",
    features: [
      "Bulk earthworks",
      "Site levelling and preparation",
      "Cut and fill operations",
      "Land reclamation"
    ]
  },
  {
    title: "Minor Roading & Pavement Repairs",
    description: "Keeping Northland connected with reliable, cost-effective roading and maintenance.",
    icon: <Roading className="h-6 w-6" />,
    href: "/services/roading",
    color: "from-gray-500 to-gray-700",
    features: [
      "Local road maintenance",
      "Pavement repairs",
      "Seal extensions",
      "Pothole repairs"
    ]
  },
  {
    title: "Drainage & Utilities Trenches",
    description: "Smart, sustainable solutions for water, stormwater, and underground utilities.",
    icon: <Drainage className="h-6 w-6" />,
    href: "/services/drainage",
    color: "from-sky-500 to-sky-600",
    features: [
      "Stormwater drainage systems",
      "Wastewater solutions",
      "Utility trenching",
      "Culvert installation"
    ]
  },
  {
    title: "Subdivisions",
    description: "Supporting property development and growth for whānau, businesses, and local councils.",
    icon: <Home className="h-6 w-6" />,
    href: "/services/subdivisions",
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Residential subdivisions",
      "Rural land development",
      "Consent processing",
      "Infrastructure installation"
    ]
  },
  {
    title: "Retaining Walls",
    description: "Protecting land and infrastructure with engineered, visually appealing retaining solutions.",
    icon: <Wall className="h-6 w-6" />,
    href: "/services/retaining-walls",
    color: "from-stone-500 to-stone-700",
    features: [
      "Timber retaining walls",
      "Concrete block walls",
      "Gabion walls",
      "Engineering design"
    ]
  },
  {
    title: "Apprenticeship & Workforce Development",
    description: "Creating real training and employment pathways for local rangatahi and whānau.",
    icon: <Users className="h-6 w-6" />,
    href: "/services/workforce-development",
    color: "from-primary to-primary/80",
    featured: true,
    features: [
      "Trade apprenticeships",
      "Workplace training",
      "Mentorship programs",
      "Career pathway development"
    ]
  }
]

export default function ServicesPage() {
  // Simulate loading state for demonstration
  const isLoading = false; // Set to false to see the actual content

  return (
    <div className="py-12 md:py-16">
      <Container className="max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Our Core Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive civil construction and development solutions across Northland, delivered with Māori values and local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show loading message
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">Loading services...</p>
            </div>
          ) : (
            // Render actual service cards
            services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                index={index}
              />
            ))
          )}
        </div>

        <section className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Need help with a specific project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to discuss your civil construction or development needs in Northland.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="group">
                  Get a Free Quote
                  <span className="ml-2 inline-flex items-center transition-transform group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about" className="group">
                  Learn About Our Process
                  <span className="ml-2 inline-flex items-center transition-transform group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We're dedicated to delivering exceptional results through innovation, sustainability, and quality workmanship.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 shadow-sm border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and methods to deliver better outcomes for our clients and communities.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to environmentally responsible practices that protect our whenua for future generations.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-sm border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                We take pride in our workmanship and stand behind every project we deliver.
              </p>
            </div>
          </div>
        </section>

        <TeamSection />
      </Container>
    </div>
  )
}


