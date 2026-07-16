"use client";

import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    title: "The Cursed Wardrobe",
    subtitle: "Costumes",
    image: "/images/rooms/Comod.jpg",
    href: "/costumes",
    description:
      "Ancient garments stitched beneath moonlight. Every costume carries another forgotten identity.",
  },
  {
    title: "Hall of Lost Faces",
    subtitle: "Masks",
    image: "/images/rooms/Maska.jpg",
    href: "/masks",
    description:
      "Hundreds of faces watch silently from the walls, each waiting for someone brave enough to wear them.",
  },
  {
    title: "Spirit Chamber",
    subtitle: "Decorations",
    image: "/images/rooms/Otagh.jpg",
    href: "/decorations",
    description:
      "Candles flicker. Shadows move. Every decoration makes the mansion feel just a little more alive.",
  },
  {
    title: "Witch's Kitchen",
    subtitle: "Candy",
    image: "/images/rooms/Ash.jpg",
    href: "/candy",
    description:
      "Sweet aromas hide mysterious recipes passed down through generations of witches.",
  },
  {
    title: "Forgotten Chapel",
    subtitle: "Candles",
    image: "/images/rooms/Sham.jpg",
    href: "/candles",
    description:
      "Only candlelight remains inside this abandoned chapel, keeping old memories alive.",
  },
  {
    title: "Cabinet of Curiosities",
    subtitle: "Accessories",
    image: "/images/rooms/Accs.jpg",
    href: "/accessories",
    description:
      "Strange relics, mysterious keys and forgotten treasures collected across centuries.",
  },
];

export default function RoomsList() {
  return (
    <section className="bg-[#0E0E10] py-28">

      <div className="max-w-[1280px] mx-auto px-6 space-y-32">

        {rooms.map((room, index) => (

          <div
            key={room.title}
            className={`grid lg:grid-cols-2 gap-14 items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* Image */}

            <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10">

              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            </div>

            {/* Text */}

            <div>

              <p className="uppercase tracking-[5px] text-[#D96A1B] text-sm mb-5">

                {room.subtitle}

              </p>

              <h2 className="text-[#E9E3D6] text-5xl font-bold leading-tight mb-8">

                {room.title}

              </h2>

              <p className="text-gray-400 leading-9 text-lg mb-10">

                {room.description}

              </p>

              <Link
                href={room.href}
                className="inline-flex items-center gap-3 bg-[#D96A1B] hover:bg-[#7A0F17] transition px-8 py-4 rounded-xl text-[#E9E3D6] font-semibold"
              >
                Enter the Room →

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}