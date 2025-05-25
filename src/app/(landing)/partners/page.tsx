"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Building, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const applicationsPending = [
  {
    name: "SiteWise Certification",
    description: "Currently applying for health and safety pre-qualification certification to demonstrate our commitment to industry best practices.",
    type: "Safety Certification",
    status: "Application in Progress",
    icon: "🛡️"
  },
  {
    name: "Amotai Registration",
    description: "Applying to join this supplier diversity network that connects Māori and Pasifika businesses with procurement opportunities.",
    type: "Business Network",
    status: "Application in Progress", 
    icon: "🤝"
  }
]

export default function PartnersPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Building Our Network
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Establishing strategic partnerships with councils, iwi, industry associations, and local organizations to deliver exceptional outcomes for Northland communities.
          </p>
        </div>

        {/* Current Status Notice */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Actively Building Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Keep an eye on this page, as we are currently negotiating several key partnerships with councils, local contractors, and community organizations throughout Northland. Our established relationships and proven track record are opening doors to exciting collaborative opportunities.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Currently pursuing partnerships with:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Northland councils for civil infrastructure contracts</li>
                    <li>• Local iwi and hapū for community development projects</li>
                    <li>• Industry training organizations for apprenticeship programs</li>
                    <li>• Equipment suppliers and subcontractor networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications in Progress */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Applications in Progress</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {applicationsPending.map((application, index) => (
              <Card key={index} className="border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-900/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{application.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{application.name}</h3>
                        <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                          {application.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{application.description}</p>
                      <p className="text-xs font-medium text-yellow-700 dark:text-yellow-400">
                        {application.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Strategy */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-sm text-center p-6">
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Council Partnerships</h3>
            <p className="text-sm text-muted-foreground">
              Building relationships with Northland councils to deliver civil infrastructure and community development projects.
            </p>
          </Card>
          
          <Card className="border-0 shadow-sm text-center p-6">
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="h-6 w-6 text-primary text-lg">🏛️</div>
            </div>
            <h3 className="text-lg font-semibold mb-3">Iwi Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Partnering with local iwi and hapū to ensure cultural values guide our community development approach.
            </p>
          </Card>
          
          <Card className="border-0 shadow-sm text-center p-6">
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Industry Networks</h3>
            <p className="text-sm text-muted-foreground">
              Connecting with contractors, suppliers, and training organizations to build a strong collaborative ecosystem.
            </p>
          </Card>
        </div>

        {/* Future Partnership Areas */}
        <Card className="mb-12 border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              Strategic Partnership Roadmap
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Short-term Goals (Next 6 months)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Complete SiteWise safety certification</li>
                  <li>• Finalize Amotai network registration</li>
                  <li>• Establish council contractor relationships</li>
                  <li>• Build local subcontractor network</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Long-term Vision (6-18 months)</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Formal iwi partnership agreements</li>
                  <li>• Industry association memberships</li>
                  <li>• Training provider partnerships</li>
                  <li>• Equipment supplier relationships</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/20 rounded-2xl p-8 text-center border border-border/50">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
            <p className="text-muted-foreground mb-6">
              Interested in partnering with Tamoko Whenua Development Collective? We're actively seeking collaboration opportunities with councils, contractors, suppliers, and community organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
