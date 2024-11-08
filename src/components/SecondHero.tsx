import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import firstImage from "../../public/1.png";
import secondImage from "../../public/2.png";
import thirdImage from "../../public/3.png";
import Image from "next/image";

function SecondHero() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-3/4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Ручной работы?</AccordionTrigger>
            <AccordionContent>Да, мы делаем стикеры сами.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>А быстро приходят?</AccordionTrigger>
            <AccordionContent>
              Доставка производится маркетплейсом WildBerries, за сроками
              доставки к ним
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Мяу?</AccordionTrigger>
            <AccordionContent>Мяумяу</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-1/2 py-20">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={firstImage}
                alt="Stickers image example"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={secondImage}
                alt="Stickers image example"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-center">
              <Image
                className="rounded-3xl"
                src={thirdImage}
                alt="Stickers image example"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default SecondHero;
