import Image from "next/image";
import Link from "next/link";

const chapters = [
  {
    title: "Horror Stories",
    description:
      "Some stories should never have been found. Turn each page only if you dare.",
    image: "/images/book/Dastan.jpg",
    href: "/book-of-shadows/horror-stories",
  },
  {
    title: "How to Become a...",
    description:
      "Learn how to become a witch, vampire, ghost and other terrifying creatures.",
    image: "/images/book/Arayesh.jpg",
    href: "/book-of-shadows/how-to-become",
  },
  {
    title: "Movie Recommendations",
    description:
      "Discover horror classics and Halloween movies that inspired Nightmares.",
    image: "/images/book/Cinema.jpg",
    href: "/book-of-shadows/movie-recommendations",
  },
  {
    title: "My Scary Mansion",
    description:
      "Create your own haunted home with decorations, lighting and spooky details.",
    image: "/images/book/Decor.jpg",
    href: "/book-of-shadows/my-scary-mansion",
  },
];

export default function BookOfShadowsPage() {
  return (
    <main className="bg-[#0E0E10] min-h-screen">

      {/* Hero */}

      <section className="relative h-[70vh] flex items-center justify-center">

        <Image
          src="/images/book/Book.jpg"
          alt="Book of Shadows"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center px-6 max-w-3xl">

          <p className="uppercase tracking-[0.4em] text-[#D96A1B] mb-4">
            Hidden Deep Within The Mansion
          </p>

          <h1 className="text-[#E9E3D6] text-5xl md:text-7xl font-bold mb-6">
            The Book of Shadows
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Every forgotten page hides another nightmare. Read carefully...
            some stories refuse to stay on paper.
          </p>

        </div>

      </section>

      {/* Chapters */}

      <section className="max-w-[1280px] mx-auto py-24 px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {chapters.map((chapter) => (

            <article
              key={chapter.title}
              className="bg-[#151518] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D96A1B]/60 transition-all duration-300"
            >

              <Image
                src={chapter.image}
                alt={chapter.title}
                width={700}
                height={450}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <h2 className="text-[#E9E3D6] text-3xl font-bold mb-4">
                  {chapter.title}
                </h2>

                <p className="text-gray-400 leading-8 mb-8">
                  {chapter.description}
                </p>

                <Link
                  href={chapter.href}
                  className="inline-block bg-[#D96A1B] hover:bg-[#7A0F17] transition px-6 py-3 rounded-xl text-[#E9E3D6] font-medium"
                >
                  Read the Page
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}