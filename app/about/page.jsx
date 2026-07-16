import Header from '@/components/header/Header'
import AboutHero from "@/components/header/about/AboutHero";
import Legend from "@/components/header/about/Legend";
import Philosophy from "@/components/header/about/Philosophy";
import WhyNightmares from "@/components/header/about/WhyNightmares";
import AboutCTA from "@/components/header/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[#0E0E10]">
<Header/>
     
      <AboutHero />

      <Legend />

      <Philosophy />

      <WhyNightmares />

      <AboutCTA />

    </main>
  );
}