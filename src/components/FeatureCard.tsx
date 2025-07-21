import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  mockupImage: string;
  icon: React.ReactNode;
  gradient?: string;
  linkTo: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  features, 
  mockupImage, 
  icon,
  gradient = "bg-gradient-card",
  linkTo
}: FeatureCardProps) => {
  return (
    <div className={`${gradient} rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated group`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup Image */}
      <div className="mb-6 rounded-xl overflow-hidden border border-border/30">
        <img 
          src={mockupImage} 
          alt={`${title} Interface`}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* CTA */}
      <Link to={linkTo}>
        <Button variant="premium" className="w-full group-hover:bg-primary group-hover:text-white">
          Explore {title}
          <ArrowRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
};

export default FeatureCard;