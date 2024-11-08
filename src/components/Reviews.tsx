import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const reviews = [
  {
    profileUrl: "https://github.com/alex123.png",
    comment:
      "Эти стикеры просто потрясающие! Качество отличное, и они хорошо приклеиваются.",
    id: 1,
  },
  {
    profileUrl: "https://github.com/sarah_j.png",
    comment:
      "Обожаю эти милые дизайны! Идеально подходят для украшения моего ноутбука.",
    id: 2,
  },
  {
    profileUrl: "https://github.com/mike_dev.png",
    comment:
      "Цвета яркие и не выцветают даже после мытья моей бутылки для воды.",
    id: 3,
  },
  {
    profileUrl: "https://github.com/lisa_smith.png",
    comment:
      "Хорошее соотношение цены и качества, но некоторые стикеры оказались немного меньше, чем ожидалось.",
    id: 4,
  },
  {
    profileUrl: "https://github.com/tech_guru.png",
    comment:
      "Идеально подходят для программистов! Мой MacBook теперь выглядит потрясающе.",
    id: 5,
  },
  {
    profileUrl: "https://github.com/artsy_emma.png",
    comment: "Дизайны креативные, но клей мог бы быть посильнее.",
    id: 6,
  },
  {
    profileUrl: "https://github.com/sticker_fan.png",
    comment:
      "Быстрая доставка и отличное обслуживание клиентов. Буду заказывать ещё!",
    id: 7,
  },
  {
    profileUrl: "https://github.com/john_doe.png",
    comment: "Хороший выбор в наборе, но пара стикеров пришла повреждённой.",
    id: 8,
  },
];

function SecondHero() {
  return (
    <div className="flex gap-8 flex-col justify-center items-center w-3/4 h-1/2 py-20">
      <h3 className="text-5xl">Отзывы</h3>
      <Carousel
        className="w-3/4"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square gap-4 p-6">
                    <div className="flex flex-row">
                      <Avatar>
                        <AvatarImage
                          src={review.profileUrl}
                          alt="profile icon"
                        />
                        <AvatarFallback>IC</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xl font-semibold text-start  break-words">
                        {review.comment}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default SecondHero;
