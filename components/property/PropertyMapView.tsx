"use client";

import { useState, useCallback, useEffect } from 'react';
import { Property } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BedDouble, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyMapViewProps {
  properties: Property[];
}

export default function PropertyMapView({ properties }: PropertyMapViewProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  return (
    <div className="relative h-[70vh] rounded-xl border border-border overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-muted flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <MapPin className="h-12 w-12 mx-auto text-primary opacity-20" />
          </div>
          <h3 className="text-xl font-medium mb-2">Map View</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            This is a placeholder for the map view. In a complete implementation, 
            this would display properties on an interactive map using a library 
            like Google Maps, Mapbox, or Leaflet.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {properties.map((property) => (
              <MapPropertyMarker
                key={property.id}
                property={property}
                isSelected={selectedProperty?.id === property.id}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Property Info Popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-0 right-0 mx-auto w-full max-w-md px-4">
          <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
            <div className="relative">
              <Button 
                variant="secondary" 
                size="icon" 
                className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedProperty(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex">
              {/* Property Image */}
              <div className="relative w-1/3 shrink-0 aspect-square">
                <Image
                  src={selectedProperty.images[0]}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover"
                />
                <Badge 
                  variant="outline" 
                  className="absolute bottom-2 left-2 capitalize bg-black/60 text-white backdrop-blur-sm border-0 z-10 text-xs"
                >
                  {selectedProperty.type}
                </Badge>
              </div>
              
              {/* Property Details */}
              <div className="p-3 flex-1">
                <h4 className="font-semibold line-clamp-1 mb-1">{selectedProperty.title}</h4>
                
                <div className="text-sm text-muted-foreground mb-2 flex items-center">
                  <MapPin className="h-3 w-3 mr-1 inline shrink-0" />
                  <span className="line-clamp-1">
                    {selectedProperty.location.city}, {selectedProperty.location.state}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-xs mb-3">
                  <div className="flex items-center">
                    <BedDouble className="h-3 w-3 mr-1" />
                    {selectedProperty.bedrooms} Beds
                  </div>
                  <div className="font-medium">${selectedProperty.price}/{selectedProperty.priceUnit}</div>
                </div>
                
                <Button size="sm" className="w-full" asChild>
                  <Link href={`/properties/${selectedProperty.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface MapPropertyMarkerProps {
  property: Property;
  isSelected: boolean;
  onClick: () => void;
}

function MapPropertyMarker({ property, isSelected, onClick }: MapPropertyMarkerProps) {
  return (
    <Button
      size="sm"
      variant={isSelected ? "default" : "outline"}
      className={cn(
        "rounded-full h-10 transition-all transform",
        isSelected ? "bg-primary text-primary-foreground scale-110" : ""
      )}
      onClick={onClick}
    >
      ${property.price}
    </Button>
  );
}

// Helper function
function cn(...classes: any) {
  return classes.filter(Boolean).join(' ');
}