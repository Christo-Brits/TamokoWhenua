"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

interface ResourceCardProps {
  title: string
  description: string
  type: 'pdf' | 'doc' | 'external' | 'form'
  url: string
  fileSize?: string
  className?: string
}

export function ResourceCard({ 
  title, 
  description, 
  type, 
  url, 
  fileSize, 
  className 
}: ResourceCardProps) {
  const isExternal = type === 'external'
  
  const typeIcons = {
    pdf: <div className="h-5 w-5 bg-red-600 text-white text-xs flex items-center justify-center rounded">📄</div>,
    doc: <div className="h-5 w-5 bg-blue-600 text-white text-xs flex items-center justify-center rounded">📃</div>,
    form: <div className="h-5 w-5 bg-green-600 text-white text-xs flex items-center justify-center rounded">📝</div>,
    external: <div className="h-5 w-5 text-primary text-xs flex items-center justify-center">🔗</div>
  }
  
  const typeLabels = {
    pdf: 'PDF',
    doc: 'Document',
    form: 'Form',
    external: 'External Link'
  }

  return (
    <div className={cn("border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-md bg-muted">
              {typeIcons[type]}
            </div>
            <div>
              <h3 className="font-medium text-lg text-foreground">{title}</h3>
              <span className="text-xs text-muted-foreground">
                {typeLabels[type]}{fileSize && ` • ${fileSize}`}
              </span>
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-muted-foreground">{description}</p>
        
        <div className="mt-4">
          {isExternal ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <span className="mr-2">🔗</span>
                Visit Resource
              </Button>
            </Link>
          ) : (
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <span className="mr-2">⬇️</span>
                Download
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
