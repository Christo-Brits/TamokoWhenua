import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { ArrowRight, Check, Clock, MapPin, Users, Leaf } from "lucide-react"

export const metadata = {
  title: "Our Roadmap - Tamoko Whenua Development Collective",
  description: "Explore our journey and future plans for community development and sustainability initiatives.",
}

const timeline = [
  {
    year: "Late 2024",
    title: "Research & Planning Phase",
    description: "Conducted comprehensive community needs assessments and developed our strategic approach to sustainable community development.",
    icon: <Icons.layers className="h-5 w-5" />,
    status: "completed",
    color: "bg-blue-500",
    highlights: [
      "Conducted community surveys",
      "Developed strategic framework",
      "Identified key partnerships"
    ]
  },
  {
    year: "May 2025",
    title: "Company Registration",
    description: "Officially registered Tamoko Whenua Development Collective and established our organizational structure.",
    icon: <Users className="h-5 w-5" />,
    status: "completed",
    color: "bg-green-500",
    highlights: [
      "Company officially registered",
      "Legal structure established",
      "Foundation team assembled"
    ]
  },
  {
    year: "Mid 2025",
    title: "Initial Community Engagement",
    description: "Launching our first community outreach programs and establishing key partnerships with local organizations.",
    icon: <Users className="h-5 w-5" />,
    status: "in-progress",
    color: "bg-yellow-500",
    highlights: [
      "First community programs launching",
      "Building local partnerships",
      "Engaging with whānau and communities"
    ]
  },
  {
    year: "Late 2025",
    title: "Sustainable Infrastructure Projects",
    description: "Beginning implementation of sustainable infrastructure projects in partner communities with focus on environmental impact.",
    icon: <Leaf className="h-5 w-5" />,
    status: "planned",
    color: "bg-purple-500",
    highlights: [
      "Infrastructure project development",
      "Local workforce engagement",
      "Renewable energy initiatives"
    ]
  },
  {
    year: "2026",
    title: "Education Initiatives",
    description: "Expanding our educational programs and training workshops to empower community members with new skills.",
    icon: <Icons.graduationCap className="h-5 w-5" />,
    status: "planned",
    color: "bg-purple-500",
    highlights: [
      "Vocational training programs",
      "Environmental education",
      "Digital literacy courses"
    ]
  },
  {
    year: "2027",
    title: "Regional Expansion",
    description: "Scaling our successful models to additional communities throughout Northland to maximize our impact.",
    icon: <MapPin className="h-5 w-5" />,
    status: "planned",
    color: "bg-pink-500",
    highlights: [
      "Expand to additional regions",
      "Replicate successful programs",
      "Local leadership development"
    ]
  },
  {
    year: "2028+",
    title: "Sustainable Impact & Legacy",
    description: "Establishing self-sustaining community development models that create lasting positive change for future generations.",
    icon: <MapPin className="h-5 w-5" />,
    status: "future",
    color: "bg-indigo-500",
    highlights: [
      "Self-sustaining projects",
      "Community ownership models",
      "Long-term impact assessment"
    ]
  },
]

export default function RoadmapPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      case "planned":
        return "bg-yellow-500"
      default:
        return "bg-gray-300"
    }
  }

  function StatusBadge({ status }: { status: string }) {
    const getStatusText = (status: string) => {
      switch (status) {
        case "completed":
          return "✓ Completed"
        case "in-progress":
          return "⏳ In Progress"
        case "planned":
          return "📅 Planned"
        default:
          return "🔮 Future"
      }
    }

    const getStatusColor = (status: string) => {
      switch (status) {
        case "completed":
          return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        case "in-progress":
          return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
        case "planned":
          return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
        default:
          return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      }
    }
    
    const statusText = getStatusText(status)
    const statusColor = getStatusColor(status)
    
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}>
        {statusText}
      </span>
    )
  }

  return (
    <div className="container py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Our Roadmap
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey towards sustainable community development and future goals.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background z-10" />
                
                {/* Year */}
                <div className="hidden md:flex w-1/4 items-center justify-center">
                  <span className="text-lg font-medium text-muted-foreground">{item.year}</span>
                </div>
                
                {/* Card */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                  <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <div className={`h-2 ${item.color}`} />
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                        <StatusBadge status={item.status} />
                      </div>
                      <div className="md:hidden text-sm text-muted-foreground">
                        {item.year}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                                <Check className="h-5 w-5" />
                              </div>
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for even/odd alignment */}
                <div className="hidden md:block w-1/4" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/20 p-8 rounded-2xl border border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-muted-foreground mb-6">
              Be part of our mission to create sustainable communities and make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Involved
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      </div>
    </div>
  )
}
