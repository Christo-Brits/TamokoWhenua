'use client'

import { useEffect, useRef, useState } from 'react'
import { SiteHeader } from './site-header'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header 
      ref={headerRef}
      className={isScrolled ? 'shadow-sm' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <SiteHeader />
    </header>
  )
}
