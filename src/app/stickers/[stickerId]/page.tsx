import Link from "next/link";
import { api } from "../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Button } from "@/components/ui/button";

export default async function StickersId({
  params,
}: {
  params: Promise<{ stickerId: string }>;
}) {
  const stickerId = parseFloat((await params).stickerId);
  const sticker = await fetchQuery(api.stickers.getSticker, { stickerId });

  return (
    <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
      {sticker?.length !== 0 ? (
        sticker?.map((sticker) => (
          <div key={sticker._id}>
            <h1>Имя стикерпака: {sticker.stickerName}</h1>
            <h2>Номер стикерпака: {sticker.stickerId}</h2>
            <h3>Описание: {sticker.stickerDescription}</h3>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center gap-48">
          <h1 className="text-5xl">Такого стикера нет</h1>
          <Button className="size-72 text-2xl" variant={"outline"} asChild>
            <Link href={"/stickers"}>Вернуться</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
