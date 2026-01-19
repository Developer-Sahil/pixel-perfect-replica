import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tshirt.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium streetwear t-shirt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-foreground mb-6 animate-slide-up">
            Wear Your
            <span className="block text-primary">Identity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-slide-up animation-delay-200">
            Premium streetwear crafted for those who refuse to blend in. 
            Every thread tells a story of rebellion, quality, and uncompromising style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Button size="lg" className="group" asChild>
              <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#story">Our Story</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-border/50 animate-fade-in animation-delay-600">
            <div>
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Premium Cotton</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">Made to</p>
              <p className="text-sm text-muted-foreground">Order</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">Printed on Premium</p>
              <p className="text-sm text-muted-foreground">220 GSM Cotton</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
