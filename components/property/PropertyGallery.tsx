"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Grid2X2, X, ZoomIn } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="relative">
      {/* Main Gallery View */}
      <div className="relative h-[40vh] md:h-[60vh] bg-muted overflow-hidden">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-2 py-4">
            {/* Main/Primary Image */}
            <div className="md:col-span-2 relative rounded-lg overflow-hidden">
              <Image
                src={images[0]}
                alt={`${title} - Featured Image`}
                fill
                priority
                className="object-cover"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-3 right-3 rounded-full"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={images[0]}
                      alt={`${title} - Featured Image`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full"
                    onClick={(e) => (e.currentTarget.closest('div[role="dialog"]')?.querySelector('button[aria-label="Close"]') as HTMLButtonElement)?.click()}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Secondary Images - Only visible on larger screens */}
            <div className="hidden md:grid grid-rows-2 gap-2 h-full">
              {images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Full Gallery Toggle Button */}
        <Button
          variant="secondary"
          className="absolute bottom-4 right-4 md:right-8"
          onClick={() => setShowAllImages(true)}
        >
          <Grid2X2 className="h-4 w-4 mr-2" />
          See All Photos
        </Button>
      </div>
      
      {/* Full Gallery Modal */}
      <Dialog open={showAllImages} onOpenChange={setShowAllImages}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-sm p-0">
          <div className="p-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{title} - All Photos</h3>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setShowAllImages(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowAllImages(false);
                  }}
                >
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}