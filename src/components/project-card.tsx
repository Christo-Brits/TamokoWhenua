"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  tags?: string[]
  slug: string
  className?: string
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  tags = [],
  slug,
  className 
}: ProjectCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md", className)}>
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        {tags.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        
        <Button asChild variant="link" className="group/button p-0">
          <Link href={`/projects/${slug}`} className="inline-flex items-center">
            View Project
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
