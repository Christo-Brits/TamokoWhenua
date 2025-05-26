import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Clock, ExternalLink, ArrowRight, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources Coming Soon | Tamoko Whenua Development Collective",
  description: "We're preparing comprehensive guides and resources for our clients, trainees, and partners.",
}

const plannedResources = [
  {
    title: "Site Safety Guidelines",
    description: "Comprehensive workplace safety standards and procedures for all civil construction work.",
    type: "Safety Documentation",
    icon: "🛡️"
  },
  {
    title: "Training Program Information",
    description: "Details about our apprenticeship and trades training opportunities.",
    type: "Education Materials",
    icon: "📚"
  },
  {
    title: "Partnership Guidelines",
    description: "Information for organizations interested in partnering with us.",
    type: "Business Information",
    icon: "🤝"
  },
  {
    title: "Community Development Guides",
    description: "Resources for community groups and councils working on development projects.",
    type: "Community Resources",
    icon: "🏘️"
  }
]

const externalResources = [
  {
    title: "SiteWise Safety Guidelines",
    description: "Official health and safety guidelines for contractors and workers.",
    url: "https://www.sitesafe.org.nz/",
    organization: "Site Safe NZ"
  },
  {
    title: "Civil Contractors New Zealand",
    description: "Industry association resources and best practices.",
    url: "https://www.civilcontractors.co.nz/",
    organization: "CCNZ"
  },
  {
    title: "Te Puni Kōkiri Business Support",
    description: "Support and funding opportunities for Māori businesses.",
    url: "https://www.tpk.nz/",
    organization: "Te Puni Kōkiri"
  },
  {
    title: "Northland Regional Council",
    description: "Regional planning and development information.",
    url: "https://www.nrc.govt.nz/",
    organization: "NRC"
  }
]

export default function ResourcesPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Resources & Information
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're developing comprehensive resources for our clients, trainees, and partners.
          </p>
        </div>

        {/* Status Notice */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Resources in Development</h3>
                <p className="text-muted-foreground mb-4">
                  As we establish our operations and complete our first projects, we're creating comprehensive resources and guides. These will be based on real experience and actual procedures rather than generic templates.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Coming soon:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Project-specific safety documentation</li>
                    <li>• Training program applications and information</li>
                    <li>• Partnership and collaboration guides</li>
                    <li>• Community engagement resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planned Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Resources in Development</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {plannedResources.map((resource, index) => (
              <Card key={index} className="border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{resource.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                          In Development
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      <p className="text-xs font-medium text-yellow-700 dark:text-yellow-400">
                        {resource.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current External Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Helpful External Resources</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {externalResources.map((resource, index) => (
              <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{resource.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">
                      {resource.organization}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        Visit Site
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Card className="mb-12 border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 text-primary mr-2" />
              Resource Development Timeline
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Phase 1 (Next 3 months)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Safety documentation and procedures</li>
                  <li>• Basic training program information</li>
                  <li>• Partnership inquiry guidelines</li>
                  <li>• Contact and application forms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Phase 2 (3-6 months)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Comprehensive training curriculum</li>
                  <li>• Project case studies and examples</li>
                  <li>• Community development guides</li>
                  <li>• Industry best practice documents</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/20 rounded-2xl p-8 text-center border border-border/50">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Need Information Now?</h2>
            <p className="text-muted-foreground mb-6">
              While we're developing our resource library, our team is available to answer questions and provide information about our services, training programs, and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/services" className="flex items-center gap-2">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
