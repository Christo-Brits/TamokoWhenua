import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhistleblowerPolicyPage() {
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
          <h1>Whistleblower Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: May 20, 2025
          </p>
          
          <section>
            <h2>1. Purpose</h2>
            <p>
              Tamoko Whenua Development Collective is committed to the highest standards of ethical, moral, and legal business conduct. 
              This Whistleblower Policy is intended to encourage and enable staff and others to raise serious concerns within the organization 
              prior to seeking resolution outside the organization.
            </p>
          </section>
          
          <section>
            <h2>2. Scope</h2>
            <p>This policy applies to all employees, contractors, volunteers, and others working on behalf of Tamoko Whenua Development Collective.</p>
          </section>
          
          <section>
            <h2>3. Reporting Concerns</h2>
            <p>You may report concerns regarding:</p>
            <ul>
              <li>Illegal, fraudulent, or dishonest conduct</li>
              <li>Violations of laws, rules, or regulations</li>
              <li>Dishonest or fraudulent financial reporting</li>
              <li>Misuse of company resources</li>
              <li>Actions that endanger public health or safety</li>
              <li>Discrimination or harassment</li>
              <li>Any other serious misconduct</li>
            </ul>
          </section>
          
          <section>
            <h2>4. Protection from Retaliation</h2>
            <p>
              Tamoko Whenua Development Collective prohibits retaliation against any individual who reports a concern in good faith or participates 
              in an investigation, even if no wrongdoing is ultimately found to have occurred. Any act of retaliation should be reported immediately 
              and will be treated as a serious violation of this policy.
            </p>
          </section>
          
          <section>
            <h2>5. How to Report</h2>
            <p>Concerns can be reported through the following channels:</p>
            <ul>
              <li>Email: <a href="mailto:whistleblower@tamokowhenua.nz" className="text-primary hover:underline">whistleblower@tamokowhenua.nz</a></li>
              <li>Phone: [Insert dedicated whistleblower phone number]</li>
              <li>In writing to: [Insert mailing address for confidential submissions]</li>
            </ul>
            <p>You may choose to remain anonymous when reporting concerns, though providing your contact information may assist with the investigation.</p>
          </section>
          
          <section>
            <h2>6. Investigation Process</h2>
            <p>
              All reports will be promptly investigated by an appropriate party, who will maintain confidentiality to the fullest extent possible. 
              The investigation may include interviews with relevant parties and a review of relevant documents.
            </p>
          </section>
          
          <section>
            <h2>7. No Retaliation</h2>
            <p>
              Tamoko Whenua Development Collective will not discharge, demote, suspend, threaten, harass, or in any manner discriminate against any 
              employee in the terms and conditions of employment based upon any lawful actions of such employee with respect to good faith reporting 
              of complaints regarding accounting or auditing matters or other violations as specified in this policy.
            </p>
          </section>
          
          <section>
            <h2>8. False Reports</h2>
            <p>
              While we encourage reporting of genuine concerns, making false accusations in bad faith or with malicious intent may result in 
              disciplinary action, up to and including termination of employment or contract.
            </p>
          </section>
          
          <section>
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Whistleblower Policy, please contact:
              <br />
              <a href="mailto:compliance@tamokowhenua.nz" className="text-primary hover:underline">
                compliance@tamokowhenua.nz
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
