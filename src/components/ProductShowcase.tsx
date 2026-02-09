import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductShowcase = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: () => fetchProducts(20),
  });

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.node.title} added to cart`);
  };

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

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-5 w-3/4 mt-4" />
                <Skeleton className="h-4 w-1/4 mt-2" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium text-card-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Products will appear here once they're added to the store.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const image = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              return (
                <Link
                  key={product.node.id}
                  to={`/product/${product.node.handle}`}
                  className="group relative block"
                  onMouseEnter={() => setHoveredId(product.node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-background aspect-square">
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.altText || product.node.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
                        hoveredId === product.node.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="flex items-center gap-2 text-white font-medium">
                        View Product <ArrowRight className="h-4 w-4" />
                      </span>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="gap-1"
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={isCartLoading}
                      >
                        {isCartLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <ShoppingBag className="h-3 w-3" />}
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-card-foreground group-hover:text-primary transition-colors">
                      {product.node.title}
                    </h3>
                    <p className="text-muted-foreground font-semibold">
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
