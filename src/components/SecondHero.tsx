import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function SecondHero() {
  return (
    <div className="flex justify-center items-center w-full">
      <Accordion type="single" collapsible className="w-3/4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Ручной работы?</AccordionTrigger>
          <AccordionContent>Да, мы делаем стикеры сами.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>А быстро приходят?</AccordionTrigger>
          <AccordionContent>
            Доставка производится маркетплейсом WildBerries, за сроками доставки
            к ним
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Мяу?</AccordionTrigger>
          <AccordionContent>Мяумяу</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SecondHero;
