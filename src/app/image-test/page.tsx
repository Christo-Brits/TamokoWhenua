import Image from 'next/image';

export default function ImageTestPage() {
  const imagePaths = [
    '/images/hero-image.png',
    'images/hero-image.png',
    './public/images/hero-image.png',
    '/public/images/hero-image.png',
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>
      
      <div className="space-y-12">
        {imagePaths.map((path, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Test {index + 1}: {path}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Using next/Image:</h3>
                <div className="relative h-48 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={path}
                    alt={`Test ${index + 1}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Using regular img tag:</h3>
                <div className="h-48 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={path}
                    alt={`Test ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
              <p className="font-mono break-all">
                Path: <code className="bg-gray-200 px-2 py-1 rounded">{path}</code>
              </p>
              <p className="mt-2">
                <a 
                  href={path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Open image in new tab
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
