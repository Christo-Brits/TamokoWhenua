'use client';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Section } from "@/components/ui/section"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Your message has been sent! We\'ll get back to you soon.' 
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="py-16 bg-muted/20">
      <Container>
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Get in Touch / Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground">
            We'd love to kōrero about your next project, partnership, or idea. Reach out today to connect with Tamoko Whenua Development Collective—whether you're a whānau, council, business, or community group, our team is here to help Northland thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="h-full border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Our Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 text-primary">
                    <div className="h-6 w-6 text-lg flex items-center justify-center">📞</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+64021953160" className="hover:text-primary transition-colors">
                        021 953 160
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 text-primary">
                    <div className="h-6 w-6 text-lg flex items-center justify-center">📧</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@tamokowhenua.co.nz" className="hover:text-primary transition-colors">
                        info@tamokowhenua.co.nz
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 text-primary">
                    <div className="h-6 w-6 text-lg flex items-center justify-center">📍</div>
                  </div>
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-muted-foreground">Whangārei, Northland</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="name">Name *</Label>
                      {errors.name && (
                        <span className="text-xs text-red-500">{errors.name}</span>
                      )}
                    </div>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className={cn(errors.name && "border-red-500")}
                      disabled={isSubmitting}
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="email">Email *</Label>
                        {errors.email && (
                          <span className="text-xs text-red-500">{errors.email}</span>
                        )}
                      </div>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        className={cn(errors.email && "border-red-500")}
                        disabled={isSubmitting}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="021 953 160" 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="message">Message *</Label>
                      {errors.message && (
                        <span className="text-xs text-red-500">{errors.message}</span>
                      )}
                    </div>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry" 
                      rows={5} 
                      className={cn("min-h-[120px]", errors.message && "border-red-500")}
                      disabled={isSubmitting}
                      required 
                    />
                  </div>
                  
                  {submitStatus.type && (
                    <div 
                      className={cn(
                        "p-4 rounded-md flex items-start gap-3",
                        submitStatus.type === 'success' 
                          ? "bg-green-50 text-green-800" 
                          : "bg-red-50 text-red-800"
                      )}
                    >
                      {submitStatus.type === 'success' ? (
                        <div className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600 flex items-center justify-center">✅</div>
                      ) : (
                        <div className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600 flex items-center justify-center">❌</div>
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      Book a Free Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
