import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  image,
  rating
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-card-foreground mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
}