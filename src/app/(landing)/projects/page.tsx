import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Hammer, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects Coming Soon | Tamoko Whenua Development Collective",
  description: "Our project showcase is coming soon. We're currently building our portfolio as we deliver our first community projects.",
}

export default function ProjectsPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
            <Hammer className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Projects Coming Soon
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're building our project portfolio as we deliver our first community development initiatives across Northland.
          </p>
        </div>

        {/* Status Card */}
        <Card className="mb-12 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Currently in Development</h3>
                <p className="text-muted-foreground mb-4">
                  As a newly registered collective, we're actively pursuing our first major projects. Our experienced team is ready to deliver high-quality civil construction, earthworks, and community development initiatives.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">What we're working on:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Establishing partnerships with councils and community organizations</li>
                    <li>• Developing our contractor collective network</li>
                    <li>• Securing our first major civil construction contracts</li>
                    <li>• Building our apprentice training programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Upcoming Project Types</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Civil construction and earthworks</li>
                <li>• Subdivision and roading projects</li>
                <li>• Council infrastructure contracts</li>
                <li>• Community facility development</li>
                <li>• Trades training initiatives</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Our Commitment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Zero harm safety culture</li>
                <li>• Local workforce development</li>
                <li>• Community partnership approach</li>
                <li>• Quality delivery under budget</li>
                <li>• Environmental kaitiakitanga</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/20 rounded-2xl p-8 text-center border border-border/50">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
            <p className="text-muted-foreground mb-6">
              Have a project in mind? We're ready to discuss how our experienced team can deliver your civil construction and community development needs.
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
