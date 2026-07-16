"use client";

import Image from "next/image";
import Link from "next/link";

const pages = [
  {
    title: "Horror Stories",
    description:
      "Some stories were never meant to be read. Turn the page if you dare...",
    image: "/images/book/Dastan.jpg",
    href: "/book-of-shadows",
  },
  {
    title: "How to Become a...",
    description:
      "Become a witch, vampire, ghost, or something far more terrifying.",
    image: "/images/book/Arayesh.jpg",
    href: "/book-of-shadows",
  },
  {
    title: "My Scary Mansion",
    description:
      "Every haunted home begins with a single candle and a forgotten secret.",
    image: "/images/book/Decor.jpg",
    href: "/book-of-shadows",
  },
];

export default function BookOfShadows() {
  return (
    <section className="bg-[#0E0E10] py-24 px-6">

      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#D96A1B] text-sm mb-4">
            Hidden Within the Mansion
          </p>

          <h2 className="text-[#E9E3D6] text-4xl md:text-5xl font-bold mb-6">
            The Book of Shadows
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            Hidden somewhere inside the mansion lies an ancient book.
            Every forgotten page reveals another nightmare waiting to
            be discovered.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {pages.map((page) => (

            <article
              key={page.title}
              className="group rounded-2xl overflow-hidden bg-[#151518] border border-white/10 hover:border-[#D96A1B]/60 transition-all duration-300"
            >

              <div className="relative overflow-hidden">

                <Image
                  src={page.image}
                  alt={page.title}
                  width={600}
                  height={400}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-black/20 to-transparent" />

              </div>

              <div className="p-8">

                <h3 className="text-[#E9E3D6] text-2xl font-semibold mb-4">
                  {page.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-8">
                  {page.description}
                </p>

                <Link
                  href={page.href}
                  className="inline-flex items-center rounded-xl bg-[#D96A1B] hover:bg-[#7A0F17] transition px-6 py-3 text-[#E9E3D6] font-medium"
                >
                  Read the Page
                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-20">

          <h3 className="text-[#E9E3D6] text-3xl font-bold mb-4">
            Discover Every Forgotten Page
          </h3>

          <p className="text-gray-400 mb-8">
            Every page uncovers another mystery hidden inside Nightmares.
          </p>

          <Link
            href="/book-of-shadows"
            className="inline-flex items-center rounded-xl bg-[#D96A1B] hover:bg-[#7A0F17] transition px-8 py-4 text-[#E9E3D6] font-semibold"
          >
            Explore the Book
          </Link>

        </div>

      </div>

    </section>
  );
}