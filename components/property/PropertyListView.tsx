import { Property } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Bed, Bath, Home, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PropertyListViewProps {
  properties: Property[];
}

export default function PropertyListView({ properties }: PropertyListViewProps) {
  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <PropertyListCard key={property.id} property={property} />
      ))}
    </div>
  );
}

interface PropertyListCardProps {
  property: Property;
}

function PropertyListCard({ property }: PropertyListCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-all">
      <Link href={`/properties/${property.id}`} className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-80 shrink-0 aspect-[4/3] md:aspect-auto">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
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
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-auto">
            {/* Location */}
            <div className="flex items-center text-sm text-muted-foreground mb-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location.city}, {property.location.state}</span>
            </div>
            
            {/* Title */}
            <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {property.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              <div className="flex items-center text-sm">
                <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
              <div className="flex items-center text-sm">
                <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
              <div className="flex items-center text-sm">
                <Home className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{property.area} {property.areaUnit}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span>{property.rating} ({property.reviews})</span>
              </div>
            </div>
          </div>
          
          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-xl font-bold">${property.price}</span>
              <span className="text-muted-foreground text-sm">
                / {property.priceUnit}
              </span>
            </div>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}