"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Section } from "./Section";

import Star from "@/public/star.png";
import Image from "next/image";
import { Button } from "./ui/button";

const Reviews = [
  {
    id: 1,
    name: "Татьяна",
    image: "/profile-icon.png",
    text: "Долго ехал, как будто где-то потерялся, потом его нашли и отправили повторно. Не все по качеству читабельно. Некоторые буквы при распечатке оказались очень светлыми. Положили подарочек в виде дополнительной наклейки с котиком, спасибо продавцу за этот милый презент. В остальном без повреждений, аккуратно упакован был в конверт.",
    buyDate: "19.12.2024",
  },
  {
    id: 2,
    name: "Ольга",
    image: "/profile-icon.png",
    text: `Достоинства: 100 баллов, настолько приятно получать такие посылки: упаковано в кравтовый конвер, всё очень круто, ещё и подарочек наклейка,это очень круто,дочь довольна,а я больше наверное, эстетически просто все на высшем уровне👍
    Недостатки: -
    Комментарий: Впечатления 100 из 10, настолько порадовали упаковкой и отношению к покупателю, желаю успехов и процветания вам, спасибо)`,
    buyDate: "17.12.2024",
  },
  {
    id: 3,
    name: "София",
    image: "/profile-icon.png",
    text: `Достоинства: наклейки крутые,подарок подарили 3д стикер с обезьяной подарила сестре
\nНедостатки: слишком круто
\nКомментарий: чил бой оценил`,
    buyDate: "20.12.2024",
  },
  {
    id: 4,
    name: "Матвей",
    image: "/profile-icon.png",
    text: `Достоинства: Очень красивые
\nКомментарий: Очень реалестичьные советую`,
    buyDate: "13.12.2024",
  },
  {
    id: 5,
    name: "Мария",
    image: "/profile-icon.png",
    text: `Достоинства: Имба имбучей`,
    buyDate: "02.12.2024",
  },
  {
    id: 6,
    name: "Марха",
    image: "/profile-icon.png",
    text: `Достоинства: Миленький очень довольна ,и за подарок спасибо 🫢
\nНедостатки: Нет`,
    buyDate: "07.12.2024",
  },
  {
    id: 7,
    name: "Виктория",
    image: "/profile-icon.png",
    text: `Достоинства: Стикеры супер. Пришли хорошо упакованные, в бумажном конверте. Часть уже наклеили. Ребенок счастлив!`,
    buyDate: "04.12.2024",
  },
  {
    id: 8,
    name: "Наталья",
    image: "/profile-icon.png",
    text: `Достоинства: Яркие, прикольные стикеры.`,
    buyDate: "08.12.2024",
  },
];

const ReviewStars = () => {
  return (
    <div className="flex gap-2 text-center">
      {[...Array(5)].map((_, index) => (
        <Image width={28} key={index} src={Star} alt="Stars image" />
      ))}
    </div>
  );
};

function ReviewsSection() {
  const [expandedReviewId, setExpandedReviewId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedReviewId(expandedReviewId === id ? null : id);
  };

  const handleCarouselNavigation = () => {
    setExpandedReviewId(null);
  };

  return (
    <Section id="reviews" className="w-full border-y select-none">
      <div className="flex gap-4 h-full sm:gap-6 md:gap-12 lg:gap-16 flex-col justify-center items-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Отзывы</h2>
        <Carousel
          className="w-2/3 sm:w-11/12 md:w-5/6 lg:w-3/4"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Reviews.map((review) => {
              const isExpanded = expandedReviewId === review.id;
              const textToShow = isExpanded
                ? review.text
                : review.text.substring(0, 100) + "..."; // Show first 100 characters

              return (
                <CarouselItem
                  key={review.id}
                  className="sm:basis-1/2 md:basis-1/3"
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col gap-2 md:gap-2 p-6 h-full">
                      <div className="flex items-center justify-between w-full gap-1 sm:gap-2 md:gap-4">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">
                          {review.name}
                        </p>
                        <p className="opacity-75 italic">{review.buyDate}</p>
                      </div>
                      <ReviewStars />

                      <div className="overflow-hidden flex flex-col items-center gap-2 sm:gap-4 md:gap-6 w-full h-full justify-between">
                        <span className="text-sm text-start sm:text-base md:text-xl font-bold">
                          {textToShow.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </span>
                        <Button
                          onClick={() => toggleExpand(review.id)}
                          variant={"ghost"}
                        >
                          {isExpanded ? "Скрыть" : "Развернуть"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            className="size-6"
            onClick={() => {
              handleCarouselNavigation();
            }}
          />
          <CarouselNext
            className="size-6"
            onClick={() => {
              handleCarouselNavigation();
            }}
          />
        </Carousel>
      </div>
    </Section>
  );
}

export default ReviewsSection;
