import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Loading Test</h1>
      
      <div className="space-y-12">
        {/* Test 1: Using next/image */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">1. Using next/image Component</h2>
          <div className="relative w-full h-64 bg-gray-100 rounded-md overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Test hero image"
              fill
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
              priority
            />
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-mono text-sm">
              Path: <code className="bg-gray-200 px-2 py-1 rounded">/images/hero-image.png</code>
            </p>
          </div>
        </div>
        
        {/* Test 2: Using regular img tag */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">2. Using Regular img Tag</h2>
          <div className="w-full h-64 bg-gray-100 rounded-md overflow-hidden">
            <img
              src="/images/hero-image.png"
              alt="Test hero image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-mono text-sm">
              Path: <code className="bg-gray-200 px-2 py-1 rounded">/images/hero-image.png</code>
            </p>
          </div>
        </div>
        
        {/* Test 3: Using alternative image path */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">3. Alternative Image Path</h2>
          <div className="w-full h-64 bg-gray-100 rounded-md overflow-hidden">
            <img
              src="/images/Hero-Image.png"
              alt="Alternative hero image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <p className="font-mono text-sm">
              Path: <code className="bg-gray-200 px-2 py-1 rounded">/images/Hero-Image.png</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
