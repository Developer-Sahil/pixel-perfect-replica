import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
// import Testimonials from "@/components/Testimonials";
// import EmailCapture from "@/components/EmailCapture";
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
        <ProductionTransparency />
        {/* <Testimonials /> */}
        {/* <EmailCapture /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
