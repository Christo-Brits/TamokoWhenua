'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground mb-6">
            We apologize for the inconvenience. Please try again or contact us if the problem persists.
          </p>
        </div>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Try again
          </button>
          <a
            href="/"
            className="block w-full bg-muted text-foreground px-6 py-3 rounded-lg hover:bg-muted/80 transition-colors font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  )
}
