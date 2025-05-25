import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
// Remove the import as we'll use the SectionHeader directly
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  quote: string
  author: string
  role: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Tamoko Whenua brought deep respect for our land and people to every stage of the project. We felt heard and valued.",
    author: "Miriama H.",
    role: "Community Chair",
    location: "Far North"
  },
  {
    quote: "Their team delivered top-quality earthworks and were a pleasure to work with—professional, responsive, and true to their word.",
    author: "Tom R.",
    role: "Business Owner",
    location: "Whangārei"
  },
  {
    quote: "It's inspiring to see Māori rangatahi learning on the job and building real careers. Tamoko Whenua are making a real difference for our community.",
    author: "Hera T.",
    role: "Education Partner",
    location: "Kaipara"
  }
]

export function TestimonialsSection() {
  return (
    <Section className="py-16 bg-muted/10">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground">
            We're proud to work alongside whānau, councils, and businesses across Northland. Here's what some of our partners and clients have to say about the impact of Tamoko Whenua's kaupapa-driven approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col transition-all hover:shadow-lg">
              <CardContent className="p-6 flex-1 flex flex-col">
                <blockquote className="flex-1">
                  <p className="text-lg text-foreground/90 mb-6 italic">"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-auto pt-4 border-t">
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
