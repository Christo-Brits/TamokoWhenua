export default function DirectTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Direct Image Access Test</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Attempting to load image directly:</h2>
        <p className="mb-4">If you can see the image below, it's loading correctly:</p>
        
        <div className="w-full max-w-2xl h-96 bg-gray-200 rounded-md overflow-hidden">
          <img 
            src="/images/hero-image.png" 
            alt="Test hero image"
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error('Image failed to load:', e);
              const img = e.target as HTMLImageElement;
              img.parentElement!.innerHTML = `
                <div class="p-4 text-red-600">
                  <p class="font-bold">Error: Image failed to load</p>
                  <p>Tried to load: <code>${img.src}</code></p>
                  <p class="mt-2">Please check the browser's developer console for more details.</p>
                </div>
              `;
            }}
          />
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="font-semibold mb-2">Troubleshooting:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Check if the file exists at: <code className="bg-gray-100 px-1">public/images/hero-image.png</code></li>
            <li>Verify the file permissions</li>
            <li>Try accessing the image directly: <a href="/images/hero-image.png" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Open image</a></li>
            <li>Check browser's developer console for any error messages</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
