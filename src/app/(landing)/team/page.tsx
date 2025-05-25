import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MapPin, Users, Mail, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Team - Tamoko Whenua Development Collective",
  description: "Meet the passionate individuals driving our mission for sustainable community development.",
}

const teamMembers = [
  {
    name: "Ben Mahanga",
    role: "Co-Founder & Heavy Equipment Operations Director",
    bio: "Heavy-equipment specialist with 20 years' experience across New Zealand and Western Australia mining. Progressed from D9R dozers to operating the world's largest excavator, Liebherr R9800. Founder of BJ Enterprises Northland Ltd, delivering subdivisions and land-development projects across Northland.",
    image: "/images/Ben-Mahanga.png",
    location: "Whangārei, Northland",
    specialties: ["GPS-Guided Earthworks", "Crew Leadership & Mentoring", "Mine Production Planning", "Heavy Plant Mastery"],
    social: {
      email: "bjenterprises@hotmail.com",
      phone: "+64 210 327 864",
    },
  },
  {
    name: "Christo Brits",
    role: "Co-Founder & Project Management Director", 
    bio: "Seasoned civil-construction and facilities-maintenance leader with 20+ years' experience delivering complex earthworks, roading and industrial infrastructure. Co-founder of InfiniteBuild Solutions Ltd and passionate about training young tradespeople with proven zero-LTI delivery on projects up to NZ$40M.",
    image: "/images/Christo-Brits.png",
    location: "Waiuku, Auckland",
    specialties: ["Project & Construction Management", "H&S & Quality Leadership", "AI/Workflow Automation", "Stakeholder & Iwi Engagement"],
    social: {
      email: "christo.brits81@gmail.com",
      phone: "+64 27 244 1248",
      linkedin: "linkedin.com/in/christobrits",
    },
  },
]

const stats = [
  { label: 'Co-Founders', value: '2', icon: Users },
  { label: 'Combined Experience', value: '40+', icon: Users },
  { label: 'Years Mining Experience', value: '20+', icon: MapPin },
  { label: 'Project Values', value: '$40M+', icon: MapPin },
]

export default function TeamPage() {
  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Our Leadership Team
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Meet the <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Co-Founders</span> Leading Our Vision
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced leaders combining decades of heavy industry expertise with a passion for sustainable community development.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm font-medium mb-2">{member.role}</p>
                  {member.location && (
                    <p className="text-white/70 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </p>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">{member.bio}</p>
                
                {member.specialties && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.slice(0, 3).map((specialty, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center space-x-4">
                  {member.social?.email && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email {member.name}</span>
                      </a>
                    </Button>
                  )}
                  {member.social?.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`https://${member.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Icons.linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/20 p-12 rounded-2xl border border-border/50 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We're building partnerships with contractors, suppliers, and community organizations throughout Northland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get In Touch
                  <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Foundation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to community development and construction excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none text-center p-8 hover:bg-muted/50 transition-colors">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-6 w-6 text-primary text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety Excellence</h3>
              <p className="text-muted-foreground">
                Zero harm culture with proven track record of safe operations across all project scales.
              </p>
            </Card>
            <Card className="border-0 shadow-none text-center p-8 hover:bg-muted/50 transition-colors">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-6 w-6 text-primary text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Partnership</h3>
              <p className="text-muted-foreground">
                Working with whānau, councils, and local organizations to deliver meaningful outcomes.
              </p>
            </Card>
            <Card className="border-0 shadow-none text-center p-8 hover:bg-muted/50 transition-colors">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-6 w-6 text-primary text-2xl">🏗️</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
              <p className="text-muted-foreground">
                Decades of experience delivering projects on time, under budget, with exceptional quality.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
