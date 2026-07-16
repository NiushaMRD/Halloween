import Link from "next/link";
import Image from "next/image";

const rooms = [
  {
    title: "The Cursed Wardrobe",
    subtitle: "Costumes",
    image: "/images/rooms/Comod.jpg",
    href: "/costumes",
  },
  {
    title: "Hall of Lost Faces",
    subtitle: "Masks",
    image: "/images/rooms/Maska.jpg",
    href: "/masks",
  },
  {
    title: "Spirit Chamber",
    subtitle: "Decorations",
    image: "/images/rooms/Otagh.jpg",
    href: "/decorations",
  },
];

export default function FeaturedRooms() {
  return (
    <section className="bg-[#0E0E10] py-16 md:py-20 lg:py-24">

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-[#D96A1B] text-xs sm:text-sm mb-3">
            Explore
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E9E3D6]">
            The Haunted Mansion
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-5 max-w-2xl mx-auto leading-relaxed">
            Every room hides a different nightmare...
            <br className="hidden sm:block" />
            Choose where your journey begins.
          </p>

        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {rooms.map((room) => (

            <Link
              key={room.title}
              href={room.href}
              className="group rounded-2xl overflow-hidden bg-[#18181B] border border-white/10 hover:border-[#D96A1B] transition-all duration-300"
            >

              <div className="relative h-[260px] sm:h-[300px] lg:h-[320px] overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <p className="text-[#D96A1B] uppercase tracking-[3px] text-xs sm:text-sm">
                    {room.subtitle}
                  </p>

                  <h3 className="text-[#E9E3D6] text-xl sm:text-2xl lg:text-3xl font-bold mt-2 leading-tight">
                    {room.title}
                  </h3>

                </div>

              </div>

            </Link>

          ))}

        </div>
        <div className="flex justify-center mt-14">

  <Link
    href="/rooms"
    className="inline-flex items-center gap-3 bg-[#D96A1B] hover:bg-[#7A0F17] transition-all duration-300 px-8 py-4 rounded-xl text-[#E9E3D6] font-semibold"
  >
    Explore Every Room
    <span>→</span>
  </Link>

</div>

      </div>

    </section>
  );
}