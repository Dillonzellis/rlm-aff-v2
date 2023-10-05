import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { FloralShowRoom } from "@/components/containers/home/FloralShowRoom";
import { SplitFeatures } from "@/components/containers/home/SplitFeatures";
import { BabyCakesHome } from "@/components/containers/home/BabyCakesHome";
import { ImageRow } from "@/components/containers/home/ImageRow";

export default function Home() {
  return (
    <main>
      <div className="border-b-4 border-b-zinc-300 py-4 text-center ">
        <div className="font-serif text-2xl font-semibold">RLM Affairs</div>
        <hr className="mx-auto my-1 max-w-[5rem]" />
        <div className="text-sm italic">
          &quot;Creating unforgettable moments,
          <br /> one celebration at a time.&quot;
        </div>
      </div>
      <HeroVid />
      <Welcome />
      <FloralShowRoom />
      <SplitFeatures />
      <BabyCakesHome />
      <ImageRow />
    </main>
  );
}
