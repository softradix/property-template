"use client";

import { useState } from 'react';
import { Wifi, School as Pool, Fan, Tv, UtensilsCrossed, Car, Dumbbell, Bath, Flame, Trees as Tree, PawPrint as Paw, SmilePlus, Armchair as Wheelchair, Shield, ScrollText, Gamepad2, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PropertyAmenitiesProps {
  amenities: string[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  const [showAll, setShowAll] = useState(false);
  
  const displayedAmenities = showAll ? amenities : amenities.slice(0, 8);
  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedAmenities.map((amenity) => (
          <AmenityItem key={amenity} name={amenity} />
        ))}
      </div>
      
      {amenities.length > 8 && (
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className={cn(
              "transition-all",
              showAll && "bg-primary/5"
            )}
          >
            {showAll ? 'Show Less' : `Show All (${amenities.length})`}
          </Button>
        </div>
      )}
    </div>
  );
}

function AmenityItem({ name }: { name: string }) {
  return (
    <div className="flex items-center p-3 bg-muted/50 rounded-lg">
      <div className="mr-3">
        {getAmenityIcon(name)}
      </div>
      <span>{name}</span>
    </div>
  );
}

function getAmenityIcon(name: string) {
  const iconProps = { className: "h-5 w-5 text-primary" };
  
  const normalizedName = name.toLowerCase();
  
  if (normalizedName.includes('wifi')) return <Wifi {...iconProps} />;
  if (normalizedName.includes('pool')) return <Pool {...iconProps} />;
  if (normalizedName.includes('air') || normalizedName.includes('cooling')) return <Fan {...iconProps} />;
  if (normalizedName.includes('tv')) return <Tv {...iconProps} />;
  if (normalizedName.includes('kitchen')) return <UtensilsCrossed {...iconProps} />;
  if (normalizedName.includes('parking')) return <Car {...iconProps} />;
  if (normalizedName.includes('gym')) return <Dumbbell {...iconProps} />;
  if (normalizedName.includes('tub') || normalizedName.includes('bath')) return <Bath {...iconProps} />;
  if (normalizedName.includes('fire')) return <Flame {...iconProps} />;
  if (normalizedName.includes('garden') || normalizedName.includes('beach')) return <Tree {...iconProps} />;
  if (normalizedName.includes('pet')) return <Paw {...iconProps} />;
  if (normalizedName.includes('smoke')) return <SmilePlus {...iconProps} />;
  if (normalizedName.includes('wheel')) return <Wheelchair {...iconProps} />;
  if (normalizedName.includes('security')) return <Shield {...iconProps} />;
  if (normalizedName.includes('smoke')) return <ScrollText {...iconProps} />;
  if (normalizedName.includes('game')) return <Gamepad2 {...iconProps} />;
  
  // Default icon
  return <Coffee {...iconProps} />;
}