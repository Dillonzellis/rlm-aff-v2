import Image from "next/image";
import { HeroVid } from "@/components/containers/home/HeroVid";
import { Welcome } from "@/components/containers/home/Welcome";
import { CTA } from "@/components/containers/home/CTA";
import { FullHeightImageSection } from "@/components/containers/layout/FullHeightImageSection";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Heading } from "@/components/ui/Heading";

export default function Home() {
  const awards = [
    { src: "/knot-2020.png", alt: "" },
    { src: "/knot2021.png", alt: "" },
    { src: "/knot2022.webp", alt: "" },
    { src: "/wedding-wire-2023.png", alt: "" },

    { src: "/knot-2020.png", alt: "" },
    { src: "/knot2021.png", alt: "" },
    { src: "/knot2022.webp", alt: "" },
    { src: "/wedding-wire-2023.png", alt: "" },
  ];

  return (
    <main id="content">
      <HeroVid />
      <Welcome />

      {/* Venue */}
      <FullHeightImageSection
        imgLeft
        imgSrc="/venue-feature.jpeg"
        imgAlt=""
        heading="Venue Feature"
        body="RLM Affairs offers all the services you may need for your event. Our staff works directly with our clients to tailor each event to your specific needs. Whether you need just catering, or a complete event design, we will work with you as much as you need, or we will provide you with A la carte services based specifically on your needs and budget."
        btnLink="/"
        btnText="Explore Today!"
      />

      {/* Floral */}
      <FullHeightImageSection
        border="borderBottom"
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

      <CTA />

      {/* Event Planning */}
      <FullHeightImageSection
        imgLeft
        imgSrc="/entrance.jpeg"
        imgAlt=""
        heading="Event Planning"
        body="At RLM Affairs we capture your vision and create the memories you have dreamed. Whether these dreams include something you have believed would be your day since you were a child, or an event you were asked to coordinate a week ago. Our goal is to elegantly bring your vision to life. Our amazing team has 40 years of industry experience guaranteeing a flawless execution."
        btnLink="/"
        btnText="Discover"
      />

      {/* Catering */}
      <FullHeightImageSection
        border="borderBottom"
        imgSrc="/catering-feature.jpeg"
        imgAlt=""
        heading="Renowned Catering"
        body="Celebrate with delectable delights handcrafted by our culinary experts. Our catering service promises a gourmet experience, seamlessly blending flavors and presentation to elevate your event to a memorable feast."
        btnLink="/"
        btnText="Have A Taste"
      />

      {/* Testimonials */}
      {/* <section className="py-28"> */}
      {/*   <Container> */}
      {/*     <div> */}
      {/*       <div>Testimonial Cards</div> */}
      {/*     </div> */}
      {/*   </Container> */}
      {/* </section> */}

      {/* Marquee */}
      <Section border="none">
        <Container size="regular">
          <div className="space-y-8">
            <div className="text-center text-lg capitalize">
              were proud to partner with leading organizations and receive top
              industry accolades
            </div>
            <Marquee pauseOnHover pauseOnClick>
              <div className="flex justify-center gap-8">
                {awards.map((award, idx) => (
                  <Image
                    key={idx}
                    src={award.src}
                    alt={award.alt}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
    </main>
  );
}
