"use client";
import { useQuery } from "convex/react";
import Link from "next/link";
import React from "react";
import { api } from "../../../convex/_generated/api";
import Image from "next/image";

function StickersPage() {
  const stickers = useQuery(api.stickers.getAllStickers);

  return (
    <div className="flex gap-12 p-20 justify-center">
      {stickers?.map((sticker) => (
        <Link href={`/stickers/${sticker.stickerId}`} key={sticker.stickerId}>
          <div className="flex flex-col gap-4 justify-center items-start">
            <Image
              className="border border-slate-600"
              src={"/meow"}
              width={200}
              height={200}
              alt="Sticker Image"
            ></Image>
            <p className="text-xl">{sticker.stickerName}</p>
            <p className="text-lg">{sticker.stickerDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StickersPage;
