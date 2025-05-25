import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Redirect /legal to /legal/page
  if (path === '/legal') {
    return NextResponse.redirect(new URL('/legal/page', request.url))
  }

  // Handle other legal routes
  if (path.startsWith('/legal/')) {
    // This will allow the request to continue to the actual page
    return NextResponse.next()
  }

  // For all other routes, continue as normal
  return NextResponse.next()
}

// Only run the middleware on these paths
export const config = {
  matcher: ['/legal/:path*'],
}
