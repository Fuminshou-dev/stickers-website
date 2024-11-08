import React from "react";
import Image from "next/image";
import stickersImage from "../../public/Untitled.png";
import stickersImage2 from "../../public/untitled2.png";
import stickersImage3 from "../../public/untitled3.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import shopImage from "../../public/50CB3513DCB21BC9.webp";
import Link from "next/link";
import wildberriesImage from "../../public/png-klev-club-dejs-p-wildberries-logotip-png-16.png";

function Hero() {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 bg-slate-600 rounded-full blur-2xl"></div>
        <div className="relative flex -space-x-56">
          <Image
            className="rounded-xl -rotate-12 relative z-30" // Highest z-index
            width={500}
            height={500}
            src={stickersImage}
            alt="Stickers image"
          />
          <Image
            className="rounded-xl -rotate-12 relative z-20" // Middle z-index
            width={500}
            height={500}
            src={stickersImage2}
            alt="Stickers image"
          />
          <Image
            className="rounded-xl -rotate-12 relative z-10" // Lowest z-index
            width={500}
            height={500}
            src={stickersImage3}
            alt="Stickers image"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-20 gap-5 ">
        <div className="w-3/4 flex flex-col gap-5">
          <div>
            <h1 className="text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              <HoverCard>
                <HoverCardTrigger>ПриклейКа Меня</HoverCardTrigger>
                <HoverCardContent className="w-72 text-lg">
                  <Link
                    target="_blank"
                    href={
                      "https://www.wildberries.ru/brands/311663974-prikleyka-menya"
                    }
                  >
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={wildberriesImage}
                          alt="WildBerries image"
                        />
                        <Image
                          width={80}
                          height={20}
                          src={shopImage}
                          alt="Shop Image"
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-center items-center text-sm">
                        <p className="text-lg">Магазин наклеек</p>
                        <p className="italic">Кликни, чтобы купить!</p>
                      </div>
                    </div>
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </h1>
            <h2 className="text-2xl italic text-slate-400 dark:text-slate-500">
              Стикеры для <strong className="underline">всех</strong>
            </h2>
          </div>
          <p className="text-lg overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsam
            hic rerum eligendi tempora inventore, saepe sit nobis sint, ducimus
            assumenda impedit dolor laudantium voluptas. Cupiditate ipsum
            doloribus cum voluptas aperiam rerum placeat veniam, totam iste?
            Distinctio ab nihil nam vel, ration5e rem officiis tenetur
            voluptatibus dolore voluptates, quae odit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
