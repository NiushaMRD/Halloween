"use client";

import Link from "next/link";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import {
  Heart,
  Search,
  Scale,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#0E0E10] border-b border-white/10 text-[#E9E3D6] text-sm">
        <div className="max-w-[1280px] mx-auto h-10 flex items-center justify-center px-6">
          🎃 Free Worldwide Shipping on Orders Over $75
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0E0E10]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1280px] mx-auto h-[72px] flex items-center justify-between px-4 md:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="w-9 h-9 rounded-xl bg-[#D96A1B] flex items-center justify-center font-bold text-black">
              N
            </div>

            <h1 className="text-[#E9E3D6] text-lg md:text-2xl font-bold tracking-widest">
              NIGHTMARES
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-[#E9E3D6]">

            <Link href="/" className="hover:text-[#D96A1B] transition">
              Home
            </Link>

            {/* Shop */}
            <div className="group static">

  <button className="flex items-center gap-1 py-4 hover:text-[#D96A1B]">
    Shop
  </button>

  <div className="h-0 group-hover:h-2 transition-all" />

  <div className="hidden group-hover:block w-full">
    <MegaMenu type="shop" />
  </div>

</div>

            {/* Rooms */}
            <div className="group static">

  <Link href="/rooms" className="hover:text-[#D96A1B] transition">
Rooms            </Link>

  {/* hover bridge */}
  <div className="h-2 w-full" />

  {/* MegaMenu */}
  <div className="hidden group-hover:block w-full">
    <MegaMenu type="rooms" />
  </div>

</div>

            {/* <Link href="/collections" className="hover:text-[#D96A1B] transition">
              Collections
            </Link> */}

            <Link href="/book-of-shadows" className="hover:text-[#D96A1B] transition">
              Book Of Shadows
            </Link>

            <Link href="/about" className="hover:text-[#D96A1B] transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-[#D96A1B] transition">
              Up coming seasons
            </Link>
          </nav>

          {/* RIGHT ICONS (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-5 text-[#E9E3D6]">

            <button className="hover:text-[#D96A1B] transition">
              <Search size={22} />
            </button>

            <button className="relative hover:text-[#D96A1B] transition">
              <Heart size={22} />
              <span className="absolute -top-2 -right-2 bg-[#D96A1B] text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            <button className="hover:text-[#D96A1B] transition">
              <Scale size={22} />
            </button>

            <button className="hover:text-[#D96A1B] transition">
              <User size={22} />
            </button>

            <button className="relative hover:text-[#D96A1B] transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-[#D96A1B] text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-[#E9E3D6] z-50"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU (DRAWER STYLE) */}
      <div
        className={`
  fixed top-[72px] left-0 w-full h-[calc(100vh-72px)]
  bg-[#0E0E10]
  border-t border-white/10
  z-[9999]
  transform transition-transform duration-300
  lg:hidden
          ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col px-6 py-8 gap-6 text-[#E9E3D6] text-lg">

          <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link href="/shop" onClick={() => setMobileMenu(false)}>Shop</Link>
          <Link href="/rooms" onClick={() => setMobileMenu(false)}>Rooms</Link>
          <Link href="/collections" onClick={() => setMobileMenu(false)}>Collections</Link>
          <Link href="/blog" onClick={() => setMobileMenu(false)}>Blog</Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>

          <div className="border-t border-white/10 pt-6 flex justify-between text-[#E9E3D6]">
            <Search />
            <Heart />
            <Scale />
            <User />
            <ShoppingCart />
          </div>
        </nav>
      </div>
    </>
  );
}