import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";

export const NewFeature = () => {
  return (
    <section className="border-b-[6px] border-b-zinc-50">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 space-y-6 px-8 font-light">
          <Heading level="h3" size="large" className="text-6xl font-thin">
            Venue Feature
          </Heading>
          <p>
            Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an
            entire Gala every bloom is hand picked and sourced eco friendly. Our
            retail storefront offers modern & unique items keeping everyone in
            mind
          </p>
          <ButtonLink href="/">Discover</ButtonLink>
        </div>
        <div className="col-span-8">
          <Image
            src="/venue-feature.jpeg"
            alt="lanterns"
            width={830}
            height={700}
            className="min-h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
