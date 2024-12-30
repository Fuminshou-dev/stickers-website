"use client";
import review1 from "@/public/review1.jpg";
import review10 from "@/public/review10.jpg";
import review11 from "@/public/review11.jpg";
import review12 from "@/public/review12.jpg";
import review2 from "@/public/review2.jpg";
import review3 from "@/public/review3.jpg";
import review4 from "@/public/review4.jpg";
import review5 from "@/public/review5.jpg";
import review6 from "@/public/review6.jpg";
import review7 from "@/public/review7.jpg";
import review8 from "@/public/review8.jpg";
import review9 from "@/public/review9.jpg";
import Image from "next/image";
import { useState } from "react";
import { Section } from "./Section";
import { Button } from "./ui/button";

const reviews = [
  review1,
  review10,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review11,
  review12,
];

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <Section id="gallery" className="w-full border-y py-12">
      <div className="container mx-auto flex justify-center items-center flex-col">
        <h2 className="text-3xl md:text-5xl p-2 relative inline-flex flex-col items-center text-center mb-8">
          Галерея отзывов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review, index) => (
            <Image
              width={200}
              height={200}
              className={` ${
                index >= 2 && !showAll ? "hidden sm:block" : ""
              } object-cover h-48 transition-transform transform hover:scale-110`}
              src={review}
              key={index}
              alt="review image"
            ></Image>
          ))}
        </div>
        {reviews.length > 2 && (
          <Button
            variant={"secondary"}
            className="mt-4 sm:hidden"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : `Показать все ${reviews.length} картинок`}
          </Button>
        )}
      </div>
    </Section>
  );
}
