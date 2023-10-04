import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";

export const FloralShowRoom = () => {
  return (
    <section className="border-b-4 border-b-gray-400">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-8">
          <Image
            src="/lanterns-1.jpg"
            alt="lanterns"
            width={830}
            height={665}
            className="h-[500px] object-cover"
          />
        </div>
        <div className="col-span-4 mx-auto space-y-6 px-8 font-thin">
          <Heading>Floral Showroom</Heading>
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
      </div>
    </section>
  );
};
