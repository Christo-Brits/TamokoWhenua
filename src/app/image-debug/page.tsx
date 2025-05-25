'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageDebugPage() {
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testImage = (path: string) => {
    const img = new window.Image();
    img.onload = () => setImageStatus(prev => ({
      ...prev,
      [path]: '✅ Loaded successfully'
    }));
    img.onerror = (e) => setImageStatus(prev => ({
      ...prev,
      [path]: `❌ Failed to load: ${(e as any).message || 'Unknown error'}`
    }));
    img.src = path;
  };

  const testPaths = [
    '/images/hero-image.png',
    '/images/hero-image.png?t=' + Date.now(),
    'http://localhost:3000/images/hero-image.png',
    'http://localhost:3000/images/hero-image.png?t=' + Date.now(),
  ];

  useEffect(() => {
    if (isClient) {
      testPaths.forEach(testImage);
    }
  }, [isClient]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Image Loading Debugger</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Image File Information</h2>
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify({
              path: 'public/images/hero-image.png',
              exists: true,
              size: '3.0 MB',
              lastModified: '2025-05-18 20:11:00'
            }, null, 2)}
          </pre>
        </div>

        <h2 className="text-xl font-semibold mb-4">Test Image Loading</h2>
        <div className="space-y-6">
          {testPaths.map((path) => (
            <div key={path} className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                <code className="text-sm">{path}</code>
                <span className="ml-4 px-2 py-1 text-xs rounded-full bg-gray-200">
                  {imageStatus[path] || '⏳ Testing...'}
                </span>
              </div>
              <div className="p-4 flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 h-48 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={path}
                    alt={`Test ${path}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const errorDiv = document.createElement('div');
                      errorDiv.className = 'w-full h-full flex items-center justify-center bg-red-50 text-red-600';
                      errorDiv.textContent = 'Failed to load image';
                      target.parentNode?.appendChild(errorDiv);
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-medium mb-2">Try to open:</h3>
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 hover:underline mb-2 break-all"
                  >
                    {path}
                  </a>
                  <div className="mt-2 p-2 bg-blue-50 text-blue-800 text-sm rounded">
                    <p className="font-medium">What to check:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Does the image open in a new tab?</li>
                      <li>Any browser console errors?</li>
                      <li>Check Network tab for failed requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <h3 className="font-bold text-yellow-800">Troubleshooting Steps</h3>
          <ol className="mt-2 space-y-2 text-sm text-yellow-700">
            <li>1. Open browser's developer tools (F12)</li>
            <li>2. Go to the Network tab</li>
            <li>3. Check if the image request is being made</li>
            <li>4. Look for any CORS or 404 errors</li>
            <li>5. Try hard refreshing the page (Ctrl+F5)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
