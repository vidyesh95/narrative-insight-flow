import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, User, DollarSign, Calendar, Bell, Copy, Search, Filter } from "lucide-react";

const PortfolioPolitics = () => {
  const politicians = [
    {
      id: 1,
      name: "Nancy Pelosi",
      party: "Democratic",
      country: "USA",
      position: "House Speaker (Former)",
      avatar: "👩‍💼",
      totalValue: "$52.3M",
      monthlyReturn: 12.4,
      totalTrades: 34,
      recentTrades: [
        { date: "2024-01-15", ticker: "NVDA", action: "BUY", amount: "$1.2M", currentPL: 24.3, status: "profit" },
        { date: "2024-01-12", ticker: "TSLA", action: "SELL", amount: "$800K", currentPL: -5.2, status: "loss" },
        { date: "2024-01-10", ticker: "AAPL", action: "BUY", amount: "$2.1M", currentPL: 8.1, status: "profit" }
      ]
    },
    {
      id: 2,
      name: "Dan Crenshaw",
      party: "Republican",
      country: "USA",
      position: "House Representative",
      avatar: "👨‍💼",
      totalValue: "$8.7M",
      monthlyReturn: 18.7,
      totalTrades: 19,
      recentTrades: [
        { date: "2024-01-14", ticker: "LMT", action: "BUY", amount: "$450K", currentPL: 15.6, status: "profit" },
        { date: "2024-01-11", ticker: "BA", action: "BUY", amount: "$320K", currentPL: 9.2, status: "profit" },
        { date: "2024-01-08", ticker: "RTX", action: "SELL", amount: "$280K", currentPL: 22.1, status: "profit" }
      ]
    },
    {
      id: 3,
      name: "Josh Gottheimer",
      party: "Democratic",
      country: "USA",
      position: "House Representative",
      avatar: "👨‍💼",
      totalValue: "$15.2M",
      monthlyReturn: -3.4,
      totalTrades: 28,
      recentTrades: [
        { date: "2024-01-13", ticker: "META", action: "SELL", amount: "$650K", currentPL: -12.3, status: "loss" },
        { date: "2024-01-09", ticker: "GOOGL", action: "BUY", amount: "$1.1M", currentPL: 4.7, status: "profit" },
        { date: "2024-01-07", ticker: "AMZN", action: "SELL", amount: "$890K", currentPL: -8.9, status: "loss" }
      ]
    }
  ];

  const getReturnColor = (value: number) => {
    return value > 0 ? "text-profit" : "text-loss";
  };

  const getReturnBg = (value: number) => {
    return value > 0 ? "bg-profit/10 border-profit/30" : "bg-loss/10 border-loss/30";
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
                <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Politics</h1>
                <p className="text-muted-foreground">Monitor and analyze disclosed trades from influential politicians worldwide</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  <User className="w-3 h-3 mr-1" />
                  127 Politicians Tracked
                </Badge>
                <div className="text-sm text-muted-foreground">
                  <span className="text-profit font-medium">43</span> new trades this week
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
                    placeholder="Search politicians, tickers..."
                    className="pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent w-64"
                  />
                </div>
                <Button variant="trading" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
                  <option>All Countries</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="premium" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Alerts
                </Button>
                <Button variant="hero" size="sm">
                  Copy Top Performers
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Politicians Grid */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="space-y-8">
            {politicians.map((politician) => (
              <div key={politician.id} className="bg-card border border-border/50 rounded-xl shadow-card overflow-hidden">
                {/* Politician Header */}
                <div className="p-6 bg-gradient-card border-b border-border/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl">
                        {politician.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{politician.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline">{politician.party}</Badge>
                          <span>{politician.position}</span>
                          <span>• {politician.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground mb-1">{politician.totalValue}</div>
                      <div className={`text-sm font-medium flex items-center gap-1 ${getReturnColor(politician.monthlyReturn)}`}>
                        {politician.monthlyReturn > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {politician.monthlyReturn > 0 ? '+' : ''}{politician.monthlyReturn}% (30d)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Total Trades: </span>
                        <span className="font-medium text-foreground">{politician.totalTrades}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full border ${getReturnBg(politician.monthlyReturn)}`}>
                        <span className={`text-xs font-medium ${getReturnColor(politician.monthlyReturn)}`}>
                          {politician.monthlyReturn > 0 ? 'Outperforming' : 'Underperforming'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="trading" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Follow
                      </Button>
                      <Button variant="premium" size="sm">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Trades
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Recent Trades */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Recent Trades
                  </h4>
                  
                  <div className="space-y-3">
                    {politician.recentTrades.map((trade, index) => (
                      <div key={index} className="flex items-center justify-between py-3 px-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{trade.date}</span>
                          </div>
                          
                          <Badge variant="outline" className="font-mono">{trade.ticker}</Badge>
                          
                          <Badge variant={trade.action === 'BUY' ? 'default' : 'secondary'}>
                            {trade.action}
                          </Badge>
                          
                          <span className="font-medium text-foreground">{trade.amount}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className={`text-sm font-medium ${getReturnColor(trade.currentPL)}`}>
                              {trade.currentPL > 0 ? '+' : ''}{trade.currentPL}%
                            </div>
                            <div className="text-xs text-muted-foreground">Current P&L</div>
                          </div>
                          
                          <div className={`w-3 h-3 rounded-full ${
                            trade.status === 'profit' ? 'bg-profit' : 'bg-loss'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="ghost" size="sm">
                      View All Trades
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Politicians
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPolitics;