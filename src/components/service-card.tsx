import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    featured?: boolean
    features: string[]
  }
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card 
      className={`group relative h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 ${
        service.featured ? 'md:col-span-2 lg:col-span-3 border-primary/20 bg-primary/5' : ''
      }`}
      aria-labelledby={`service-${index}-title`}
    >
      <CardHeader className="pb-3">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
          service.featured ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-foreground/80'
        }`}>
          {service.icon}
        </div>
        <CardTitle 
          id={`service-${index}-title`}
          className={`mt-4 text-xl ${service.featured ? 'text-2xl' : ''}`}
        >
          {service.title}
        </CardTitle>
        <CardDescription className={`${service.featured ? 'text-base' : ''}`}>
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Button 
            asChild 
            variant={service.featured ? 'default' : 'outline'} 
            className="w-full group"
            aria-label={`Learn more about ${service.title}`}
          >
            <Link href={service.href}>
              <span className="flex items-center">
                Learn more about {service.title.toLowerCase().split(' ')[0]}
                <span className="ml-2 inline-flex items-center transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </span>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
