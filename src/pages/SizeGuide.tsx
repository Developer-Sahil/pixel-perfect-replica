import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SizeGuide = () => {
  const sizes = [
    { size: "XS", chest: "18\"", length: "27\"", sleeve: "7.5\"" },
    { size: "S", chest: "20\"", length: "28\"", sleeve: "8\"" },
    { size: "M", chest: "22\"", length: "29\"", sleeve: "8.5\"" },
    { size: "L", chest: "24\"", length: "30\"", sleeve: "9\"" },
    { size: "XL", chest: "26\"", length: "31\"", sleeve: "9.5\"" },
    { size: "XXL", chest: "28\"", length: "32\"", sleeve: "10\"" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
              Size Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect fit for your Kingfando piece. All measurements are in inches and represent the garment dimensions when laid flat.
            </p>
          </div>

          {/* Measuring Guide */}
          <div className="mb-12 p-6 bg-card rounded-xl border border-border">
            <h2 className="text-2xl font-bold font-serif text-card-foreground mb-4">
              How to Measure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Chest Width</h3>
                <p className="text-sm text-muted-foreground">
                  Measure from armpit to armpit across the front of the shirt when laid flat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Length</h3>
                <p className="text-sm text-muted-foreground">
                  Measure from the top of the shoulder (where the collar meets the shoulder) down to the bottom hem.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Sleeve Length</h3>
                <p className="text-sm text-muted-foreground">
                  Measure from the shoulder seam to the end of the sleeve cuff.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Fit Note</h3>
                <p className="text-sm text-muted-foreground">
                  Our tees have a relaxed fit. If you prefer a tighter fit, consider sizing down. For a more oversized look, size up.
                </p>
              </div>
            </div>
          </div>

          {/* Size Chart */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-serif text-foreground mb-6">
              Size Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Size</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Chest</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Length</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Sleeve</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((item, index) => (
                    <tr 
                      key={item.size} 
                      className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                    >
                      <td className="py-4 px-4 font-semibold text-foreground">{item.size}</td>
                      <td className="py-4 px-4 text-muted-foreground">{item.chest}</td>
                      <td className="py-4 px-4 text-muted-foreground">{item.length}</td>
                      <td className="py-4 px-4 text-muted-foreground">{item.sleeve}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-card rounded-xl border border-border">
            <h2 className="text-2xl font-bold font-serif text-card-foreground mb-4">
              Still Unsure?
            </h2>
            <p className="text-muted-foreground mb-4">
              If you're between sizes or have specific fit concerns, we're here to help. Reach out to us at{" "}
              <a href="mailto:hello@kingfando.com" className="text-primary hover:underline">
                hello@kingfando.com
              </a>{" "}
              and we'll help you find the perfect size.
            </p>
            <Button asChild>
              <Link to="/#collection">View Collection</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
