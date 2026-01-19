import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Truck, Shield, ShoppingBag, Heart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link 
            to="/#collection" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.category}
              </Badge>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary">${product.price}</p>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-foreground mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-foreground mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
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

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 mb-8">
                <TabsTrigger 
                  value="details" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger 
                  value="care" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Care Instructions
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Material</h4>
                    <p>{product.material}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Fit</h4>
                    <p>Regular fit with relaxed shoulders</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Origin</h4>
                    <p>Ethically manufactured</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Sustainability</h4>
                    <p>Made with eco-friendly processes</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="care" className="text-muted-foreground">
                <ul className="space-y-2">
                  <li>• {product.care}</li>
                  <li>• Do not bleach</li>
                  <li>• Iron on low heat if needed</li>
                  <li>• Do not dry clean</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="text-muted-foreground">
                <div className="space-y-4">
                  <p>We offer free standard shipping on all orders.</p>
                  <p><strong className="text-foreground">Estimated Delivery:</strong> 5-7 business days</p>
                  <p><strong className="text-foreground">Express Shipping:</strong> 2-3 business days (additional fee applies)</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
