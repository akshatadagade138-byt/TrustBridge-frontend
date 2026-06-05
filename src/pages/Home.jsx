import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import CenterQuote from "@/components/sections/CenterQuote";
import TrustValueGrid from "@/components/sections/TrustValueGrid";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import CouplesServices from "@/components/sections/CouplesServices";
import CorporateServices from "@/components/sections/CorporateServices";
import BusinessServices from "@/components/sections/BusinessServices";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main data-testid="home-page">
      {/* DARK */}
      <HeroSection />
      {/* LIGHT */}
      <WhySection />
      {/* DARK */}
      <CenterQuote />
      {/* LIGHT */}
      <TrustValueGrid />
      {/* DARK */}
      <WhoThisIsFor />
      {/* LIGHT */}
      <CouplesServices />
      {/* LIGHT */}
      <CorporateServices />
      {/* LIGHT */}
      <BusinessServices />
      {/* LIGHT */}
      <GallerySection />
      {/* DARK */}
      <ContactSection />
    </main>
  );
}
