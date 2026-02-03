import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import WhyTwistedPlant from "@/components/WhyTwistedPlant";
import ProductionTransparency from "@/components/ProductionTransparency";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <BrandStory />
        <WhyTwistedPlant />
        <ProductionTransparency />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
