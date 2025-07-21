import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, TrendingUp, AlertCircle, Search, Filter } from "lucide-react";

const EasternWhisper = () => {
  const newsFeeds = [
    {
      id: 1,
      originalText: "比亚迪电池技术突破，固态电池量产在即",
      translatedText: "BYD battery technology breakthrough, solid-state battery mass production imminent",
      source: "Weibo",
      author: "@TechInsider_CN",
      timestamp: "2 minutes ago",
      relevanceScore: 95,
      sentiment: "bullish",
      ticker: "BYDDF",
      engagement: "12.3K",
      westernDelay: "45 min earlier"
    },
    {
      id: 2,
      originalText: "腾讯游戏部门Q4收入预期超预期",
      translatedText: "Tencent gaming division Q4 revenue expectations exceed forecasts",
      source: "Bilibili",
      author: "财经快报",
      timestamp: "5 minutes ago",
      relevanceScore: 88,
      sentiment: "bullish",
      ticker: "TCEHY",
      engagement: "8.7K",
      westernDelay: "1.2 hours earlier"
    },
    {
      id: 3,
      originalText: "中美贸易谈判新进展，科技股或受益",
      translatedText: "New progress in China-US trade talks, tech stocks may benefit",
      source: "Weibo",
      author: "@MarketWatch_Asia",
      timestamp: "8 minutes ago",
      relevanceScore: 92,
      sentiment: "bullish",
      ticker: "KWEB",
      engagement: "15.1K",
      westernDelay: "2.3 hours earlier"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-16">
        <div className="bg-gradient-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Eastern Whisper</h1>
                <p className="text-muted-foreground">Real-time intelligence from Chinese social media and news before it hits Western outlets</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-profit/10 text-profit border-profit/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Live Feed Active
                </Badge>
                <div className="text-sm text-muted-foreground">
                  <span className="text-profit font-medium">234</span> signals today
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
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search tickers, companies, keywords..."
                    className="pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-80"
                  />
                </div>
                <Button variant="trading" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-profit rounded-full animate-pulse" />
                <span className="text-muted-foreground">Real-time updates every 30 seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* News Feed */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="space-y-6">
            {newsFeeds.map((item) => (
              <div key={item.id} className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.source}</span>
                      <span className="text-sm text-muted-foreground">• {item.author}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs ${
                      item.sentiment === 'bullish' ? 'bg-profit/10 text-profit border-profit/30' : 
                      'bg-loss/10 text-loss border-loss/30'
                    }`}>
                      {item.sentiment}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.timestamp}
                      </div>
                      <div className="text-xs text-profit font-medium">{item.westernDelay}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{item.relevanceScore}</div>
                      <div className="text-xs text-muted-foreground">Relevance</div>
                    </div>
                  </div>
                </div>

                {/* Original Text */}
                <div className="mb-3 p-3 bg-secondary/20 rounded-lg border-l-4 border-l-primary/50">
                  <div className="text-sm text-muted-foreground mb-1">Original (Chinese):</div>
                  <div className="text-foreground font-medium">{item.originalText}</div>
                </div>

                {/* Translation */}
                <div className="mb-4 p-3 bg-background/50 rounded-lg border-l-4 border-l-profit/50">
                  <div className="text-sm text-muted-foreground mb-1">AI Translation:</div>
                  <div className="text-foreground">{item.translatedText}</div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">{item.ticker}</Badge>
                    <div className="text-sm text-muted-foreground">
                      {item.engagement} engagements
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="trading" size="sm">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Create Alert
                    </Button>
                    <Button variant="premium" size="sm">
                      View Chart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasternWhisper;