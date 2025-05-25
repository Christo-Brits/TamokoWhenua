import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfServicePage() {
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
          <h1>Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: May 20, 2025
          </p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Tamoko Whenua Development Collective website, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>
          
          <section>
            <h2>2. Use of Website</h2>
            <p>You agree to use the website only for lawful purposes and in accordance with these Terms of Service. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates any applicable laws or regulations</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Use the website to transmit any advertising or promotional material without our prior written consent</li>
            </ul>
          </section>
          
          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Tamoko Whenua Development Collective and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>
          
          <section>
            <h2>4. Limitation of Liability</h2>
            <p>
              In no event shall Tamoko Whenua Development Collective, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the website.
            </p>
          </section>
          
          <section>
            <h2>5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will provide notice of any changes by updating the "Last updated" date. 
              Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>
          
          <section>
            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of New Zealand, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              <a href="mailto:legal@tamokowhenua.nz" className="text-primary hover:underline">
                legal@tamokowhenua.nz
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
