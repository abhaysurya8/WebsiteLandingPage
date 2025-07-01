import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pr-[220px]">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
