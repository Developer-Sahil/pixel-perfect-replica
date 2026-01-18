import { useState } from "react";
import { ArrowRight, Gift, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to the family!",
        description: "Check your inbox for your exclusive 15% off code.",
      });
    }
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
            <Gift className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">
              Exclusive Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-foreground mb-4">
            Get 15% Off Your First Order
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-8">
            Be among the first to shop our collection. Get early access to new drops, 
            exclusive discounts, and streetwear inspiration delivered to your inbox.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">You're in! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
              />
              <Button 
                type="submit" 
                variant="secondary"
                size="lg" 
                className="group whitespace-nowrap"
              >
                Get My Code
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam. Unsubscribe anytime. Your data stays private.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
