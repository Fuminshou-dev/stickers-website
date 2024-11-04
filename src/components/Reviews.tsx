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
    profileUrl: "https://github.com/shadcn.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quia nobis soluta, dolorum illo nostrum explicabo ex pariatur quaerat, amet magni perferendis numquam laborumrepellendus, excepturi repellat suscipit? Natus, molestiae.Perferendis.",
    id: 1,
  },
  {
    profileUrl: "https://github.com/shadcn.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quia nobis soluta, dolorum illo nostrum explicabo ex pariatur quaerat, amet magni perferendis numquam laborumrepellendus, excepturi repellat suscipit? Natus, molestiae.Perferendis.",
    id: 2,
  },
  {
    profileUrl: "https://github.com/shadcn.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quia nobis soluta, dolorum illo nostrum explicabo ex pariatur quaerat, amet magni perferendis numquam laborumrepellendus, excepturi repellat suscipit? Natus, molestiae.Perferendis.",
    id: 3,
  },
  {
    profileUrl: "https://github.com/shadcn.png",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quia nobis soluta, dolorum illo nostrum explicabo ex pariatur quaerat, amet magni perferendis numquam laborumrepellendus, excepturi repellat suscipit? Natus, molestiae.Perferendis.",
    id: 4,
  },
  {
    profileUrl: "https://github.com/shadcn.png",
    comment: "Привет как дела",
    id: 5,
  },
];

function SecondHero() {
  return (
    <div className="flex gap-12 flex-col justify-center items-center w-full py-20">
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
                    <div>
                      <span className="text-xl font-semibold text-start">
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
