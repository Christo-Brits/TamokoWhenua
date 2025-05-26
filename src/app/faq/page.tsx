import { FAQ } from "@/components/faq"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | Tamoko Whenua Development Collective",
  description: "Frequently asked questions about Tamoko Whenua Development Collective, our services, training programs, and how we work.",
}

const faqItems = [
  {
    question: "What areas does Tamoko Whenua Development Collective serve?",
    answer: "We serve the Northland region of New Zealand, focusing on civil construction, earthworks, and infrastructure development. As a newly registered collective, we're building relationships with councils, iwi, hapū, and community organizations throughout Te Tai Tokerau.",
  },
  {
    question: "What services does Tamoko Whenua offer?",
    answer: "We specialize in civil construction, earthworks, site preparation, roading, and subdivisions. Our experienced team brings decades of expertise in heavy equipment operations and project management to deliver quality outcomes for Northland communities.",
  },
  {
    question: "Are you currently recruiting for training programs?",
    answer: "We're developing our training and apprenticeship programs as part of our long-term vision. While these programs are not yet active, we encourage interested individuals to contact us to be notified when applications open.",
  },
  {
    question: "How can my organization partner with Tamoko Whenua?",
    answer: "We're actively seeking partnerships with councils, iwi, contractors, and community organizations. Please contact us through our website or email us to discuss potential collaborations and joint ventures.",
  },
  {
    question: "What safety standards does Tamoko Whenua maintain?",
    answer: "Safety is our top priority. We're currently applying for SiteWise certification and our co-founders bring proven zero-harm track records from major projects. We maintain industry-leading safety standards on all worksites.",
  },
  {
    question: "What makes Tamoko Whenua different from other contractors?",
    answer: "As a Māori-led collective, we combine decades of proven industry experience with a commitment to community development and cultural values. Our co-founders bring expertise from major mining and civil construction projects, ensuring quality delivery with community benefit.",
  },
  {
    question: "How can I contact Tamoko Whenua for project inquiries?",
    answer: "You can reach us through our contact page on this website, or speak directly with our co-founders. We're always ready to discuss how our experienced team can deliver your civil construction and earthworks needs.",
  },
  {
    question: "What types of projects is Tamoko Whenua equipped to handle?",
    answer: "Our team has extensive experience with earthworks, subdivisions, roading, site preparation, and civil infrastructure projects. We can handle projects from residential developments to major council contracts, with a focus on quality delivery and community outcomes.",
  },
]

export default function FAQPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Answers to common questions about Tamoko Whenua Development Collective, our services, training programs, and how we work.
          </p>
        </div>
        
        <FAQ items={faqItems} className="mt-12" />
        
        <div className="mt-12 rounded-lg border bg-gray-50 p-6 text-center dark:bg-gray-800/50">
          <h2 className="text-xl font-semibold">Still have questions?</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Contact our team and we'll be happy to help.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
