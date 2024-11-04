import Hero from "@/components/Hero";
import SecondHero from "@/components/SecondHero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SecondHero />
    </div>
  );
}
