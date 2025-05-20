'use client';

import { useState } from 'react';
import { properties, propertyTypes, amenitiesList } from '@/lib/data';
import PropertyCard from '@/components/property/PropertyCard';
import PropertySearchFilters from '@/components/property/PropertySearchFilters';
import PropertyViewToggle from '@/components/property/PropertyViewToggle';
import PropertyListView from '@/components/property/PropertyListView';
import PropertyMapView from '@/components/property/PropertyMapView';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Property</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse our selection of beautiful rental properties available in the most desirable locations.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <PropertySearchClient />
      </div>
    </div>
  );
}

function PropertySearchClient() {
  const [view, setView] = useState<'grid' | 'list' | 'map'>('grid');
  const [filters, setFilters] = useState({
    type: 'all',
    minPrice: 0,
    maxPrice: 1000,
    bedrooms: 0,
    bathrooms: 0,
    amenities: []
  });

  // Filter properties based on the current filters
  const filteredProperties = properties.filter(property => {
    // Filter by type
    if (filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }
    
    // Filter by price
    if (property.price < filters.minPrice || property.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by bedrooms
    if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
      return false;
    }
    
    // Filter by bathrooms
    if (filters.bathrooms > 0 && property.bathrooms < filters.bathrooms) {
      return false;
    }
    
    // Filter by amenities
    if (filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity => 
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }
    
    return true;
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Filters */}
        <div className="w-full md:w-72 lg:w-80 shrink-0">
          <PropertySearchFilters 
            filters={filters} 
            onFilterChange={handleFilterChange}
            propertyTypes={propertyTypes}
            amenitiesList={amenitiesList}
          />
        </div>
        
        {/* Results */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold">{filteredProperties.length} Properties Found</h2>
              <p className="text-sm text-muted-foreground">Based on your search criteria</p>
            </div>
            <PropertyViewToggle currentView={view} onViewChange={setView} />
          </div>
          
          {view === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
          {view === 'list' && (
            <PropertyListView properties={filteredProperties} />
          )}
          
          {view === 'map' && (
            <PropertyMapView properties={filteredProperties} />
          )}
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-16 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-medium mb-2">No properties found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to find properties</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}