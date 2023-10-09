import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { FloralShowRoom } from "@/components/containers/home/FloralShowRoom";
import { SplitFeatures } from "@/components/containers/home/SplitFeatures";
import { BabyCakesHome } from "@/components/containers/home/BabyCakesHome";
import { ImageRow } from "@/components/containers/home/ImageRow";
import { CTA } from "@/components/containers/home/CTA";
import { NewFeature } from "@/components/containers/home/NewFeature";

export default function Home() {
  return (
    <main id="content">
      <HeroVid />
      <Welcome />
      <FloralShowRoom />
      <CTA />
      <NewFeature />
      <ImageRow />
    </main>
  );
}
