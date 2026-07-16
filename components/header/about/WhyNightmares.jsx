"use client";

import Link from "next/link";

const paths = [
  {
    title: "Every Room Tells a Story",
    text: "Each room inside the mansion hides a different Halloween experience waiting to be explored.",
    href: "/rooms",
  },
  {
    title: "Affordable Magic",
    text: "Beautiful Halloween products should be within everyone's reach, without losing their atmosphere.",
    href: "/shop",
  },
  {
    title: "The Book of Shadows",
    text: "An ancient collection of forgotten stories, rituals, movie recommendations and haunted inspiration.",
    href: "/book-of-shadows",
  },
  {
    title: "A Mansion Worth Returning To",
    text: "Nightmares is designed to be explored again and again, with every visit revealing something new.",
    href: "/",
  },
];

export default function WhyNightmares() {
  return (
    <section className="bg-[#0E0E10] py-24 px-6">

      <div className="max-w-[1280px] mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-[#D96A1B] text-sm mb-4">
            Why Nightmares?
          </p>

          <h2 className="text-[#E9E3D6] text-4xl md:text-5xl font-bold">
            Four Doors.
            <br />
            Four Reasons To Stay.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {paths.map((item) => (

            <Link
              key={item.title}
              href={item.href}
              className="group bg-[#151518] border border-white/10 rounded-2xl p-8 hover:border-[#D96A1B] transition-all duration-300 hover:-translate-y-1"
            >

              <h3 className="text-[#E9E3D6] text-2xl font-semibold mb-5 group-hover:text-[#D96A1B] transition">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>

              <div className="mt-8 text-[#D96A1B] font-medium">
                Open the Door →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}