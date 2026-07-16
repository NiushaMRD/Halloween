"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">

      {/* Background Image */}

      <Image
        src="/images/about/about-hero.jpg"
        alt="The Keeper of Nightmares"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Warm Fire Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">

        <div className="max-w-xl">

          <p className="uppercase tracking-[0.35em] text-[#D96A1B] text-sm mb-5">
            Hello, Traveler
          </p>

          <h1 className="text-[#E9E3D6] text-5xl md:text-7xl font-bold leading-tight mb-8">
            Welcome to
            <br />
            Our Library
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10">
           You've already crossed the threshold.
<br />If you're reading these words, <br />then the mansion has chosen to reveal itself to you.
<br /> Most people pass by these halls without ever noticing them.
            <br />
            But you've already stepped inside. <br /> I wish you luck in escaping here.
          </p>

          <button className="bg-[#D96A1B] hover:bg-[#7A0F17] transition px-8 py-4 rounded-xl text-[#E9E3D6] font-semibold">
            Continue Reading
          </button>

        </div>

      </div>

    </section>
  );
}