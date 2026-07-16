"use client";

import Image from "next/image";

export default function Legend() {
  return (
    <section className="bg-[#0E0E10] py-24 px-6">

      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}

        <div>

          <p className="uppercase tracking-[0.3em] text-[#D96A1B] text-sm mb-4">
            The Legend
          </p>

          <h2 className="text-[#E9E3D6] text-4xl md:text-5xl font-bold leading-tight mb-8">
            Every Mansion Has
            <br />
            A Story.
          </h2>

          <div className="space-y-6 text-gray-300 leading-8 text-lg">

            <p>
              Long before travelers discovered these halls,
              this mansion stood alone beneath endless autumn skies.
            </p>

            <p>
              Some came searching for forgotten knowledge.
              Others sought magic, mystery, or monsters.
              Few ever left unchanged.
            </p>

            <p>
              The rooms you wander through today are more than
              collections of costumes, candles and decorations.
              They are fragments of the mansion itself,
              carefully preserved for those who still believe
              Halloween should feel unforgettable.
            </p>

            <p className="text-[#D96A1B] italic">
              "If you have found this place...
              perhaps it has been waiting for you."
            </p>

          </div>

        </div>

        {/* Image */}

        <div className="relative rounded-3xl overflow-hidden border border-white/10">

          <Image
            src="/images/about/legend.jpg"
            alt="The Mansion"
            width={700}
            height={850}
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </section>
  );
}