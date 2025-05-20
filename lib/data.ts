export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: 'night' | 'week' | 'month';
  location: {
    city: string;
    state: string;
    country: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: 'sqft' | 'sqm';
  amenities: string[];
  type: 'apartment' | 'house' | 'villa' | 'cottage' | 'condo';
  status: 'available' | 'booked';
  images: string[];
  featured: boolean;
  rating: number;
  reviews: number;
  host: {
    name: string;
    image: string;
    rating: number;
  };
}

export const propertyTypes = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'villa', label: 'Villa' },
  { value: 'cottage', label: 'Cottage' },
  { value: 'condo', label: 'Condo' },
];

export const amenitiesList = [
  'Wi-Fi',
  'Pool',
  'Air Conditioning',
  'Kitchen',
  'TV',
  'Washer',
  'Dryer',
  'Parking',
  'Gym',
  'Hot Tub',
  'BBQ',
  'Balcony',
  'Fireplace',
  'Garden',
  'Beach Access',
  'Mountain View',
  'Pet Friendly',
  'Smoking Allowed',
  'Wheelchair Accessible',
  'Security System',
];

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    description: 'Experience luxury living in this stunning beachfront villa with panoramic ocean views. This spacious property features modern architecture, high-end finishes, and direct beach access. Enjoy breathtaking sunsets from your private terrace, take a dip in the infinity pool, or stroll along the pristine sandy beach just steps from your door. Perfect for those seeking a luxurious getaway in a prime location.',
    price: 450,
    priceUnit: 'night',
    location: {
      city: 'Malibu',
      state: 'California',
      country: 'USA',
      address: '123 Beachfront Drive',
      coordinates: {
        lat: 34.025922,
        lng: -118.779757,
      },
    },
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Pool', 'Air Conditioning', 'Kitchen', 'TV', 'Beach Access', 'BBQ', 'Parking'],
    type: 'villa',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg',
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg',
    ],
    featured: true,
    rating: 4.9,
    reviews: 87,
    host: {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 4.95,
    },
  },
  {
    id: '2',
    title: 'Cozy Downtown Apartment',
    description: 'Perfectly located in the heart of downtown, this stylish apartment offers the ideal base for exploring the city. Recently renovated with modern furnishings and a fully equipped kitchen, this cozy apartment combines comfort with convenience. Walk to popular restaurants, shopping districts, and cultural attractions. Great for business travelers or couples looking for a weekend getaway in the city.',
    price: 120,
    priceUnit: 'night',
    location: {
      city: 'Seattle',
      state: 'Washington',
      country: 'USA',
      address: '456 Urban Street',
      coordinates: {
        lat: 47.608013,
        lng: -122.335167,
      },
    },
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Washer', 'Dryer'],
    type: 'apartment',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      'https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg',
      'https://images.pexels.com/photos/5824515/pexels-photo-5824515.jpeg',
      'https://images.pexels.com/photos/14025027/pexels-photo-14025027.jpeg',
    ],
    featured: false,
    rating: 4.5,
    reviews: 42,
    host: {
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 4.7,
    },
  },
  {
    id: '3',
    title: 'Mountain View Cabin',
    description: 'Escape to this rustic yet luxurious cabin nestled in the mountains. This peaceful retreat offers stunning views, hiking trails nearby, and all the modern amenities you need for a comfortable stay. The cabin features a wood-burning fireplace, gourmet kitchen, and a large deck perfect for enjoying the natural surroundings. Ideal for nature lovers, families, or couples seeking a romantic mountain getaway.',
    price: 195,
    priceUnit: 'night',
    location: {
      city: 'Aspen',
      state: 'Colorado',
      country: 'USA',
      address: '789 Pine Ridge Road',
      coordinates: {
        lat: 39.191097,
        lng: -106.817535,
      },
    },
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Fireplace', 'Kitchen', 'TV', 'Mountain View', 'BBQ', 'Parking'],
    type: 'cottage',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg',
      'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
      'https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg',
    ],
    featured: true,
    rating: 4.8,
    reviews: 65,
    host: {
      name: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      rating: 4.9,
    },
  },
  {
    id: '4',
    title: 'Luxury Penthouse with City Views',
    description: 'Experience the height of urban luxury in this stunning penthouse apartment with panoramic city views. This elegant space features floor-to-ceiling windows, designer furnishings, and a private rooftop terrace. The open-concept living area is perfect for entertaining, while the master suite offers a spa-like retreat. Located in a premium building with concierge service, gym, and pool access.',
    price: 350,
    priceUnit: 'night',
    location: {
      city: 'New York',
      state: 'New York',
      country: 'USA',
      address: '101 Skyline Avenue',
      coordinates: {
        lat: 40.712776,
        lng: -74.005974,
      },
    },
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1800,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Gym', 'Pool', 'Balcony', 'Security System'],
    type: 'apartment',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg',
    ],
    featured: true,
    rating: 4.7,
    reviews: 53,
    host: {
      name: 'James Rodriguez',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 4.8,
    },
  },
  {
    id: '5',
    title: 'Charming Historic Brownstone',
    description: 'Step back in time in this beautifully restored historic brownstone that combines period charm with modern convenience. Original architectural details like exposed brick, hardwood floors, and crown molding create a warm atmosphere throughout. The property has been thoughtfully updated with a contemporary kitchen, luxury bathrooms, and smart home features while preserving its historic character.',
    price: 275,
    priceUnit: 'night',
    location: {
      city: 'Boston',
      state: 'Massachusetts',
      country: 'USA',
      address: '222 Heritage Street',
      coordinates: {
        lat: 42.360082,
        lng: -71.058880,
      },
    },
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Fireplace', 'Washer', 'Dryer', 'Garden'],
    type: 'house',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    ],
    featured: false,
    rating: 4.6,
    reviews: 38,
    host: {
      name: 'Alexandra Brown',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 4.85,
    },
  },
  {
    id: '6',
    title: 'Seaside Cottage Retreat',
    description: 'Escape to this charming seaside cottage just steps from the beach. This cozy retreat offers a peaceful getaway with the sound of waves and fresh ocean air. The cottage features a light-filled interior with coastal decor, a well-equipped kitchen, and a delightful porch perfect for enjoying morning coffee or evening sunsets. Explore nearby shops, restaurants, and nature trails.',
    price: 165,
    priceUnit: 'night',
    location: {
      city: 'Cape Cod',
      state: 'Massachusetts',
      country: 'USA',
      address: '333 Shoreline Road',
      coordinates: {
        lat: 41.668030,
        lng: -70.298874,
      },
    },
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Kitchen', 'TV', 'Beach Access', 'BBQ', 'Parking', 'Pet Friendly'],
    type: 'cottage',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
      'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
    ],
    featured: true,
    rating: 4.8,
    reviews: 45,
    host: {
      name: 'Daniel Taylor',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      rating: 4.9,
    },
  },
  {
    id: '7',
    title: 'Urban Loft in Arts District',
    description: 'This stylish industrial loft located in the vibrant Arts District offers an authentic urban living experience. The open-concept space features high ceilings, exposed ductwork, concrete floors, and large windows that flood the space with natural light. The modern interior is tastefully furnished with a mix of contemporary and vintage pieces, creating a unique and comfortable atmosphere.',
    price: 180,
    priceUnit: 'night',
    location: {
      city: 'Portland',
      state: 'Oregon',
      country: 'USA',
      address: '444 Creative Boulevard',
      coordinates: {
        lat: 45.522500,
        lng: -122.681427,
      },
    },
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Washer', 'Dryer', 'Parking'],
    type: 'apartment',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
      'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg',
    ],
    featured: false,
    rating: 4.6,
    reviews: 32,
    host: {
      name: 'Olivia Martin',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      rating: 4.75,
    },
  },
  {
    id: '8',
    title: 'Lakefront House with Private Dock',
    description: 'Enjoy peaceful lake living in this beautiful waterfront property with its own private dock. This spacious home offers stunning views of the lake from nearly every room and plenty of outdoor space to enjoy the natural surroundings. The large deck is perfect for entertaining, while the private dock provides easy access for swimming, fishing, or boating activities.',
    price: 295,
    priceUnit: 'night',
    location: {
      city: 'Lake Tahoe',
      state: 'California',
      country: 'USA',
      address: '555 Lakeview Drive',
      coordinates: {
        lat: 39.096848,
        lng: -120.032349,
      },
    },
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    areaUnit: 'sqft',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen', 'TV', 'Fireplace', 'BBQ', 'Parking', 'Beach Access'],
    type: 'house',
    status: 'available',
    images: [
      'https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/4846104/pexels-photo-4846104.jpeg',
      'https://images.pexels.com/photos/4846105/pexels-photo-4846105.jpeg',
    ],
    featured: true,
    rating: 4.9,
    reviews: 58,
    host: {
      name: 'Robert Garcia',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg',
      rating: 4.95,
    },
  },
];

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const filterProperties = (filters: any): Property[] => {
  return properties.filter(property => {
    // Apply filters
    if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }
    
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }
    
    if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
      return false;
    }
    
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every((amenity: string) => 
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }
    
    return true;
  });
};