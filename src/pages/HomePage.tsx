import AboutSection from "@/sections/home/About";
import Gallery from "@/components/Gallery";
import RealEstateHero from "@/sections/home/Lander";
import OurProcess from "@/components/ourProcess";
import ServicesCarousel from "@/sections/home/ourServies";
import PartnersSection from "@/sections/home/PartnersSection";
import PropertyListings from "@/sections/home/ProperList";
import TestimonialsSection from "@/sections/home/Testimonials";
import NewsVideosCarousel from "@/sections/home/Videos";
import { LucideAlignEndVertical } from "lucide-react";

const HomePage = () => {
  return (
    <>
    <RealEstateHero />
    {/* <AboutSection /> */}
    {/* <PartnersSection />
    <ServicesCarousel />
    <OurProcess /> */}
    <PropertyListings />
    {/* <TestimonialsSection /> */}
    <NewsVideosCarousel />
    </>
  );
};

export default HomePage;
