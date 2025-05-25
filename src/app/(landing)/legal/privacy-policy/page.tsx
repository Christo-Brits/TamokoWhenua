import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/legal" className="flex items-center">
              ← Back to Legal & Privacy
            </Link>
          </Button>
        </div>
        
        <article className="prose dark:prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: May 20, 2025
          </p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>
              Tamoko Whenua Development Collective ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>
          
          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you provide to us, including but not limited to:</p>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company or organization details</li>
              <li>Payment information for donations or purchases</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>
          
          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, newsletters, and marketing communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify any personal information that is inaccurate</li>
              <li>Request erasure of your personal information</li>
              <li>Restrict or object to the processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>
          
          <section>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@tamokowhenua.nz" className="text-primary hover:underline">
                privacy@tamokowhenua.nz
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
