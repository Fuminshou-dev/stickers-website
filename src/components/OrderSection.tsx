import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import arrowImage from "@/public/iconmonstr-arrow-right-thin-240.png";

import Image from "next/image";
import { wbShopUrl } from "@/lib/constants";
import { Section } from "./Section";

export default function OrderSection() {
  return (
    <Section id="order" className="w-full border-b py-12">
      <div className="flex flex-col gap-4 justify-center items-center container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-0 justify-center items-center text-center">
          <h2 className="text-2xl md:text-4xl">Понравилось? Заказывай.</h2>
          <Image
            className="dark:invert rotate-90 select-none"
            src={arrowImage}
            width={48}
            alt="Arrow Image"
          ></Image>
        </div>
        <Button
          variant={"ghost"}
          className="border p-8 md:p-16 text-4xl md:text-6xl bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500 transition duration-300 ease-in-out"
          asChild
        >
          <Link href={wbShopUrl}>Заказать</Link>
        </Button>
      </div>
    </Section>
  );
}
