const ProductionTransparency = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-card-foreground mb-4">
              Production & Quality Transparency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in complete transparency about how your clothing is made.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-serif text-card-foreground mb-4">
                Print on Demand
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every design is printed only when you order it. This eliminates waste, 
                prevents overproduction, and ensures your piece is made specifically for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our printing process uses eco-friendly, water-based inks that produce 
                vibrant, long-lasting colors while minimizing environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-card-foreground mb-4">
                Premium Materials
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use 220 GSM premium cotton—a heavyweight fabric that feels substantial 
                and maintains its shape through countless wears and washes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The fabric is pre-shrunk and colorfast, ensuring your Kingfando piece 
                looks as good on day 100 as it does on day one.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-card-foreground mb-4">
                Quality Standards
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every print undergoes quality inspection before shipping. We check for 
                color accuracy, print alignment, and fabric integrity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our standards ensure that what you see is what you get—no surprises, 
                no compromises, just quality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-card-foreground mb-4">
                Shipping & Fulfillment
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Once you place your order, we print your design within 1-2 business days, 
                then ship it to you within 3-7 business days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All items are carefully packaged in sustainable, recyclable materials to 
                ensure they arrive in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionTransparency;
