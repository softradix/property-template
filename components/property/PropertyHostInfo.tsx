import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyHostInfoProps {
  host: {
    name: string;
    image: string;
    rating: number;
  };
}

export default function PropertyHostInfo({ host }: PropertyHostInfoProps) {
  return (
    <div className="flex items-center p-4 bg-muted/30 rounded-xl border border-border">
      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
        <Image
          src={host.image}
          alt={host.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{host.name}</h3>
        <div className="flex items-center text-sm">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span>{host.rating} Rating</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Responds within 1 hour
        </p>
      </div>
      <div>
        <Button size="sm" variant="outline" className="space-x-2">
          <MessageCircle className="h-4 w-4" />
          <span>Contact</span>
        </Button>
      </div>
    </div>
  );
}