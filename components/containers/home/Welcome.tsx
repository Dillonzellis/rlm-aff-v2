import Image from "next/image";
import { Container } from "@/components/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const Welcome = () => {
  return (
    <section className="py-28">
      <Container size="regular">
        <div className="flex items-center gap-24">
          <div className="font-light">
            <Heading level="h1" size="largest" weight="thin" className="pb-8">
              Welcome to RLM Affairs
            </Heading>
            <div className="text-zinc-850 pb-4 tracking-wide">
              <em>Where love and celebration come together beautifully.</em>
            </div>
            <hr className="max-w-md border-t-2 border-zinc-200 pb-12" />
            <p className="pb-14 leading-8">
              Step into the world of RLM Affairs, from intimate celebrations to
              lavish receptions, our dedicated team crafts bespoke experiences,
              ensuring each moment is as unique as the celebration. Offering a
              curated suite of services from gourmet catering, exquisite
              florals, meticulous event planning, to creating magical
              receptions.
            </p>
            <ButtonLink href="">Schedule A Tour</ButtonLink>
          </div>
          <Image src="/logo-gold.png" alt="" height={400} width={400} />
        </div>
      </Container>
    </section>
  );
};
