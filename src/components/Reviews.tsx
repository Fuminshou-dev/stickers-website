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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";

function SecondHero() {
  const reviews = useQuery(api.reviews.getAllReviews);

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
          {reviews?.map((review) => (
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
