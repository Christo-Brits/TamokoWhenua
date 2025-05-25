import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Icons temporarily removed to resolve import issues
import Link from "next/link"

export default function LegalPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Legal & Privacy
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We are committed to protecting your privacy and being transparent about how we manage your information. 
            Please review our Privacy Policy and Terms of Service.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Learn how we collect, use, and protect your personal information in compliance with the Privacy Act 2020.
                </p>
                <div className="space-y-4 pl-6">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>What information we collect and why</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>How we use and protect your data</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Your rights and choices regarding your information</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/legal/privacy-policy" className="hover:no-underline">
                      Read Full Privacy Policy
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The terms and conditions governing your use of our website and services.
                </p>
                <div className="space-y-4 pl-6">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Website terms of use</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Intellectual property rights</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Limitations of liability</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/legal/terms-of-service" className="hover:no-underline">
                      Read Full Terms of Service
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Health & Safety Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our commitment to maintaining a safe and healthy work environment for all employees, contractors, and visitors.
                </p>
                <div className="space-y-4 pl-6">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Workplace health and safety commitments</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Hazard identification and risk management</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Emergency procedures</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline" className="flex items-center">
                    <a href="/documents/health-safety-policy.pdf" download>
                      Download Policy (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Whistleblower Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our commitment to ethical business practices and procedures for reporting concerns.
                </p>
                <div className="space-y-4 pl-6">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>How to report concerns confidentially</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Protection for whistleblowers</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Investigation procedures</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/legal/whistleblower-policy" className="hover:no-underline">
                      Read Whistleblower Policy
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Cookies Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Learn how we use cookies and similar technologies on our website.
                </p>
                <div className="space-y-4 pl-6">
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>What cookies are and how we use them</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Types of cookies we use</span>
                  </p>
                  <p className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>How to manage your cookie preferences</span>
                  </p>
                </div>
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/legal/cookies-policy" className="hover:no-underline">
                      Read Our Cookies Policy
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
