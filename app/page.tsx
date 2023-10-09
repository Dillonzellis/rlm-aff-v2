import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { FloralShowRoom } from "@/components/containers/home/FloralShowRoom";
import { CTA } from "@/components/containers/home/CTA";
import { NewFeature } from "@/components/containers/home/NewFeature";
import { FullHeightImageSection } from "@/components/containers/layout/FullHeightImageSection";

export default function Home() {
  return (
    <main id="content">
      <HeroVid />
      <Welcome />
      <FullHeightImageSection
        imgLeft
        imgSrc="/floral-showroom.jpeg"
        imgAlt="floral"
        heading="Floral Showroom"
        body="
            Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an
            entire Gala every bloom is hand picked and sourced eco friendly. Our
            retail storefront offers modern & unique items keeping everyone in
            mind
          "
        btnLink="/"
        btnText="Discover"
      />
      <CTA />
      <FullHeightImageSection
        imgSrc="/venue-feature.jpeg"
        imgAlt=""
        heading="Venue Feature"
        body="Floral Showroom: RLM Affairs is a full-service florist serving North
        Georgia for 40 years. Our award winning designers offer exquisite
        attention to detail. Whether it’s a single rose or decor for an
        entire Gala every bloom is hand picked and sourced eco friendly. Our
        retail storefront offers modern & unique items keeping everyone in
        mind
        "
        btnLink="/"
        btnText="Discover"
      />
    </main>
  );
}
