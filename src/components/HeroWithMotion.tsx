"use client";

import arrowImage from "@/public/down-arrow-svgrepo-com.svg";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Section } from "./Section";

function HeroWithMotion() {
  return (
    <Section
      id="main"
      className="h-full border-b select-none overflow-x-hidden"
    >
      <div className="flex h-full flex-col justify-center items-center gap-4 text-center container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mb-2">
          <motion.h1
            style={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-500 via-purple-500 to-indigo-500
            animate-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl "
          >
            ПриклейКа Меня
          </motion.h1>
          <motion.h2
            style={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="text-xl sm:text-2xl italic text-transparent bg-clip-text bg-gradient-to-b from-blue-500/50 to-purple-500/50"
          >
            Стикеры для{" "}
            <strong className="underline font-bold dark:text-white/10 text-black/10">
              всех
            </strong>
          </motion.h2>
        </div>
        <Link
          href={"#features"}
          className="flex flex-col justify-center items-center gap-4"
        >
          <Button
            asChild
            variant={"outline"}
            size={"lg"}
            className="rounded-full mt-4   bg-gradient-to-b from-blue-500 to-purple-500"
          >
            <motion.button
              className=""
              style={{ y: -2000, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                duration: 2,
              }}
            >
              Узнать больше
            </motion.button>
          </Button>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1, delay: 1.5 }}
          >
            <div className="animate-bounce">
              <Image
                className="dark:invert select-none mt-5"
                src={arrowImage}
                width={48}
                alt="Arrow Image"
              ></Image>
            </div>
          </motion.div>
        </Link>
      </div>
    </Section>
  );
}

export default HeroWithMotion;
