import React from 'react';
import { Check, X } from 'lucide-react';
import FuturisticButton from './FuturisticButton';
import { cn } from '../lib/utils';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  popular?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  popular = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "valorant-card relative",
        popular && "border-2 border-accent glow-effect",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold">
          POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 uppercase">{title}</h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-foreground/60 ml-2">{period}</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="text-accent flex-shrink-0 mt-0.5 mr-2" size={18} />
            ) : (
              <X className="text-foreground/40 flex-shrink-0 mt-0.5 mr-2" size={18} />
            )}
            <span className={feature.included ? "" : "text-foreground/40"}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <FuturisticButton
        variant={popular ? "default" : "outline"}
        className="w-full"
      >
        UPGRADE NOW
      </FuturisticButton>
    </div>
  );
};

export default PricingCard;