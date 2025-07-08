import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PhilosophySection from "@/components/philosophy-section";
import PricingSection from "@/components/pricing-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import WhatsAppButton from "@/components/whatsapp-button";
import Lightbox from "@/components/lightbox";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PhilosophySection />
      {/* <PricingSection /> */}
      <PortfolioSection />
      <ContactSection />
      <WhatsAppButton />
      <Lightbox />
    </div>
  );
}
