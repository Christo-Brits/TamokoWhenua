'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

// Client-side only component to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? <>{children}</> : null
}

export function SiteHeader() {
  const pathname = usePathname()
  const [activePath, setActivePath] = useState('')

  // Update active path after mount to avoid hydration issues
  useEffect(() => {
    if (pathname) {
      setActivePath(pathname)
    }
  }, [pathname])

  const isActive = (href: string) => {
    if (!activePath) return false
    if (href === '/') {
      return activePath === href
    }
    return activePath.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt={siteConfig.name} 
              className="h-10 w-auto" 
              width={120}
              height={40}
            />
          </Link>
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-1">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex bg-primary text-white hover:bg-primary/90 hover:text-white [&>*]:text-white [&>*]:hover:text-white">
            <Link href="/contact">
              <span className="text-white">Get in touch</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icons.menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
