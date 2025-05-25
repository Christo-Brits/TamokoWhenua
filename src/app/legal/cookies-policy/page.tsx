import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookiesPolicyPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Cookies Policy
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Information about how we use cookies and similar technologies on our website.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Use of Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">What are cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us improve your experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Types of cookies we use</h2>
              <div className="space-y-4 pl-6">
                <p className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Essential cookies:</strong> Necessary for the website to function properly</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</span>
                </p>
                <p className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Preference cookies:</strong> Remember your preferences and settings</span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Managing cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
                and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually 
                adjust some preferences every time you visit a site and some services and functionalities may not work.
              </p>
            </section>

            <div className="pt-4">
              <Button asChild variant="outline">
                <Link href="/legal" className="hover:no-underline">
                  Back to Legal & Privacy
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
