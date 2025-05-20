"use client";

import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PropertyMapProps {
  lat: number;
  lng: number;
  title: string;
}

export default function PropertyMap({ lat, lng, title }: PropertyMapProps) {
  // This is a placeholder component for a map
  // In a real implementation, you would use a mapping library like Google Maps, Mapbox, or Leaflet
  
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <div className="w-full h-full bg-muted animate-pulse" />;
  }
  
  return (
    <div className="relative w-full h-full bg-muted flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mb-4 animate-bounce">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mx-auto">
            <MapPin className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">
          Coordinates: {lat.toFixed(6)}, {lng.toFixed(6)}
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          This is a placeholder for an interactive map. In a complete implementation,
          this would display the property location on a real map.
        </p>
      </div>
    </div>
  );
}