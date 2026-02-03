import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductionTransparency = () => {
  return (
    <section className="py-24 bg-card border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Transparent Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Made Responsibly,<br />
              <span className="text-muted-foreground">Worn Proudly.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe you should know exactly how your clothes are made.
              Our print-on-demand model eliminates waste and ensures premium quality.
            </p>
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/production">
                Read Full Transparency Report
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4 items-start p-6 bg-background rounded-xl border border-border/50">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Eco-Friendly Inks</h3>
                <p className="text-sm text-muted-foreground">Water-based inks that are safe for you and the planet.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-background rounded-xl border border-border/50">
              <div className="bg-primary/10 p-3 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Multi-point inspection for every single item.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-background rounded-xl border border-border/50">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Made to Order</h3>
                <p className="text-sm text-muted-foreground">Printed locally within 2-4 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionTransparency;
