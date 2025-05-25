import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  image: string
  category?: string
}

export function BlogCard({ title, excerpt, slug, date, image, category }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3">
              {category}
            </span>
          )}
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        </div>
        <div className="mt-auto pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <time className="text-muted-foreground">
              {new Date(date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <Link 
              href={`/blog/${slug}`} 
              className="font-medium text-primary hover:underline flex items-center"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
