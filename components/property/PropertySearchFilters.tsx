"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterX, SlidersHorizontal } from 'lucide-react';

interface PropertyType {
  value: string;
  label: string;
}

interface FilterProps {
  filters: {
    type: string;
    minPrice: number;
    maxPrice: number;
    bedrooms: number;
    bathrooms: number;
    amenities: string[];
  };
  onFilterChange: (filters: any) => void;
  propertyTypes: PropertyType[];
  amenitiesList: string[];
}

export default function PropertySearchFilters({
  filters,
  onFilterChange,
  propertyTypes,
  amenitiesList,
}: FilterProps) {
  const [priceRange, setPriceRange] = useState([filters.minPrice, filters.maxPrice]);
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onFilterChange({
      minPrice: values[0],
      maxPrice: values[1]
    });
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const updatedAmenities = checked
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    
    onFilterChange({ amenities: updatedAmenities });
  };
  
  const resetFilters = () => {
    setPriceRange([0, 1000]);
    onFilterChange({
      type: 'all',
      minPrice: 0,
      maxPrice: 1000,
      bedrooms: 0,
      bathrooms: 0,
      amenities: []
    });
  };

  // Filter content component shared between desktop and mobile
  const FilterContent = () => (
    <div className="space-y-6">
      {/* Property Type */}
      <div>
        <Label htmlFor="property-type" className="text-base font-medium block mb-2">
          Property Type
        </Label>
        <Select
          value={filters.type}
          onValueChange={(value) => onFilterChange({ type: value })}
        >
          <SelectTrigger id="property-type" className="w-full">
            <SelectValue placeholder="All Properties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Properties</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Price Range */}
      <div>
        <Label className="text-base font-medium block mb-2">
          Price Range
        </Label>
        <div className="pt-4 px-2">
          <Slider
            defaultValue={[filters.minPrice, filters.maxPrice]}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Min Price</span>
            <div className="bg-muted px-3 py-1 rounded-md">
              ${priceRange[0]}
            </div>
          </div>
          <div className="text-center">—</div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1">Max Price</span>
            <div className="bg-muted px-3 py-1 rounded-md">
              ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bedrooms */}
      <div>
        <Label htmlFor="bedrooms" className="text-base font-medium block mb-2">
          Bedrooms
        </Label>
        <Select 
          value={String(filters.bedrooms)} 
          onValueChange={(value) => onFilterChange({ bedrooms: Number(value) })}
        >
          <SelectTrigger id="bedrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Bathrooms */}
      <div>
        <Label htmlFor="bathrooms" className="text-base font-medium block mb-2">
          Bathrooms
        </Label>
        <Select 
          value={String(filters.bathrooms)} 
          onValueChange={(value) => onFilterChange({ bathrooms: Number(value) })}
        >
          <SelectTrigger id="bathrooms">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any</SelectItem>
            <SelectItem value="1">1+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Amenities */}
      <div>
        <Label className="text-base font-medium block mb-2">
          Amenities
        </Label>
        <div className="grid grid-cols-2 gap-3">
          {amenitiesList.slice(0, 10).map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity.toLowerCase().replace(' ', '-')}`}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={(checked) => 
                  handleAmenityChange(amenity, checked as boolean)
                }
              />
              <Label
                htmlFor={`amenity-${amenity.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-normal cursor-pointer"
              >
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center mt-4"
        onClick={resetFilters}
      >
        <FilterX className="h-4 w-4 mr-2" />
        Reset Filters
      </Button>
    </div>
  );
  
  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:block bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Filters</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="h-8 px-2 text-sm"
          >
            Reset
          </Button>
        </div>
        <FilterContent />
      </div>
      
      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] rounded-t-xl">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left">Filters</SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto pr-1 max-h-[calc(90vh-120px)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}