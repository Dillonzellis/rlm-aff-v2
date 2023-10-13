import Image from "next/image";
import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { CTA } from "@/components/containers/home/CTA";
import { FullHeightImageSection } from "@/components/containers/layout/FullHeightImageSection";
import { Heading } from "@/components/ui/Heading";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <main id="content">
      <HeroVid />
      <Welcome />

      <FullHeightImageSection
        imgLeft
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

      <CTA />

      <FullHeightImageSection
        imgSrc="/floral-showroom.jpeg"
        imgAlt="floral"
        heading="Floral Artist"
        body="
            RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an
            entire Gala every bloom is hand picked and sourced eco friendly. "
        btnLink="/"
        btnText="Discover"
      />

      {/* Event Planning */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 items-center gap-8">
            <Image
              src="/entrance.jpeg"
              alt=""
              width={740}
              height={520}
              className="max-h-[820px] w-full rounded-sm object-cover"
            />
            <div className="flex h-full w-full flex-col justify-center space-y-8 bg-[#F2F5F5] px-12">
              <Heading level="h2" size="large" weight="thin">
                Event Planning
              </Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur officiis amet delectus adipisci aut, iusto assumenda
                dignissimos ipsa ullam aliquam enim perferendis? Sed quas quod
                expedita aliquid vitae quia eos!
              </p>
              <ButtonLink href="" className="self-start">
                Learn More
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Catering */}
      <FullHeightImageSection
        imgLeft
        imgSrc="/catering-feature.jpeg"
        imgAlt=""
        heading="Catering Feature"
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

      {/* Testimonials */}
      <section className="py-28">
        <Container>
          <div>
            <div>Testimonial Cards</div>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <section className="py-28">
        <div>Marquee section</div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
    </main>
  );
}
