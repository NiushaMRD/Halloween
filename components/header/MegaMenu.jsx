"use client";

import Link from "next/link";

export default function MegaMenu({ type }) {
  if (type === "shop") {
    return (
      <div className="absolute left-0 top-full w-full bg-[#151518] border-t border-white/10 shadow-2xl z-50">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10 xl:gap-12 py-8 md:py-10 px-4 md:px-8">

          {/* Shop */}
          <div>
            <h3 className="text-[#D96A1B] font-semibold mb-4">Shop</h3>

            <ul className="space-y-3 text-[#E9E3D6]">
              <li><Link href="/shop" className="hover:text-[#D96A1B] transition">Shop All</Link></li>
              <li><Link href="/new" className="hover:text-[#D96A1B] transition">New Arrivals</Link></li>
              <li><Link href="/best-sellers" className="hover:text-[#D96A1B] transition">Best Sellers</Link></li>
              <li><Link href="/sale" className="hover:text-[#D96A1B] transition">Sale</Link></li>
              <li><Link href="/gift-cards" className="hover:text-[#D96A1B] transition">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[#D96A1B] font-semibold mb-4">Categories</h3>

            <ul className="space-y-3 text-[#E9E3D6]">
              <li><Link href="/costumes" className="hover:text-[#D96A1B] transition">Costumes</Link></li>
              <li><Link href="/masks" className="hover:text-[#D96A1B] transition">Masks</Link></li>
              <li><Link href="/decor" className="hover:text-[#D96A1B] transition">Decorations</Link></li>
              <li><Link href="/party" className="hover:text-[#D96A1B] transition">Party Supplies</Link></li>
              <li><Link href="/candles" className="hover:text-[#D96A1B] transition">Candles</Link></li>
              <li><Link href="/accessories" className="hover:text-[#D96A1B] transition">Accessories</Link></li>
              <li><Link href="/candy" className="hover:text-[#D96A1B] transition">Candy</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-[#D96A1B] font-semibold mb-4">Collections</h3>

            <ul className="space-y-3 text-[#E9E3D6]">
              <li><Link href="/" className="hover:text-[#D96A1B] transition">Haunted Home</Link></li>
              <li><Link href="/" className="hover:text-[#D96A1B] transition">Dark Elegance</Link></li>
              <li><Link href="/" className="hover:text-[#D96A1B] transition">Movie Inspired</Link></li>
              <li><Link href="/" className="hover:text-[#D96A1B] transition">Limited Edition</Link></li>
            </ul>
          </div>

          {/* Banner */}
          <div>
            <div className="rounded-xl overflow-hidden bg-[#0E0E10] border border-white/10 h-full">

              <img
                src="/images/mansion.jpg"
                alt="Haunted Mansion"
                className="w-full h-44 md:h-52 object-cover"
              />

              <div className="p-5 md:p-6">

                <p className="text-[#E9E3D6] text-lg md:text-xl font-bold">
                  Enter if you dare...
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  Explore the haunted mansion and discover terrifying treasures.
                </p>

                <Link
                  href="/shop"
                  className="inline-block mt-5 w-full md:w-auto text-center bg-[#D96A1B] hover:bg-[#7A0F17] transition px-5 py-3 rounded-xl text-white font-medium"
                >
                  Shop Now
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full w-full bg-[#151518] border-t border-white/10 shadow-2xl z-50">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8 py-8 md:py-10 px-4 md:px-8">

        {[
          {
            title: "Cursed Wardrobe",
            desc: "Costumes",
            href: "/rooms/cursed-wardrobe",
          },
          {
            title: "Hall of Lost Faces",
            desc: "Masks",
            href: "/rooms/hall-of-lost-faces",
          },
          {
            title: "Spirit Chamber",
            desc: "Decorations",
            href: "/rooms/spirit-chamber",
          },
          {
            title: "Witch's Kitchen",
            desc: "Candy",
            href: "/rooms/witch-kitchen",
          },
          {
            title: "Forgotten Chapel",
            desc: "Candles",
            href: "/rooms/forgotten-chapel",
          },
          {
            title: "Cabinet of Curiosities",
            desc: "Accessories",
            href: "/rooms/cabinet-of-curiosities",
          },
        ].map((room) => (
          <Link
            key={room.title}
            href={room.href}
            className="bg-[#0E0E10] border border-white/10 rounded-xl p-5 md:p-6 hover:border-[#D96A1B] hover:bg-[#18181d] transition-all duration-300"
          >
            <h3 className="text-[#E9E3D6] text-lg md:text-xl font-semibold">
              {room.title}
            </h3>

            <p className="text-gray-400 mt-2 text-sm md:text-base">
              {room.desc}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}
