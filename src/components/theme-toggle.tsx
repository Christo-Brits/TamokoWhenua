"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" disabled>
        <div className="h-4 w-4" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }
  
  const isDark = resolvedTheme === 'dark'
  
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200"
      onClick={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <SunIcon className="h-4 w-4 text-foreground transition-transform duration-200 hover:rotate-90" />
      ) : (
        <MoonIcon className="h-4 w-4 text-foreground transition-transform duration-200 hover:rotate-12" />
      )}
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </Button>
  )
}


export function ThemeToggleWithText() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Don't render anything on the server to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start" disabled>
          <div className="h-4 w-4 mr-2" />
          <span>Loading...</span>
        </Button>
      </div>
    )
  }
  
  const isDark = resolvedTheme === 'dark'
  
  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
      >
        <SunIcon className="mr-2 h-4 w-4" />
        <span>Light</span>
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
      >
        <MoonIcon className="mr-2 h-4 w-4" />
        <span>Dark</span>
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => setTheme('system')}
        aria-pressed={theme === 'system'}
      >
        <div className="mr-2 h-4 w-4 rounded bg-muted flex items-center justify-center text-xs">⚙️</div>
        <span>System</span>
      </Button>
    </div>
  )
}
