import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 19, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using TwistedPlant's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Engage in any conduct that restricts others' use of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Products and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All products are subject to availability. We reserve the right to discontinue any product at any time. Prices are subject to change without notice. We make every effort to display accurate product information, but we do not warrant that descriptions or prices are error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                By placing an order, you represent that you are authorized to use the payment method provided. We reserve the right to refuse or cancel any order for any reason, including suspected fraud. All payments are processed securely through our payment providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Shipping times are estimates and not guaranteed. We are not responsible for delays caused by carriers, customs, or other factors beyond our control. Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please refer to our Shipping & Returns page for detailed information about our return policy. All returns must comply with our stated policies to be eligible for a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of TwistedPlant and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, TwistedPlant shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless TwistedPlant and its affiliates from any claims, damages, or expenses arising from your violation of these Terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@twistedplant.com" className="text-primary hover:underline">
                  legal@twistedplant.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
