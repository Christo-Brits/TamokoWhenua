export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-muted border-t-primary mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl">🏗️</div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Loading Tamoko Whenua
        </h2>
        <p className="text-muted-foreground">
          Building your experience...
        </p>
      </div>
    </div>
  )
}
