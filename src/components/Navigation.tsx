import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">QuantNarrative</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/eastern-whisper" 
              className={`transition-colors ${isActive('/eastern-whisper') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Eastern Whisper
            </Link>
            <Link 
              to="/narrative-tracker" 
              className={`transition-colors ${isActive('/narrative-tracker') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Narrative Tracker
            </Link>
            <Link 
              to="/portfolio-politics" 
              className={`transition-colors ${isActive('/portfolio-politics') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Portfolio Politics
            </Link>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/eastern-whisper" 
                className={`transition-colors ${isActive('/eastern-whisper') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Eastern Whisper
              </Link>
              <Link 
                to="/narrative-tracker" 
                className={`transition-colors ${isActive('/narrative-tracker') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Narrative Tracker
              </Link>
              <Link 
                to="/portfolio-politics" 
                className={`transition-colors ${isActive('/portfolio-politics') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio Politics
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="hero" size="sm">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;