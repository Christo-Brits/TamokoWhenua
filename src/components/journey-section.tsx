import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

type JourneyStep = {
  title: string
  maoriTitle: string
  description: string
  icon: React.ReactNode
}

export function JourneySection() {
  const steps: JourneyStep[] = [
    {
      title: "Discovery",
      maoriTitle: "Whanaungatanga",
      description: "We meet with clients and community to understand needs, aspirations, and the land's story.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">👥</div>
    },
    {
      title: "Planning & Design",
      maoriTitle: "Whakamahere",
      description: "Our experts shape practical, culturally aligned solutions—combining civil engineering, environmental guardianship, and client goals.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">🗺️</div>
    },
    {
      title: "Community Engagement",
      maoriTitle: "Hono Hapori",
      description: "We consult with whānau, hapū, councils, and stakeholders—ensuring everyone's voice is heard and valued.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">🤝</div>
    },
    {
      title: "Construction & Delivery",
      maoriTitle: "Hanga",
      description: "Skilled Māori-led teams deliver safe, quality civil works—from earthworks to infrastructure—with pride and accountability.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">🏗️</div>
    },
    {
      title: "Training & Workforce Development",
      maoriTitle: "Whakangungu",
      description: "We actively involve and train local rangatahi, creating new pathways in the trades and building future leaders.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">📚</div>
    },
    {
      title: "Legacy & Aftercare",
      maoriTitle: "Tuku Iho",
      description: "We ensure every project leaves a positive legacy—supporting land, people, and ongoing community wellbeing.",
      icon: <div className="h-6 w-6 text-primary text-lg flex items-center justify-center">🌱</div>
    }
  ]

  return (
    <Section id="journey" className="bg-muted/20 py-16">
      <Container>
        <SectionHeader
          title="Our Journey: Building Lasting Impact"
          description="Every Tamoko Whenua project is a partnership with our clients, communities, and the land. Our kaupapa shapes a transparent, collaborative journey—ensuring every step delivers quality, sustainability, and benefits for Northland whānau."
          className="text-center max-w-4xl mx-auto mb-12"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Desktop timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-background border-4 border-primary absolute left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:left-auto md:right-auto md:relative md:flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Mobile timeline dot */}
                <div className="md:hidden w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Step card */}
                <div className="w-full md:w-1/2 md:px-8">
                  <Card className="h-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl">
                          {step.title}
                          <span className="block text-sm font-normal text-muted-foreground">
                            {step.maoriTitle}
                          </span>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
