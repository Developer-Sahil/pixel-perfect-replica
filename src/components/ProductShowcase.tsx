import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

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
                  className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <span className="flex items-center gap-2 text-white font-medium">
                  </span>
                </div >

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold">${product.price}</p>
                </div>
            </Link >
          ))}
        </div >
      </div >
    </section >
  );
};

export default ProductShowcase;
