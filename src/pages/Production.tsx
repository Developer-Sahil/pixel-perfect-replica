import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductionTransparency from "@/components/ProductionTransparency";

const Production = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-foreground mb-6">
                        Production Transparency
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
                        We believe in complete transparency about how your clothing is made.
                        From our materials to our partners, here is everything you need to know.
                    </p>
                </div>
                {/* We reuse the component here, but we will modify the component itself to be adaptable or copy the full content here if we want to slim down the component */}
                {/* Actually, the plan is to simplify the component for home, so I should put the FULL content here directly. */}
                <section className="pb-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto grid gap-16">
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div>
                                    <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Print on Demand</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Every design is printed only when you order it. This eliminates waste,
                                        prevents overproduction, and ensures your piece is made specifically for you.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our printing process uses eco-friendly, water-based inks that produce
                                        vibrant, long-lasting colors while minimizing environmental impact.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Premium Materials</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We use premium bio-washed cotton—a fabric that feels substantial,
                                        soft against the skin, and maintains its shape through countless wears.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The fabric is pre-shrunk and colorfast, ensuring your TwistedPlant piece
                                        looks as good on day 100 as it does on day one.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div>
                                    <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Quality Standards</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Every print undergoes quality inspection before shipping. We check for
                                        color accuracy, vibrance, and fabric integrity.
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our standards ensure that what you see is what you get—no surprises,
                                        no compromises, just quality.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold font-serif text-foreground mb-4">Shipping & Fulfillment</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        Once you place your order, we print your design within 2-4 business days,
                                        then ship it to you.
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
            </main>
            <Footer />
        </div>
    );
};

export default Production;
