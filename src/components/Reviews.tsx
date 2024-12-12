"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar } from "./ui/avatar";
// import { AvatarFallback, AvatarImage} from './ui/avatar'
import { Skeleton } from "./ui/skeleton";
import { Section } from "./Section";

const Reviews = [
  {
    id: 1,
    name: "Иван",
    image: "/profile-icon.png",
    text: "Отличные стикеры! Качество печати превзошло мои ожидания. Буду заказывать еще.",
    rating: 5,
  },
  {
    id: 2,
    name: "Анна",
    image: "/profile-icon.png",
    text: "Быстрая доставка и хорошее обслуживание клиентов. Стикеры яркие и долговечные.",
    rating: 4,
  },
  {
    id: 3,
    name: "Дмитрий",
    image: "/profile-icon.png",
    text: "Заказывал кастомные стикеры для своего бизнеса. Результат превзошел все ожидания!",
    rating: 5,
  },
  {
    id: 4,
    name: "Елена",
    image: "/profile-icon.png",
    text: "Немного задержали доставку, но качество стикеров компенсировало ожидание.",
    rating: 4,
  },
  {
    id: 5,
    name: "Сергей",
    image: "/profile-icon.png",
    text: "Огромный выбор дизайнов. Нашел именно то, что искал. Спасибо за отличный сервис!",
    rating: 5,
  },
  {
    id: 6,
    name: "Ольга",
    image: "/profile-icon.png",
    text: "Стикеры отлично держатся на разных поверхностях. Качество на высоте!",
    rating: 4,
  },
  {
    id: 7,
    name: "Алексей",
    image: "/profile-icon.png",
    text: "Заказывал большую партию для мероприятия. Все пришло вовремя и в отличном состоянии.",
    rating: 5,
  },
  {
    id: 8,
    name: "Мария",
    image: "/profile-icon.png",
    text: "Удобный сайт, легко оформить заказ. Стикеры яркие и красивые. Рекомендую!",
    rating: 5,
  },
];

const RatingStars = (rating: number) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={i < rating ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ));

  return <span className="flex flex-row">{stars}</span>;
};

function ReviewsSection() {
  return (
    <Section id="reviews" className="w-full border-y">
      <div className="flex gap-4 h-full sm:gap-6 md:gap-12 lg:gap-16 flex-col justify-center items-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Отзывы</h2>
        <Carousel
          className="w-2/3 sm:w-11/12 md:w-5/6 lg:w-3/4"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {Reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="sm:basis-1/2 md:basis-1/3"
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-2 md:gap-2 p-6">
                    <div className="w-full h-fit flex flex-row gap-4 justify-start items-center">
                      <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                        {/* <AvatarImage src="" />
                        <AvatarFallback>IC</AvatarFallback> */}
                        <Skeleton className="size-48 rounded-full " />
                      </Avatar>
                      <div className="flex flex-col sm:flex-col gap-1 sm:gap-2 md:gap-4">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">
                          {review.name}
                        </p>
                        {RatingStars(review.rating)}
                      </div>
                    </div>
                    <div className="overflow-hidden flex flex-col gap-2 sm:gap-4 md:gap-6 w-full h-fit py-8">
                      <span className="tracking-wide text-sm md:tracking-normal text-start sm:text-base md:text-xl font-bold break-words">
                        {review.text}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-6" />
          <CarouselNext className="size-6" />
        </Carousel>
      </div>
    </Section>
  );
}

export default ReviewsSection;
