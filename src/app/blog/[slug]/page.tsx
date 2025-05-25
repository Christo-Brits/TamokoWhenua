import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Mock data - in a real app, this would come from a CMS or API
const getPost = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "New Community Training Program Launches in Kaikohe",
      slug: "new-community-training-program",
      excerpt: "Our latest workforce development initiative is now training 15 local residents in civil construction skills.",
      content: `
        <p>We're excited to announce the launch of our new community training program in Kaikohe, designed to equip local residents with valuable skills in civil construction and infrastructure development.</p>
        <p>This 12-week intensive program combines classroom learning with hands-on experience, covering essential topics including:</p>
        <ul>
          <li>Health and safety best practices</li>
          <li>Basic construction techniques</li>
          <li>Heavy machinery operation</li>
          <li>Site management fundamentals</li>
        </ul>
        <p>Upon completion, participants will receive industry-recognized certifications and assistance with job placements across our network of partner organizations.</p>
      `,
      date: "2025-05-15",
      image: "/images/blog/training-program.jpg",
      category: "Community"
    },
    // Add other posts here
  ]
  
  return posts.find(post => post.slug === slug)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <Button variant="ghost" asChild className="mb-8 -ml-3">
          <Link href="/blog" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
        </Button>
        
        <div className="space-y-8">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <time className="text-muted-foreground">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          
          <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:underline prose-ul:list-disc prose-ul:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="pt-8 border-t">
            <Button asChild>
              <Link href="/blog" className="flex items-center">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
