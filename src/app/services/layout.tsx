import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Tamoko Whenua Development Collective',
  description: 'Māori-led civil construction, earthworks, and workforce development services across Northland, New Zealand.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Header */}
      <Section className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive civil construction and development solutions across Northland, delivered with Māori values and local expertise.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="flex-1 py-12">
        <Container>
          {children}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6">
              Ready to discuss your project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to learn how we can bring your vision to life with our expert services.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact" className="group">
                Get in Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}
