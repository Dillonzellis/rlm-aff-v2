import Image from "next/image";
import { Container } from "@/components/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/Section";

export const Welcome = () => {
  return (
    <Section border="borderTop" className="relative">
      <Image
        src="/leaves-top.png"
        alt=""
        width={867}
        height={327}
        className="absolute left-0 top-0 -z-10 max-w-[500px]"
      />
      <Image
        src="/leaves-right.png"
        alt=""
        width={473}
        height={612}
        className="absolute bottom-0 right-0 -z-10 max-w-[200px]"
      />
      <Container size="regular">
        <div className="z-10 flex items-center gap-20">
          <div className="font-light">
            <Heading level="h1" size="largest" className="pb-6 pt-8">
              Welcome to RLM Affairs
            </Heading>
            <div className="text-zinc-850 pb-4 tracking-wide">
              <em>Where love and celebration come together beautifully.</em>
            </div>
            <hr className="max-w-md border-t-2 border-zinc-200 pb-6" />
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
    </Section>
  );
};
