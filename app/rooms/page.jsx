import Header from '@/components/header/Header'
import RoomsHero from "@/components/header/rooms/RoomsHero";
import RoomsList from "@/components/header/rooms/RoomsList";
import Footer from "@/components/header/footer/Footer";

export default function RoomsPage() {
  return (
    <main className="bg-[#0E0E10]">

        <Header/>

      <RoomsHero />

      <RoomsList />

      <Footer/>

    </main>
  );
}