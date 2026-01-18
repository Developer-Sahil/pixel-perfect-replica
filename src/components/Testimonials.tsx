import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Best t-shirt I've ever owned. The fabric is incredibly soft yet durable. After 20+ washes, it still looks brand new.",
    avatar: "MC",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Brooklyn, NY",
    rating: 5,
    text: "Finally, a brand that understands quality over quantity. The fit is perfect and the designs are fire. Obsessed!",
    avatar: "SW",
  },
  {
    id: 3,
    name: "Jordan Reed",
    location: "Austin, TX",
    rating: 5,
    text: "Sustainable, comfortable, and stylish. What more could you want? I've already bought 5 more for my friends.",
    avatar: "JR",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-card-foreground mb-4">
            What To Expect
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Here's the experience we're committed to delivering with every order.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-8 relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-medium">5-Star Quality Commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
