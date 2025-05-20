"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Star, Bed, Bath, Home } from 'lucide-react';
import { Property } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-all h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-300"
          />
          
          {/* Favorite Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white shadow-sm backdrop-blur-sm z-10"
            onClick={toggleFavorite}
          >
            <Heart 
              className={cn(
                "h-4 w-4 transition-colors", 
                isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
              )} 
            />
          </Button>
          
          {/* Status Badge */}
          {property.status === 'booked' && (
            <Badge className="absolute top-3 left-3 z-10">
              Booked
            </Badge>
          )}
          
          {/* Property Type Badge */}
          <Badge 
            variant="outline" 
            className="absolute bottom-3 left-3 capitalize bg-black/60 text-white backdrop-blur-sm border-0 z-10"
          >
            {property.type}
          </Badge>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          {/* Location */}
          <div className="text-sm text-muted-foreground mb-1">
            {property.location.city}, {property.location.state}
          </div>
          
          {/* Title */}
          <h3 className="font-semibold text-xl mb-2 line-clamp-1">{property.title}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium text-sm">{property.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">({property.reviews} reviews)</span>
          </div>
          
          {/* Features */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.area} {property.areaUnit}</span>
            </div>
          </div>
          
          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-end">
              <span className="text-xl font-bold">${property.price}</span>
              <span className="text-muted-foreground text-sm ml-1">
                / {property.priceUnit}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}