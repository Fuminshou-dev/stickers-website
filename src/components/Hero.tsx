"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import arrowImage from "@/public/iconmonstr-arrow-right-thin-240.png";
import Link from "next/link";

function Hero() {
  return (
    <section id="main" className="h-full border-b select-none	">
      <div className="flex h-full flex-col justify-center items-center gap-4 text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500 inline-block">
            ПриклейКа Меня
          </h1>
          <h2 className="text-xl sm:text-2xl italic text-transparent bg-clip-text bg-gradient-to-b from-blue-500/50 to-purple-500/50">
            Стикеры для{" "}
            <strong className="underline font-bold dark:text-white/10 text-black/10">
              всех
            </strong>
          </h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl w-full sm:w-3/4 max-w-4xl">
          Лучшие стикеры.
        </p>
        <Button
          asChild
          variant={"outline"}
          size={"lg"}
          className="rounded-full mt-4   bg-gradient-to-b from-blue-500 to-purple-500"
        >
          <Link href={"#features"}>Узнать больше</Link>
        </Button>
        <Image
          className="dark:invert rotate-90 select-none opacity-50"
          src={arrowImage}
          width={48}
          alt="Arrow Image"
        ></Image>
      </div>
    </section>
  );
}

export default Hero;
