import { HeroVid } from "@/components/sections/home/HeroVid";
import { Welcome } from "@/components/sections/home/Welcome";
import { FloralShowRoom } from "@/components/sections/home/FloralShowRoom";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="border-b-4 border-b-gray-400 bg-white py-4 text-center text-lg font-semibold text-gray-950">
        RLM Affairs
      </div>
      <HeroVid />
      <Welcome />
      <FloralShowRoom />
    </main>
  );
}
