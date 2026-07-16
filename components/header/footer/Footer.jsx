import Link from "next/link";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0A0A0C] border-t border-[#D96A1B]/20">

      {/* Top */}
      <div className="max-w-[1280px] mx-auto px-8 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#D96A1B] mb-3">
            Until Next Halloween
          </p>

          <h2 className="text-5xl font-bold text-[#E9E3D6]">
            The Nightmare Never Ends
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Every haunted room has a story...
            Every story leaves a shadow behind.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Explore */}

          <div>

            <h3 className="text-[#D96A1B] font-semibold mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-[#E9E3D6]/80">

              <li><Link href="/shop">Shop</Link></li>

              <li><Link href="/rooms">Rooms</Link></li>

              <li><Link href="/collections">Collections</Link></li>

              <li><Link href="/blog">Blog</Link></li>

            </ul>

          </div>

          {/* Customer */}

          <div>

            <h3 className="text-[#D96A1B] font-semibold mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3 text-[#E9E3D6]/80">

              <li><Link href="/">Shipping</Link></li>

              <li><Link href="/">Returns</Link></li>

              <li><Link href="/">FAQ</Link></li>

              <li><Link href="/">Privacy Policy</Link></li>

            </ul>

          </div>

          {/* About */}

          <div>

            <h3 className="text-[#D96A1B] font-semibold mb-5">
              About
            </h3>

            <ul className="space-y-3 text-[#E9E3D6]/80">

              <li><Link href="/about">Our Story</Link></li>

              <li><Link href="/contact">Contact</Link></li>

              <li><Link href="/careers">Careers</Link></li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-[#D96A1B] font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl text-[#E9E3D6]">

  <FaInstagram className="hover:text-[#D96A1B] transition cursor-pointer" />

  <FaPinterest className="hover:text-[#D96A1B] transition cursor-pointer" />

  <FaTiktok className="hover:text-[#D96A1B] transition cursor-pointer" />

  <FaYoutube className="hover:text-[#D96A1B] transition cursor-pointer" />

</div>

          </div>

        </div>

      </div>

      {/* Story Quote */}

      <div className="border-y border-white/10">

        <div className="max-w-3xl mx-auto px-8 py-16 text-center">

          <p className="text-2xl text-[#D96A1B] mb-6">
            🦇 Thank you for visiting Nightmares...
          </p>

          <p className="text-[#E9E3D6]/80 text-lg leading-8">
            You've escaped...
            <br />
            <span className="text-[#D96A1B]">
              for now.
            </span>
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="max-w-[1280px] mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-500 text-sm">
          © 2026 Nightmares. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">

          <Link href="/">Privacy</Link>

          <Link href="/">Terms</Link>

          <Link href="/">Cookies</Link>

        </div>

      </div>

    </footer>
  );
}