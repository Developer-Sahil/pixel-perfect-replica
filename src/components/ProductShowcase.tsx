import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: "1",
    name: "Midnight Essential",
    category: "Basics",
    price: "$49",
    image: product1,
  },
  {
    id: "2",
    name: "Cloud Nine",
    category: "Premium",
    price: "$59",
    image: product2,
  },
  {
    id: "3",
    name: "Urban Fog",
    category: "Street",
    price: "$54",
    image: product3,
  },
  {
    id: "4",
    name: "Deep Ocean",
    category: "Limited",
    price: "$69",
    image: product4,
  },
];

const ProductShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="collection" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-card-foreground mb-4">
            The Collection
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Each piece is designed with intention, crafted with premium materials, 
            and built to make a statement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative block"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-lg bg-background aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div 
                  className={`absolute inset-0 bg-foreground/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="flex items-center gap-2 text-primary-foreground font-medium">
                    View Product <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full text-foreground">
                  {product.category}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-semibold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
