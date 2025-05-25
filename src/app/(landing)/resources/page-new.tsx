import { Metadata } from "next"
import Link from "next/link"
import { ResourceCard } from "@/components/resource-card-new"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources & Downloads | Tamoko Whenua Development Collective",
  description: "Access useful guides, downloads, and helpful links for our clients, trainees, and partners.",
}

const resources = [
  {
    title: "Site Safety Handbook",
    description: "Comprehensive guide to workplace safety standards and procedures for all Tamoko Whenua sites.",
    type: "pdf" as const,
    url: "/downloads/site-safety-handbook.pdf",
    fileSize: "2.4 MB"
  },
  {
    title: "Training Program Application Form",
    description: "Application form for our rangatahi training programs in civil construction and infrastructure.",
    type: "form" as const,
    url: "/downloads/training-application-form.pdf",
    fileSize: "350 KB"
  },
  {
    title: "Whānau Support Services Guide",
    description: "Directory of support services available to our trainees and their whānau in Northland.",
    type: "pdf" as const,
    url: "/downloads/whanau-support-guide.pdf",
    fileSize: "1.8 MB"
  },
  {
    title: "Civil Construction Career Pathways",
    description: "Information about career progression and training pathways in the civil construction industry.",
    type: "pdf" as const,
    url: "/downloads/career-pathways.pdf",
    fileSize: "1.2 MB"
  },
  {
    title: "SiteWise Safety Guidelines",
    description: "Official SiteWise health and safety guidelines for contractors and workers.",
    type: "external" as const,
    url: "https://www.sitesafe.org.nz/"
  },
  {
    title: "Te Puni Kōkiri Funding Guide",
    description: "Guide to funding opportunities for Māori development projects in Northland.",
    type: "external" as const,
    url: "https://www.tpk.nz/"
  }
]

export default function ResourcesPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Resources & Downloads
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Useful guides, downloads, and helpful links for our clients, trainees, and partners.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              type={resource.type}
              url={resource.url}
              fileSize={resource.fileSize}
            />
          ))}
        </div>

        <div className="mt-16 bg-secondary/30 rounded-lg p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Can't find what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us for additional resources or information.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
