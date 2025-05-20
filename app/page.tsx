import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Star, ArrowRight } from 'lucide-react';
import { getFeaturedProperties } from '@/lib/data';
import PropertyCard from '@/components/property/PropertyCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import FeatureCard from '@/components/home/FeatureCard';

export default function Home() {
  const featuredProperties = getFeaturedProperties();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
            alt="Luxury property"
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Find Your Perfect Place to Stay
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Discover beautiful rental properties in the most desirable locations. Your dream getaway is just a few clicks away.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-background rounded-lg px-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 md:flex-none" size="lg">
                  Search Properties
                </Button>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
              <div className="flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 mr-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span>Trusted by 10,000+ customers</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 mr-2">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Properties across 50+ locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our handpicked selection of stunning properties in prime locations
              </p>
            </div>
            <Link href="/properties">
              <Button variant="ghost" className="mt-4 md:mt-0 group">
                View all properties
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose StayScape</h2>
            <p className="text-muted-foreground">
              We make finding and booking your perfect rental property simple and stress-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Curated Selection" 
              description="Handpicked properties that meet our high standards for quality and comfort."
              icon="search"
            />
            <FeatureCard 
              title="Simple Booking" 
              description="Our streamlined booking process makes securing your property quick and easy."
              icon="calendar"
            />
            <FeatureCard 
              title="Verified Properties" 
              description="Every property is verified by our team to ensure accuracy and quality."
              icon="check"
            />
            <FeatureCard 
              title="24/7 Support" 
              description="Our customer service team is available around the clock to assist you."
              icon="headset"
            />
            <FeatureCard 
              title="Best Price Guarantee" 
              description="We offer competitive pricing and will match any lower price you find."
              icon="tag"
            />
            <FeatureCard 
              title="Flexible Cancellation" 
              description="Plans change. Most of our properties offer flexible cancellation policies."
              icon="shield"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="The vacation home we rented through StayScape exceeded our expectations. The booking process was simple, and the property was exactly as described."
              author="Emily Robinson"
              location="New York, USA"
              image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              rating={5}
            />
            <TestimonialCard 
              quote="We've used StayScape for our last three family vacations and have been consistently impressed with the quality of the properties and the level of service."
              author="Marcus Johnson"
              location="London, UK"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              rating={4}
            />
            <TestimonialCard 
              quote="Finding the perfect rental for our anniversary trip was stress-free thanks to StayScape. The property was beautiful, and the host was wonderful."
              author="Sophia Chen"
              location="Toronto, Canada"
              image="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Find Your Perfect Stay?</h2>
            <p className="text-lg opacity-90">
              Start browsing our collection of beautiful properties and book your next getaway today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}