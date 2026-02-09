import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Truck, Shield, ShoppingBag, Heart, RefreshCw, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  const { data: product, isLoading } = useQuery({
    queryKey: ["shopify-product", id],
    queryFn: () => fetchProductByHandle(id!),
    enabled: !!id,
  });

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIdx]?.node;
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.title} added to cart`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square rounded-2xl" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/#collection">
            <Button>Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const selectedVariant = product.variants.edges[selectedVariantIdx]?.node;
  const image = product.images.edges[0]?.node;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/#collection"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card">
                {image ? (
                  <img src={image.url} alt={image.altText || product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-3xl font-bold text-primary">
                  {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

              {/* Variant Selection */}
              {product.options.map((option) => (
                <div key={option.name} className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">{option.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((v, idx) => {
                      const optVal = v.node.selectedOptions.find(o => o.name === option.name)?.value;
                      if (!optVal) return null;
                      // Avoid duplicates for this option
                      const alreadyShown = product.variants.edges.findIndex(
                        (v2) => v2.node.selectedOptions.find(o => o.name === option.name)?.value === optVal
                      );
                      if (alreadyShown !== idx) return null;

                      const isSelected = selectedVariant?.selectedOptions.find(o => o.name === option.name)?.value === optVal;
                      return (
                        <button
                          key={optVal}
                          onClick={() => {
                            const matchIdx = product.variants.edges.findIndex(
                              (v2) => v2.node.selectedOptions.find(o => o.name === option.name)?.value === optVal
                            );
                            if (matchIdx >= 0) setSelectedVariantIdx(matchIdx);
                          }}
                          className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            isSelected
                              ? "border-primary text-primary bg-primary/10"
                              : "border-border text-foreground hover:border-primary hover:text-primary"
                          }`}
                        >
                          {optVal}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="flex gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={isCartLoading || !selectedVariant?.availableForSale}
                >
                  {isCartLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <ShoppingBag className="h-5 w-5" />
                  )}
                  {selectedVariant?.availableForSale ? "Add to Cart" : "Sold Out"}
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-card rounded-xl">
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-5 w-5 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RefreshCw className="h-5 w-5 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">30-Day Returns</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-5 w-5 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Quality Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
