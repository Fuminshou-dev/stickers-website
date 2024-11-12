import React from "react";
import stickersMakingImage1 from "../../../public/photo_2024-11-02_01-17-01.jpg";
import stickersMakingImage2 from "../../../public/photo_2024-11-06_23-13-35.jpg";
import stickersMakingImage3 from "../../../public/photo_2024-11-06_23-13-36.jpg";
import stickersMakingImage4 from "../../../public/photo_2024-11-06_23-13-51.jpg";
import stickersMakingImage5 from "../../../public/photo_2024-11-06_23-13-52.jpg";
import ImageCarouselType, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import shopImage from "../../../public/50CB3513DCB21BC9.webp";

import { wbShopUrl } from "../page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ImageCarouselType = {
  imageUrl: StaticImageData;
  width: number;
  height: number;
};

const image1: ImageCarouselType = {
  imageUrl: stickersMakingImage1,
  width: 600,
  height: 200,
};
const image2: ImageCarouselType = {
  imageUrl: stickersMakingImage2,
  width: 1000,
  height: 1000,
};
const image3: ImageCarouselType = {
  imageUrl: stickersMakingImage3,
  width: 1000,
  height: 1000,
};
const image4: ImageCarouselType = {
  imageUrl: stickersMakingImage4,
  width: 600,
  height: 200,
};
const image5: ImageCarouselType = {
  imageUrl: stickersMakingImage5,
  width: 1000,
  height: 1000,
};

const stickersMakingImages = [image1, image2, image3, image4, image5];

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center p-12">
      <div className="flex flex-col justify-center items-center gap-6">
        <Image width={800} src={shopImage} alt="123" />
        <h1 className="text-5xl">
          Магазин{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            ПриклейКа Меня
          </span>
        </h1>
        <p className="text-2xl">
          Делаем и продаем прикольные стикеры самых разных тематик(?).
        </p>
        <div className="flex flex-row gap-4">
          <Button className="w-48 h-12" variant={"outline"} asChild>
            <Link href={"/stickers"}>Виды стикеров</Link>
          </Button>
          <Button
            className="w-48 h-12 bg-green-400 hover:bg-green-600"
            variant={"outline"}
            asChild
          >
            <Link href={wbShopUrl} target="_blank">
              Заказать
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col py-12 w-1/2 items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl">Стикеры собственного производства.</h2>
          <p className="text-xl">
            Делаем на складе, упаковывем и отправляем вам. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Iste voluptates quibusdam
            tempore id nihil repellendus, cumque minus velit quidem magni!
          </p>
        </div>
        <div className="flex justify-center items-center h-[800px] my-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="">
              {stickersMakingImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={image.imageUrl}
                    height={image.height}
                    width={image.width}
                    alt="how stickers are made"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
