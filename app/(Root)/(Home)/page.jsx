import React from "react";
import Hero from "@/components/header/sections/Hero";
import FeaturedRooms from "@/components/header/sections/FeaturedRooms";
import BookOfShadows from "@/components/header/BookOfShadows";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedRooms />
      <BookOfShadows/>
    </>
  );
}
