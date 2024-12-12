"use client";
import React, { useState } from "react";
import { SkeletonMotion } from "./ui/skeleton-motion";
import { Button } from "./ui/button";
import { Section } from "./Section";

export default function GallerySection() {
  const [showAll, setShowAll] = useState(false);
  const skeletons = Array(12).fill(null);

  return (
    <Section id="gallery" className="w-full border-y py-12">
      <div className="container mx-auto flex justify-center items-center flex-col">
        <h2 className="text-3xl md:text-5xl p-2 relative inline-flex flex-col items-center text-center mb-8">
          Галерея
          <span className="w-1/2 h-0.5 bg-black dark:bg-white mt-2"></span>
          <span className="text-sm font-semibold">(в разработке)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skeletons.map((_, index) => (
            <SkeletonMotion
              key={index}
              className={`size-72 ${
                index >= 2 && !showAll ? "hidden sm:block" : ""
              }`}
            ></SkeletonMotion>
          ))}
        </div>
        {skeletons.length > 2 && (
          <Button
            variant={"secondary"}
            className="mt-4 sm:hidden"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : `Показать все ${skeletons.length} стикеров`}
          </Button>
        )}
      </div>
    </Section>
  );
}
