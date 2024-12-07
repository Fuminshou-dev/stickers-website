"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky w-full top-0 backdrop-blur-lg z-100 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="text-lg font-semibold">
            ПриклейКаМеня
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href={"#features"}>
              <Button variant={"ghost"}>Преимущества</Button>
            </Link>
            <Link href={"#about-us"}>
              <Button variant={"ghost"}>О нас</Button>
            </Link>
            <Link href={"#reviews"}>
              <Button variant={"ghost"}>Отзывы</Button>
            </Link>
            <Link href={"#gallery"}>
              <Button variant={"ghost"}>Галерея</Button>
            </Link>
            <ModeToggle />
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hiddenr">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={"#features"}>
              <Button variant={"ghost"} className="w-full text-left">
                Преимущества
              </Button>
            </Link>
            <Link href={"#about-us"}>
              <Button variant={"ghost"} className="w-full text-left">
                О нас
              </Button>
            </Link>
            <Link href={"#reviews"}>
              <Button variant={"ghost"} className="w-full text-left">
                Отзывы
              </Button>
            </Link>
            <Link href={"#gallery"}>
              <Button variant={"ghost"} className="w-full text-left">
                Галерея
              </Button>
            </Link>
            <div className="pt-2 flex justify-center items-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
