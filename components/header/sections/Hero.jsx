import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/haunted-mansion.jpg"
        alt="Haunted Mansion"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Moon Light */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Bottom Fog */}
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-56 lg:h-64 bg-gradient-to-t from-[#0E0E10] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto min-h-[100svh] flex items-center px-5 sm:px-8 lg:px-10">

        <div className="max-w-xl">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-[#D96A1B] text-xs sm:text-sm mb-3 md:mb-4">
            Welcome To
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#E9E3D6] leading-none mb-5 md:mb-6">
            NIGHTMARES
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#E9E3D6]/90 leading-relaxed mb-8 md:mb-10">
            Every nightmare begins with a
            <span className="text-[#D96A1B]"> single </span>
            step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">

            <Link
              href="/shop"
              className="bg-[#D96A1B] hover:bg-[#7A0F17] px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold transition text-center"
            >
              Shop the Fear
            </Link>

            <Link
              href="/rooms"
              className="border border-white/30 hover:border-[#D96A1B] px-6 md:px-8 py-3 md:py-4 rounded-xl text-white transition text-center"
            >
              Explore the Mansion
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}