import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Contact Us - Tamoko Whenua Development Collective",
  description: "Get in touch with our team. We'd love to hear from you.",
}

const contactMethods = [
  {
    icon: Icons.mail,
    title: "Email Us",
    description: "We'll respond as soon as possible",
    details: "info@tamokowhenua.co.nz",
    link: "mailto:info@tamokowhenua.co.nz",
  },
  {
    icon: Icons.phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm",
    details: "021 953 160",
    link: "tel:+64021953160",
  },
  {
    icon: Icons.mapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    details: "Whangārei, Northland",
    link: "https://maps.google.com",
  },
]

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have questions or want to work with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="text-muted-foreground">
                Fill out the form and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <a
                        href={method.link}
                        className="mt-1 block text-sm font-medium hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.details}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Office Hours */}
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-lg font-medium">Office Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Icons.twitter, label: "Twitter", href: "#" },
                  { icon: Icons.facebook, label: "Facebook", href: "#" },
                  { icon: Icons.instagram, label: "Instagram", href: "#" },
                  { icon: Icons.linkedin, label: "LinkedIn", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-lg border">
          <div className="aspect-video w-full bg-muted">
            <div className="flex h-full items-center justify-center">
              <Icons.mapPin className="h-12 w-12 text-muted-foreground/30" />
              <span className="sr-only">Map location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
