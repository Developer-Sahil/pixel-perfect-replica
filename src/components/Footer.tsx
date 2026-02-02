import { Instagram, Twitter, Facebook, ExternalLink } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" });

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-card text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="text-3xl font-bold tracking-tight font-serif">
              <span className="text-primary">Twisted</span>
              <span className="text-background">Plant</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Premium streetwear for those who refuse to blend in.
              Quality, sustainability, and style—without compromise.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/twistedplant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://twitter.com/twistedplant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com/twistedplant"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Join Our Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">Get exclusive drops and updates.</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/10 border-background/20 text-foreground placeholder:text-muted-foreground focus:border-background/40"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://shopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Shop All <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#collection" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collection
                </a>
              </li>
              <li>
                <a href="#story" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/size-guide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="/shipping-returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TwistedPlant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
