import Image from "next/image";
import React from "react";

import shopImage from "@/public/shopLogo.jpg";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="w-full py-5 md:py-12 border-y">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-8 md:gap-16">
          <div className="justify-center items-center hidden md:flex">
            <Image
              width={800}
              src={shopImage}
              alt="About Us Image"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-start">
              <h1 className="text-3xl md:text-4xl mb-4 font-bold">
                О нас
                <span className="block w-full md:w-1/4  h-1 bg-black dark:bg-white mt-2"></span>
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Мы делаем и продаем прикольные стикеры самых разных тематик. Все
                стикеры высокого качества.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-2xl md:text-3xl mb-4 font-bold">
                Почему именно мы?
              </h2>
              <ul className="list-disc list-inside flex flex-col  gap-2 md:gap-0 md:grid md:grid-cols-2">
                <li>Продаем стикеры самых разных тематик</li>
                <li>Высокое качество продукции</li>
                <li>Скидки и акции</li>
                <li>Гибкая система доставки</li>
                <li>Поддержка и развитие</li>
                <li>Качественный сервис и гарантия</li>
                <li>Сотрудничество с крупнейшими производителями</li>
                <li>Получение высокого рейтинга и отзывов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
