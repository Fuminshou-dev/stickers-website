import AboutUsSection from "@/components/about-us";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";
// import Hero from "@/components/Hero";
import HeroWithMotion from "@/components/HeroWithMotion";
import OrderSection from "@/components/OrderSection";
import ReviewsSection from "@/components/Reviews";

export default function Home() {
  return (
    <div className="h-full pt-16">
      <HeroWithMotion />
      <Features />
      <AboutUsSection />
      <ReviewsSection />
      <GallerySection />
      <OrderSection />
      <Footer />
    </div>
  );
}
