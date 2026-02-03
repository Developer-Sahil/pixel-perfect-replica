import { Layers, Zap, Heart } from "lucide-react";
import Logo from "@/assets/TwistedPlant.png";

const values = [
  {
    title: "Authenticity",
    description: "We don't follow trends. We set our own standards.",
    icon: Zap,
  },
  {
    title: "Quality First",
    description: "Premium materials that stand the test of time.",
    icon: Layers,
  },
  {
    title: "Community",
    description: "Built for those who value expression and connection.",
    icon: Heart,
  },
];

const BrandStory = () => {
  return (
    <section id="story" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Born from Passion,
              <span className="block text-primary">Built to Last</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              TwistedPlant started with a simple belief: everyone deserves clothing
              that speaks as loudly as they do, without saying a word. We were tired of fast fashion compromises—
              flimsy fabrics, questionable ethics, and designs that fade after a few washes.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              We're here to craft premium streetwear that stands the test of time.
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
                <img src={Logo} alt="TwistedPlant" className="w-full max-w-[200px] h-auto mx-auto" />
                <p className="text-xl font-medium text-foreground mt-4">Est. 2026</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 md:p-6 shadow-lg border border-border transition-transform hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-primary">Premium</p>
              <p className="text-xs md:text-sm text-muted-foreground">Quality Guaranteed</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 md:p-6 shadow-lg border border-border transition-transform hover:scale-105">
              <p className="text-2xl md:text-3xl font-bold text-primary">New</p>
              <p className="text-xs md:text-sm text-muted-foreground">Fresh Designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
