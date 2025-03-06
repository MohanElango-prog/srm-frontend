import AboutSection from "@/components/About";
import Gallery from "@/components/Gallery";
import RealEstateHero from "@/components/Lander";
import OurProcess from "@/components/ourProcess";
import PartnersSection from "@/components/PartnersSection";
import PropertyListings from "@/components/ProperList";
import TestimonialsSection from "@/components/Testimonials";
import NewsVideosCarousel from "@/components/Videos";
import { LucideAlignEndVertical } from "lucide-react";

const HomePage = () => {
  return (
    <>
    <RealEstateHero />
    <AboutSection />
    <PartnersSection />
    <OurProcess />
    <PropertyListings />
    <TestimonialsSection />
    <NewsVideosCarousel />
    </>
  );
};

export default HomePage;
