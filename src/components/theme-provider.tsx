"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// Custom theme configuration
export const themeConfig = {
  // Default theme
  defaultTheme: "system",
  // Enable system color scheme
  enableSystem: true,
  // Available themes
  themes: ["light", "dark"],
  // HTML attribute for applying theme
  attribute: "class",
  // Key used to store theme preference in localStorage
  storageKey: "tamoko-whenua-theme",
  // Class name for color scheme transitions
  transitionClassName: "theme-transition",
} as const

export type Theme = typeof themeConfig.themes[number]

// Re-export the useTheme hook from next-themes for simplicity
export { useTheme } from "next-themes"

export function ThemeProvider({ 
  children, 
  defaultTheme = themeConfig.defaultTheme,
  enableSystem = themeConfig.enableSystem,
  storageKey = themeConfig.storageKey,
  attribute = themeConfig.attribute,
  ...props 
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey={storageKey}
      attribute={attribute}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

// ThemeScript component for preventing theme flicker on initial load
export function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('${themeConfig.storageKey}') || '${themeConfig.defaultTheme}';
        const resolvedTheme = theme === 'system' 
          ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          : theme;
        
        if (resolvedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Add a class to enable transitions after initial load
        setTimeout(() => {
          document.documentElement.classList.add('${themeConfig.transitionClassName}');
        }, 0);
      } catch (e) {}
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}
