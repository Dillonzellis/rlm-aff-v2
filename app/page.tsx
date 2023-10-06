import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { FloralShowRoom } from "@/components/containers/home/FloralShowRoom";
import { SplitFeatures } from "@/components/containers/home/SplitFeatures";
import { BabyCakesHome } from "@/components/containers/home/BabyCakesHome";
import { ImageRow } from "@/components/containers/home/ImageRow";

export default function Home() {
  return (
    <main id="content">
      <HeroVid />
      <Welcome />
      <FloralShowRoom />
      <SplitFeatures />
      <BabyCakesHome />
      <ImageRow />
    </main>
  );
}
