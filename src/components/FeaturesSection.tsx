import FeatureCard from "./FeatureCard";
import { Globe, Users, TrendingUp } from "lucide-react";
import easternWhisperMockup from "@/assets/eastern-whisper-mockup.jpg";
import narrativeTrackerMockup from "@/assets/narrative-tracker-mockup.jpg";
import portfolioPoliticsMockup from "@/assets/portfolio-politics-mockup.jpg";

const FeaturesSection = () => {
  const features = [
    {
      title: "Eastern Whisper",
      description: "Early News Intelligence",
      features: [
        "Bilibili/Weibo monitoring",
        "Instant translation",
        "Relevance scoring",
        "Timing advantage analysis"
      ],
      mockupImage: easternWhisperMockup,
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Narrative Tracker",
      description: "Geopolitical Analysis",
      features: [
        "State media monitoring",
        "Sentiment analysis",
        "Narrative comparison",
        "Macro trend identification"
      ],
      mockupImage: narrativeTrackerMockup,
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Portfolio Politics",
      description: "Political Trade Tracking",
      features: [
        "Real-time alerts",
        "Performance tracking",
        "Copy-trading insights",
        "Global politician coverage"
      ],
      mockupImage: portfolioPoliticsMockup,
      icon: <Users className="w-6 h-6" />,
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Three Core Modules for
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Information Edge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access intelligence from non-traditional sources before it reaches mainstream markets. 
            Each module provides unique insights to give you the trading advantage.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl border border-border/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Your Information Edge?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of traders already using QuantNarrative to stay ahead of market moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-glow">
                Start Free Trial
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;