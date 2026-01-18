import { Award, Leaf, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "We use organic cotton and eco-friendly dyes to minimize our environmental footprint.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every t-shirt is crafted with 220gsm heavyweight cotton for lasting comfort.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description: "Ethically manufactured in small batches by artisans who take pride in their craft.",
  },
];

const BrandStory = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Story
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Born from the Streets,
              <span className="block text-primary">Built to Last</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              THREADCRAFT started in a small garage in Brooklyn, driven by a simple belief: 
              everyone deserves clothing that feels as good as it looks. We were tired of 
              fast fashion compromises—flimsy fabrics, questionable ethics, and designs 
              that fade after a few washes.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Today, we're proud to craft premium streetwear that stands the test of time. 
              Every piece is a statement of quality, sustainability, and unapologetic style.
            </p>

            <div className="grid gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent to-primary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl font-bold font-serif text-foreground/10">TC</p>
                <p className="text-xl font-medium text-foreground mt-4">Since 2020</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-lg border border-border">
              <p className="text-3xl font-bold text-primary">4.9★</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-6 shadow-lg border border-border">
              <p className="text-3xl font-bold text-primary">120+</p>
              <p className="text-sm text-muted-foreground">Unique Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
