import { HeroVid } from "@/components/sections/home/HeroVid";
import { Welcome } from "@/components/sections/home/Welcome";
import { FloralShowRoom } from "@/components/sections/home/FloralShowRoom";
import { SplitFeatures } from "@/components/sections/home/SplitFeatures";
import { BabyCakesHome } from "@/components/sections/home/BabyCakesHome";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="border-b-4 border-b-gray-400 bg-white py-4 text-center font-serif text-xl font-semibold">
        RLM Affairs
      </div>
      <HeroVid />
      <Welcome />
      <FloralShowRoom />
      <SplitFeatures />
      <BabyCakesHome />
    </main>
  );
}
