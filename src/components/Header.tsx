import React from "react";
import { ModeToggle } from "./theme-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex items-center flex-row justify-between p-5 sticky z-10 top-0 bg-white dark:bg-black ">
      <Link href={"/"}>НаклейКаМеня</Link>
      <div className="flex flex-row gap-5">
        <Link href={"/"}>
          <Button variant={"ghost"}>Заказать</Button>
        </Link>
        <Link href={"/stickers"}>
          {" "}
          <Button variant={"ghost"}>Все стикеры</Button>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
