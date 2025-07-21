import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Globe, BarChart3, Filter, Calendar } from "lucide-react";

const NarrativeTracker = () => {
  const narrativeComparisons = [
    {
      id: 1,
      topic: "China-Taiwan Relations",
      easternSentiment: -2.3,
      westernSentiment: -4.1,
      divergence: 1.8,
      trend: "widening",
      volume: "High",
      keyPoints: {
        eastern: ["Peaceful reunification dialogue", "Economic cooperation focus", "Cultural exchange emphasis"],
        western: ["Military tension concerns", "Democratic sovereignty", "Strategic alliance implications"]
      },
      lastUpdated: "15 min ago"
    },
    {
      id: 2,
      topic: "US-China Trade Relations",
      easternSentiment: 1.2,
      westernSentiment: -0.8,
      divergence: 2.0,
      trend: "stable",
      volume: "Medium",
      keyPoints: {
        eastern: ["Mutual economic benefits", "Technology collaboration", "Supply chain stability"],
        western: ["Intellectual property concerns", "Trade deficit issues", "Strategic competition"]
      },
      lastUpdated: "22 min ago"
    },
    {
      id: 3,
      topic: "Climate Change Cooperation",
      easternSentiment: 3.1,
      westernSentiment: 2.8,
      divergence: 0.3,
      trend: "converging",
      volume: "Low",
      keyPoints: {
        eastern: ["Green Belt Road Initiative", "Carbon neutrality commitment", "Clean energy leadership"],
        western: ["Global cooperation necessity", "Technology sharing", "Paris Agreement compliance"]
      },
      lastUpdated: "1 hour ago"
    }
  ];

  const getSentimentColor = (sentiment: number) => {
    if (sentiment > 1) return "text-profit";
    if (sentiment < -1) return "text-loss";
    return "text-neutral";
  };

  const getSentimentBg = (sentiment: number) => {
    if (sentiment > 1) return "bg-profit/10 border-profit/30";
    if (sentiment < -1) return "bg-loss/10 border-loss/30";
    return "bg-neutral/10 border-neutral/30";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-16">
        <div className="bg-gradient-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Narrative Tracker</h1>
                <p className="text-muted-foreground">Compare government and media narratives to identify macro trends and geopolitical opportunities</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  12 Active Topics
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Updated every <span className="text-primary font-medium">5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="trading" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Topic Filters
                </Button>
                <Button variant="trading" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Time Range
                </Button>
                <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
                  <option>All Regions</option>
                  <option>Asia-Pacific</option>
                  <option>Europe</option>
                  <option>Americas</option>
                </select>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-profit rounded-full" />
                  <span>Positive Sentiment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-loss rounded-full" />
                  <span>Negative Sentiment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-neutral rounded-full" />
                  <span>Neutral</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Comparisons */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="space-y-8">
            {narrativeComparisons.map((item) => (
              <div key={item.id} className="bg-card border border-border/50 rounded-xl p-8 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.topic}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Volume: {item.volume}</span>
                      <span>Last updated: {item.lastUpdated}</span>
                      <Badge variant={item.trend === 'widening' ? 'destructive' : item.trend === 'converging' ? 'default' : 'secondary'}>
                        {item.trend}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {Math.abs(item.divergence).toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">Divergence Score</div>
                  </div>
                </div>

                {/* Sentiment Comparison */}
                <div className="grid lg:grid-cols-2 gap-8 mb-6">
                  {/* Eastern Narrative */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        Eastern Narrative
                      </h4>
                      <div className={`px-3 py-1 rounded-full border ${getSentimentBg(item.easternSentiment)}`}>
                        <span className={`font-medium ${getSentimentColor(item.easternSentiment)}`}>
                          {item.easternSentiment > 0 ? '+' : ''}{item.easternSentiment.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.keyPoints.eastern.map((point, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Western Narrative */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Globe className="w-4 h-4 text-accent-foreground" />
                        Western Narrative
                      </h4>
                      <div className={`px-3 py-1 rounded-full border ${getSentimentBg(item.westernSentiment)}`}>
                        <span className={`font-medium ${getSentimentColor(item.westernSentiment)}`}>
                          {item.westernSentiment > 0 ? '+' : ''}{item.westernSentiment.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {item.keyPoints.western.map((point, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sentiment Trend Visualization */}
                <div className="bg-secondary/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Sentiment Trend (Last 24h)</span>
                    <div className="flex items-center gap-2">
                      {item.trend === 'widening' ? (
                        <TrendingDown className="w-4 h-4 text-loss" />
                      ) : item.trend === 'converging' ? (
                        <TrendingUp className="w-4 h-4 text-profit" />
                      ) : (
                        <div className="w-4 h-4 bg-neutral rounded-full" />
                      )}
                      <span className="text-sm text-muted-foreground capitalize">{item.trend}</span>
                    </div>
                  </div>
                  
                  {/* Simple trend bar */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary/50 to-primary transition-all duration-500"
                          style={{ width: `${Math.min(100, Math.abs(item.easternSentiment) * 20)}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Eastern</div>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">vs</div>
                    <div className="flex-1">
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent/50 to-accent transition-all duration-500"
                          style={{ width: `${Math.min(100, Math.abs(item.westernSentiment) * 20)}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Western</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="premium" size="sm">
                    View Timeline
                  </Button>
                  <Button variant="trading" size="sm">
                    Set Alert
                  </Button>
                  <Button variant="ghost" size="sm">
                    Export Analysis
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrativeTracker;