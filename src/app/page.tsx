import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import SecondHero from "@/components/SecondHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <SecondHero />
      <Reviews />
      <Button
        className="w-3/4 h-48 m-24 text-5xl font-bold"
        variant={"outline"}
        asChild
      >
        <Link
          href={"https://www.wildberries.ru/brands/311578698-nakleykamenya"}
        >
          Заказать
        </Link>
      </Button>
    </div>
  );
}
