"use client";

import { useState } from 'react';
import Image from "next/image";

export function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const imageSources = [
    '/images/hero-optimized.png',
    '/images/hero-image.png',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = imageSources[currentImageIndex];

  const handleImageError = () => {
    console.error(`Failed to load image: ${currentImage}`);
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!imageError ? (
          <Image
            src={currentImage}
            alt="Tamoko Whenua civil construction team at work in Northland"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onError={handleImageError}
            onLoad={() => setImageLoaded(true)}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-2xl font-bold mb-4">Tamoko Whenua</h2>
              <p>Civil Construction & Training</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Development debug info */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs p-2 rounded z-30">
          {imageError ? (
            '❌ All image sources failed'
          ) : (
            `🖼️ ${currentImage} ${!imageLoaded ? '(loading...)' : '✅'}`
          )}
        </div>
      )}
    </>
  );
}
