"use client";

import Image from "next/image";

export default function RoomsHero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">

      <Image
        src="/images/rooms/Rooms.jpg"
        alt="Nightmares Mansion"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.35em] text-[#D96A1B] mb-5">

            The Mansion

          </p>

          <h1 className="text-[#E9E3D6] text-5xl md:text-7xl font-bold leading-tight mb-8">

            Choose
            <br />
            A Door.

          </h1>

          <p className="text-gray-300 text-lg leading-8 max-w-xl">

            Six forgotten rooms lie beyond these halls.
            Every one tells a different Halloween story.
            The only question is...

            <br />
            <br />

            Which door will you open first?

          </p>

        </div>

      </div>

    </section>
  );
}