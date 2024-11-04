import Link from "next/link";
import React from "react";

function StickersPage() {
  const stickers = [
    {
      stickerName: "Первый стикерпак",
      stickerId: 1,
      stickerDescripton: "описание1",
    },
    {
      stickerName: "Второй стикерпак",
      stickerId: 2,
      stickerDescripton: "описание2",
    },
    {
      stickerName: "Третий стикерпак",
      stickerId: 3,
      stickerDescripton: "описание3",
    },
    {
      stickerName: "Четвертый стикерпак",
      stickerId: 4,
      stickerDescripton: "описание4",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {stickers.map((sticker) => (
        <Link
          href={{
            pathname: `/stickers/${sticker.stickerId}`,
            query: {
              name: sticker.stickerName,
              description: sticker.stickerDescripton,
            },
          }}
          key={sticker.stickerId}
        >
          {sticker.stickerName}
        </Link>
      ))}
    </div>
  );
}

export default StickersPage;
