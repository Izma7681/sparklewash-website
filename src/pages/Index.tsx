import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContractSection from "@/components/ContractSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content (Offset for Fixed Navbar) */}
      <main className="pt-20">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <ContractSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
};

export default Index;
