import { Star } from 'lucide-react';
import Image from 'next/image';

interface PropertyReviewsProps {
  propertyId: string;
  rating: number;
  reviewCount: number;
}

export default function PropertyReviews({ propertyId, rating, reviewCount }: PropertyReviewsProps) {
  // This is a static component, in a real app you would fetch reviews from an API
  const reviews = [
    {
      id: 'review1',
      user: {
        name: 'Jennifer K.',
        image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      },
      rating: 5,
      date: '2 weeks ago',
      comment: 'Beautiful property with amazing views. Very clean and had all the amenities we needed for our stay. The host was responsive and helpful with local recommendations. Would definitely stay here again!',
    },
    {
      id: 'review2',
      user: {
        name: 'Marcus T.',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      },
      rating: 4,
      date: '1 month ago',
      comment: 'Great location and comfortable space. We enjoyed our time here. The kitchen was well-equipped and the beds were very comfortable. Only minor issue was the Wi-Fi was a bit slow at times.',
    },
    {
      id: 'review3',
      user: {
        name: 'Lisa P.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      },
      rating: 5,
      date: '2 months ago',
      comment: 'Absolutely perfect stay! The property exceeded our expectations. It was spotlessly clean, beautifully decorated, and had everything we needed. The location was ideal - quiet but close to all amenities. The host was a pleasure to deal with and made check-in and check-out so easy.',
    },
  ];
  
  return (
    <div>
      {/* Overall Rating */}
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= Math.round(rating)
                  ? 'text-yellow-500 fill-yellow-500'
                  : 'text-muted'
              }`}
            />
          ))}
        </div>
        <span className="font-semibold text-lg">{rating}</span>
        <span className="text-muted-foreground ml-1">({reviewCount} reviews)</span>
      </div>
      
      {/* Rating Categories - This would be dynamic in a real app */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { name: 'Cleanliness', value: 4.9 },
          { name: 'Accuracy', value: 4.8 },
          { name: 'Communication', value: 5.0 },
          { name: 'Location', value: 4.7 },
        ].map((category) => (
          <div key={category.name} className="flex items-center">
            <span className="text-sm min-w-24">{category.name}</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden mr-2">
              <div 
                className="h-full bg-primary rounded-full"
                style={{ width: `${(category.value / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm">{category.value}</span>
          </div>
        ))}
      </div>
      
      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-border last:border-0">
            <div className="flex items-center mb-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={review.user.image}
                  alt={review.user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{review.user.name}</div>
                <div className="text-sm text-muted-foreground">{review.date}</div>
              </div>
              <div className="flex ml-auto">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-foreground/90">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}