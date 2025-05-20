import { getPropertyById, properties } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Bed, Bath, Home, Wifi, School as Pool, Fan, Tv, Calendar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PropertyGallery from '@/components/property/PropertyGallery';
import PropertyMap from '@/components/property/PropertyMap';
import PropertyAmenities from '@/components/property/PropertyAmenities';
import PropertyReviews from '@/components/property/PropertyReviews';
import PropertyHostInfo from '@/components/property/PropertyHostInfo';
import ReservationForm from '@/components/property/ReservationForm';
import { notFound } from 'next/navigation';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return properties.map((property) => ({
    id: property.id.toString()
  }));
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id);
  
  if (!property) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Property Gallery */}
      <PropertyGallery images={property.images} title={property.title} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back to results */}
        <Link 
          href="/properties" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to search results
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Badge 
                  variant="outline" 
                  className="capitalize mr-2"
                >
                  {property.type}
                </Badge>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{property.title}</h1>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>
                  {property.location.address}, {property.location.city}, {property.location.state}, {property.location.country}
                </span>
              </div>
              
              {/* Key Features */}
              <div className="flex flex-wrap items-center gap-4 mb-4 mt-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">{property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">{property.area} {property.areaUnit}</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div className="prose max-w-none text-foreground/90">
                <p className="whitespace-pre-line">{property.description}</p>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <PropertyAmenities amenities={property.amenities} />
            </div>
            
            {/* Location */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="rounded-lg overflow-hidden border border-border h-72">
                <PropertyMap 
                  lat={property.location.coordinates.lat} 
                  lng={property.location.coordinates.lng} 
                  title={property.title}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {property.location.address}, {property.location.city}, {property.location.state}, {property.location.country}
              </p>
            </div>
            
            {/* Host Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About the Host</h2>
              <PropertyHostInfo host={property.host} />
            </div>
            
            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
              <PropertyReviews propertyId={property.id} rating={property.rating} reviewCount={property.reviews} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm sticky top-24">
              <div className="flex items-end mb-4">
                <span className="text-2xl font-bold">${property.price}</span>
                <span className="text-muted-foreground ml-1">/ {property.priceUnit}</span>
              </div>
              
              <ReservationForm property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}