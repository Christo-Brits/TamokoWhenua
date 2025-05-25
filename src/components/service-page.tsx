import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

type ServicePageProps = {
  title: string
  description: string
  icon: string
  content: React.ReactNode
  relatedServices?: Array<{
    title: string
    href: string
    description: string
  }>
}

export function ServicePage({
  title,
  description,
  icon,
  content,
  relatedServices = []
}: ServicePageProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="inline-block">
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link href="/#services">
              <span className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to all services
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex items-start gap-6 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-3xl flex-shrink-0">
            {icon}
          </div>
          <div>
            <h1 className="mt-0 mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-0 text-xl text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        <div className="prose-lg">
          {content}
        </div>
      </div>

      {relatedServices.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="inline-block">
                    <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                      <Link href={service.href}>
                        <span className="inline-flex items-center group-hover:underline">
                          Learn more
                          <ChevronRight className="ml-1 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
