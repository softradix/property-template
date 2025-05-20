import { 
  Search, Calendar, Check, Headset, Tag, Shield, 
  Home, Map, Heart, Star, Users, Laptop
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        {renderIcon(icon)}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function renderIcon(icon: string) {
  const iconProps = { className: "h-6 w-6" };
  
  switch (icon.toLowerCase()) {
    case 'search':
      return <Search {...iconProps} />;
    case 'calendar':
      return <Calendar {...iconProps} />;
    case 'check':
      return <Check {...iconProps} />;
    case 'headset':
      return <Headset {...iconProps} />;
    case 'tag':
      return <Tag {...iconProps} />;
    case 'shield':
      return <Shield {...iconProps} />;
    case 'home':
      return <Home {...iconProps} />;
    case 'map':
      return <Map {...iconProps} />;
    case 'heart':
      return <Heart {...iconProps} />;
    case 'star':
      return <Star {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    default:
      return <Laptop {...iconProps} />;
  }
}