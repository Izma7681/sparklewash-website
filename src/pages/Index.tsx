import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContractSection from "@/components/ContractSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    {/* pt-[72px] offsets the fixed navbar height on all screens */}
    <main className="pt-[72px]">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContractSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  </>
);

export default Index;