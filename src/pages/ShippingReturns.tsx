import { Truck, RefreshCw, Clock, Globe, Package, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Shipping & Returns</h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about getting your order and our hassle-free return process.
            </p>
          </div>

          {/* Quick Overview Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">30-Day Returns</h3>
                <p className="text-sm text-muted-foreground">Easy & hassle-free</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 text-center">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Global Shipping</h3>
                <p className="text-sm text-muted-foreground">Worldwide delivery</p>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Shipping Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Domestic Shipping (United States)</h3>
                <div className="bg-muted/30 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 text-foreground font-medium">Shipping Method</th>
                        <th className="text-left p-4 text-foreground font-medium">Delivery Time</th>
                        <th className="text-left p-4 text-foreground font-medium">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="p-4 text-muted-foreground">Standard Shipping</td>
                        <td className="p-4 text-muted-foreground">5-7 business days</td>
                        <td className="p-4 text-muted-foreground">$4.99 (Free over $50)</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Express Shipping</td>
                        <td className="p-4 text-muted-foreground">2-3 business days</td>
                        <td className="p-4 text-muted-foreground">$9.99</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Overnight Shipping</td>
                        <td className="p-4 text-muted-foreground">1 business day</td>
                        <td className="p-4 text-muted-foreground">$19.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">International Shipping</h3>
                <div className="bg-muted/30 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 text-foreground font-medium">Region</th>
                        <th className="text-left p-4 text-foreground font-medium">Delivery Time</th>
                        <th className="text-left p-4 text-foreground font-medium">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="p-4 text-muted-foreground">Canada</td>
                        <td className="p-4 text-muted-foreground">7-10 business days</td>
                        <td className="p-4 text-muted-foreground">$12.99</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Europe</td>
                        <td className="p-4 text-muted-foreground">10-14 business days</td>
                        <td className="p-4 text-muted-foreground">$19.99</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Rest of World</td>
                        <td className="p-4 text-muted-foreground">14-21 business days</td>
                        <td className="p-4 text-muted-foreground">$24.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  * International orders may be subject to customs duties and taxes, which are the responsibility of the customer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Order Processing</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Orders placed before 2 PM EST are processed the same business day</li>
                  <li>Orders placed after 2 PM EST or on weekends are processed the next business day</li>
                  <li>You'll receive a shipping confirmation email with tracking information once your order ships</li>
                  <li>Please allow up to 24 hours for tracking information to update</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Returns Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-primary" />
              Returns & Exchanges
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Return Policy</h3>
                <p className="text-muted-foreground mb-4">
                  We want you to love your purchase! If you're not completely satisfied, we offer hassle-free returns within 30 days of delivery.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Items must be unworn, unwashed, and in original condition with tags attached</li>
                  <li>Items must be returned in their original packaging</li>
                  <li>Sale items and items marked "Final Sale" are not eligible for returns</li>
                  <li>Undergarments, swimwear, and personalized items cannot be returned for hygiene reasons</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">How to Return</h3>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Contact our customer service team or log into your account to initiate a return</li>
                  <li>Print the prepaid return shipping label we'll send you</li>
                  <li>Pack your items securely in the original packaging</li>
                  <li>Attach the return label and drop off at any authorized shipping location</li>
                  <li>Once received and inspected, your refund will be processed within 5-7 business days</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Exchanges</h3>
                <p className="text-muted-foreground">
                  Need a different size or color? We offer free exchanges for domestic orders. Simply indicate your preference when initiating your return, and we'll ship your new item as soon as we receive your return (subject to availability).
                </p>
              </div>
            </div>
          </section>

          {/* Refunds Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" />
              Refunds
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Refunds are processed to your original payment method within 5-7 business days after we receive and inspect your return.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Credit card refunds may take an additional 3-5 business days to appear on your statement</li>
                <li>PayPal refunds typically appear within 24-48 hours</li>
                <li>Gift card purchases will be refunded as store credit</li>
                <li>Original shipping costs are non-refundable unless the return is due to our error</li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Our customer service team is ready to assist you with any shipping or return questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingReturns;
