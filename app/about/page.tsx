import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Building, Shield, Globe, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StayScape</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to make finding your perfect rental property simple, 
              transparent, and enjoyable.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-foreground/90 mb-4">
                Founded in 2020, StayScape was born out of a simple frustration: finding the perfect place to stay 
                shouldn't be complicated. Our founders experienced firsthand the challenges of navigating 
                confusing listings, misleading photos, and lack of transparency in the rental market.
              </p>
              <p className="text-foreground/90 mb-4">
                We set out to create a platform that puts honesty and quality first. Every property on StayScape 
                is personally verified by our team to ensure what you see is what you get. We believe in 
                building trust through transparency and exceptional service.
              </p>
              <p className="text-foreground/90">
                Today, StayScape offers thousands of curated properties across the globe, helping travelers 
                and renters find their perfect temporary home with confidence and ease.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="StayScape team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at StayScape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<CheckCircle className="h-10 w-10" />}
              title="Quality First"
              description="We personally verify every property to ensure it meets our high standards for comfort, cleanliness, and accuracy."
            />
            <ValueCard 
              icon={<Users className="h-10 w-10" />}
              title="Customer Centric"
              description="We put our customers first, focusing on their needs and providing exceptional service at every step of their journey."
            />
            <ValueCard 
              icon={<Building className="h-10 w-10" />}
              title="Integrity"
              description="We believe in absolute transparency and honesty in all our listings and interactions with hosts and guests."
            />
            <ValueCard 
              icon={<Shield className="h-10 w-10" />}
              title="Trust & Safety"
              description="We prioritize the safety of our users, with secure payments and thorough verification processes for hosts and properties."
            />
            <ValueCard 
              icon={<Globe className="h-10 w-10" />}
              title="Global Perspective"
              description="We embrace diversity and strive to offer unique properties that reflect local cultures and environments."
            />
            <ValueCard 
              icon={<Users className="h-10 w-10" />}
              title="Community"
              description="We foster meaningful connections between hosts and guests, creating a global community of travelers and property owners."
            />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind StayScape's mission and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
              name="Alex Morgan"
              title="Founder & CEO"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            />
            <TeamMember 
              name="Sarah Chen"
              title="Co-Founder & COO"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            />
            <TeamMember 
              name="Michael Rodriguez"
              title="CTO"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            />
            <TeamMember 
              name="Jessica Kim"
              title="Head of Customer Experience"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Join Our Community Today</h2>
            <p className="text-lg opacity-90">
              Whether you're looking for the perfect stay or want to list your property, 
              we're here to make the process seamless.
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

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TeamMember({ name, title, image }: { name: string, title: string, image: string }) {
  return (
    <div className="text-center group">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 group-hover:shadow-md transition-shadow">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
}