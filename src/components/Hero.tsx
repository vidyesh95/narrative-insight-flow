import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Trading Intelligence Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>

      {/* Animated Data Points */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-profit rounded-full animate-pulse-glow" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse-glow" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-profit rounded-full animate-pulse-glow" style={{animationDelay: '3s'}} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get the Trading Edge{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Before
            </span>{" "}
            the Market Moves
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Unified intelligence from Chinese media, political trades, and geopolitical narratives
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-profit rounded-full" />
              <span>Real-time Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Legal & Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-profit rounded-full" />
              <span>Trusted by 10,000+ Traders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;