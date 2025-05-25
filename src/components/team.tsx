import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Button } from "./ui/button"
import Link from "next/link"
import { Linkedin, Mail, Twitter } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  socials?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Co-Founder & CEO",
      image: "/team/alex-johnson.jpg",
      bio: "Alex has over 15 years of experience in sustainable development and community engagement.",
      socials: {
        linkedin: "#",
        twitter: "#",
        email: "alex@example.com"
      }
    },
    {
      name: "Māia Williams",
      role: "Head of Community Development",
      image: "/team/maia-williams.jpg",
      bio: "Māia specializes in indigenous community development and cultural preservation.",
      socials: {
        linkedin: "#",
        email: "maia@example.com"
      }
    },
    {
      name: "David Chen",
      role: "Technical Director",
      image: "/team/david-chen.jpg",
      bio: "David leads our technical initiatives with a focus on sustainable technology solutions.",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Thompson",
      role: "Operations Manager",
      image: "/team/sarah-thompson.jpg",
      bio: "Sarah ensures our projects run smoothly and efficiently across all departments.",
      socials: {
        linkedin: "#",
        email: "sarah@example.com"
      }
    }
  ]

  return (
    <section 
      id="team" 
      className="py-12 scroll-mt-16"
      aria-labelledby="team-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="team-heading" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate individuals dedicated to making a difference in our communities
          </p>
        </div>

        <div 
          role="list" 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
              role="listitem"
              tabIndex={0}
            >
              <div className="relative pt-8 px-6">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-background bg-background shadow-lg">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src={member.image} 
                      alt={`${member.name}, ${member.role}`} 
                      width={80}
                      height={80}
                    />
                    <AvatarFallback className="text-xl font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader className="pt-12 pb-2 px-0 items-center text-center">
                  <CardTitle className="text-xl font-semibold">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
              </div>
              <CardContent className="pb-6 px-6 text-center">
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </CardContent>
              {member.socials && (
                <CardFooter className="pt-0 px-6 pb-6 justify-center gap-3">
                  {member.socials.linkedin && (
                    <div className="inline-flex">
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  )}
                  {member.socials.twitter && (
                    <div className="inline-flex">
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                        aria-label={`Follow ${member.name} on Twitter`}
                      >
                        <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  )}
                  {member.socials.email && (
                    <div className="inline-flex">
                      <Button 
                        asChild 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-full hover:bg-primary/10 hover:text-primary"
                        aria-label={`Email ${member.name}`}
                      >
                        <Link href={`mailto:${member.socials.email}`}>
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
