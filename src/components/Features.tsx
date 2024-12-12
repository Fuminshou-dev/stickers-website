"use client";

import Image from "next/image";
import React from "react";

import checkboxIcon from "@/public/checkbox.png";
import powderIcon from "@/public/powder.png";
import layersIcon from "@/public/layers.png";
import { Section } from "./Section";

const imageWidth = 48;

function Features() {
  return (
    <Section id="features" className="w-full border-y py-12">
      <div className="flex flex-col justify-center items-center container mx-auto">
        <h2 className="text-3xl md:text-5xl p-2 relative inline-flex flex-col items-center text-center mb-8">
          Преимущества
          <span className="w-1/2 h-0.5 bg-black dark:bg-white mt-2"></span>
        </h2>
        <div className="flex flex-col md:flex-row md:p-8 gap-8">
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <span className="bg-blue-400 p-12 md:p-16 rounded-full flex justify-center items-center">
              <Image
                className="select-none"
                src={layersIcon}
                width={imageWidth}
                alt="Feature Image"
              />
            </span>
            <p className="text-lg font-semibold md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
              Яркий дизайн
            </p>
            <p className="text-sm md:text-lg lg:text-xl  text-center w-2/3">
              Наши стикеры отличаются ярким и привлекательным дизайном, который
              не оставит никого равнодушным.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <span className="bg-blue-400 p-12 md:p-16 rounded-full flex justify-center items-center">
              <Image
                className="select-none"
                src={checkboxIcon}
                width={imageWidth}
                alt="Feature Image"
              />
            </span>
            <p className="text-lg font-semibold md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
              Многоразовые
            </p>
            <p className="text-sm md:text-lg lg:text-xl  text-center w-2/3">
              Стикеры можно легко переклеивать и использовать повторно без
              потери качества.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <span className="bg-blue-400 p-12 md:p-16 rounded-full flex justify-center items-center">
              <Image
                className="select-none"
                src={powderIcon}
                width={imageWidth}
                alt="Feature Image"
              />
            </span>
            <p className="text-lg font-semibold md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
              Не оставляют следов
            </p>
            <p className="text-sm md:text-lg lg:text-xl text-center w-2/3">
              После удаления наши стикеры не оставляют следов клея на
              поверхности.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Features;
