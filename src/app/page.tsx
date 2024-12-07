import AboutUsSection from "@/components/about-us";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";
import Hero from "@/components/Hero";
import OrderSection from "@/components/OrderSection";
import ReviewsSection from "@/components/Reviews";
export const wbShopUrl =
  "https://www.wildberries.ru/brands/311663974-prikleyka-menya";

export default function Home() {
  return (
    <div className="h-full pt-16">
      <Hero />
      <Features />
      <AboutUsSection />
      <ReviewsSection />
      <GallerySection />
      <OrderSection />
      <Footer />
    </div>
  );
}
