import type { Metadata, Viewport } from 'next'
import { Inter, Lora, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ToastProvider } from '@/components/ui/toast'
import { cn } from '@/lib/utils'

// Load fonts with the 'variable' strategy for better performance
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Metadata
export const metadata: Metadata = {
  title: {
    default: 'Tamoko Whenua Development Collective',
    template: '%s | Tamoko Whenua',
  },
  description: 'Empowering communities through sustainable development and innovation.',
  keywords: [
    'Tamoko Whenua',
    'Māori development',
    'community development',
    'sustainability',
    'indigenous innovation',
  ],
  authors: [
    {
      name: 'Tamoko Whenua',
      url: 'https://tamokowhenua.nz',
    },
  ],
  creator: 'Tamoko Whenua',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://tamokowhenua.nz',
    title: 'Tamoko Whenua Development Collective',
    description: 'Empowering communities through sustainable development and innovation.',
    siteName: 'Tamoko Whenua',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamoko Whenua Development Collective',
    description: 'Empowering communities through sustainable development and innovation.',
    creator: '@tamokowhenua',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
}

// This is a Server Component by default in Next.js 13+

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={cn(
        inter.variable,
        lora.variable,
        spaceGrotesk.variable,
        'antialiased',
        'bg-background text-foreground'
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('tamoko-whenua-theme') || 'system';
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (theme === 'system' && systemDark);
                  
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(isDark ? 'dark' : 'light');
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <ToastProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </Providers>
      </body>
    </html>
  )
}
