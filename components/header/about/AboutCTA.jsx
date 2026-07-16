"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* Background */}

      <Image
        src="/images/about/cta-bg.jpg"
        alt="The Mansion Awaits"
        fill
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/4" />

      {/* Warm Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-black/40 to-black/70" />

      {/* Content */}

      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-[#D96A1B] text-sm mb-5">
          The Journey Begins
        </p>

        <h2 className="text-[#E9E3D6] text-4xl md:text-6xl font-bold leading-tight mb-8">
          The Mansion Awaits.
        </h2>

        <p className="text-gray-300 text-lg leading-8 mb-14">
          Every room has been prepared.
          Every page has been written.
          Every candle has been lit.
          <br />
          Now the choice is yours...
        </p>

        {/* Buttons */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <Link
            href="/shop"
            className="bg-[#D96A1B] hover:bg-[#7A0F17] transition rounded-xl py-4 font-semibold text-[#E9E3D6]"
          >
            Shop the Fear
          </Link>

          <Link
            href="/rooms"
            className="border border-[#D96A1B] hover:bg-[#D96A1B] transition rounded-xl py-4 text-[#E9E3D6]"
          >
            Explore the Rooms
          </Link>

          <Link
            href="/book-of-shadows"
            className="border border-white/20 hover:border-[#D96A1B] transition rounded-xl py-4 text-[#E9E3D6]"
          >
            The Book of Shadows
          </Link>

          <Link
            href="/contact"
            className="border border-white/20 hover:border-[#D96A1B] transition rounded-xl py-4 text-[#E9E3D6]"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}