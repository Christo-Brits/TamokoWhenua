"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
            <PenTool className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Blog Coming Soon
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're preparing to share stories, insights, and updates from our journey building sustainable communities across Northland.
          </p>
        </div>

        {/* Status Card */}
        <Card className="mb-12 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Content in Development</h3>
                <p className="text-muted-foreground mb-4">
                  As a newly registered collective, we're focusing on delivering our first projects and building meaningful partnerships. Our blog will launch once we have real stories and insights to share from our work in the field.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">What we'll be writing about:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Project updates and community impact stories</li>
                    <li>• Industry insights from our experienced team</li>
                    <li>• Apprentice training program developments</li>
                    <li>• Partnership announcements and collaborations</li>
                    <li>• Safety innovations and best practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Strategy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                Planned Content Types
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Project Spotlights:</strong> Behind-the-scenes of our civil construction work</li>
                <li>• <strong>Team Stories:</strong> Meet our operators and their expertise</li>
                <li>• <strong>Industry Insights:</strong> Heavy equipment and construction trends</li>
                <li>• <strong>Community Impact:</strong> How our work benefits Northland</li>
                <li>• <strong>Safety Focus:</strong> Best practices and innovations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Authentic stories from real projects</li>
                <li>• Practical insights for the industry</li>
                <li>• Community-focused perspectives</li>
                <li>• Educational content for aspiring trades people</li>
                <li>• Transparent updates on our progress</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Stay Connected */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/20 border-border/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Want to be notified when we publish our first blog posts? Get in touch and we'll keep you updated on our progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Updates
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Content */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">In the Meantime</h3>
          <p className="text-muted-foreground mb-6">
            Learn more about our team, services, and approach to community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/team">Meet Our Team</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/roadmap">Our Roadmap</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
