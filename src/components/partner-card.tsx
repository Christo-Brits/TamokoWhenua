"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type PartnerType = 'supplier' | 'council' | 'iwi' | 'certification' | 'association'

interface PartnerCardProps {
  name: string
  description: string
  logoUrl: string
  logoAlt: string
  type: PartnerType
  websiteUrl?: string
  className?: string
}

const typeColors = {
  supplier: 'bg-blue-50 text-blue-800',
  council: 'bg-green-50 text-green-800',
  iwi: 'bg-purple-50 text-purple-800',
  certification: 'bg-amber-50 text-amber-800',
  association: 'bg-teal-50 text-teal-800',
}

const typeLabels = {
  supplier: 'Supplier',
  council: 'Council',
  iwi: 'Iwi',
  certification: 'Certification',
  association: 'Association',
}

export function PartnerCard({ 
  name, 
  description, 
  logoUrl, 
  logoAlt, 
  type,
  websiteUrl,
  className 
}: PartnerCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(logoUrl)

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true)
      // Fallback to a placeholder image or the first letter of the name
      setImageSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff`)
    }
  }

  const cardContent = (
    <div className={cn(
      "h-full p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md flex flex-col",
      websiteUrl && "hover:border-primary/50 cursor-pointer",
      className
    )}>
      <div className="flex-1">
        <div className="h-24 mb-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={logoAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 200px) 100vw, 200px"
              unoptimized={imageSrc.startsWith('http') && !imageSrc.includes('vercel.app')}
              priority={false}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-foreground">{name}</h3>
            <span className={cn(
              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
              typeColors[type]
            )}>
              {typeLabels[type]}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </div>
      </div>
      
      {websiteUrl && (
        <div className="mt-4 pt-4 border-t text-sm font-medium text-primary">
          Visit website →
        </div>
      )}
    </div>
  )

  if (websiteUrl) {
    return (
      <a 
        href={websiteUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full no-underline hover:no-underline"
        aria-label={`Visit ${name} website`}
      >
        {cardContent}
      </a>
    )
  }
  
  return (
    <div className="h-full">
      {cardContent}
    </div>
  )
}
