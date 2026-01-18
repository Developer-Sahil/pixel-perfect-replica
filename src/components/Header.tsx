import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tight font-serif text-foreground">
          THREADCRAFT
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collection" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Collection
          </a>
          <a href="#story" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Story
          </a>
          <a href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <Button variant="default" size="sm" asChild>
            <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#collection"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
            <a
              href="#story"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#reviews"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <Button variant="default" size="sm" className="w-fit" asChild>
              <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
