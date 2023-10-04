import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import Image from "next/image";

type FeatureProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  body: string;
  btnLabel?: string;
  btnHref: string;
};

const Feature = ({
  imgSrc,
  imgAlt,
  title,
  body,
  btnLabel = "Discover",
  btnHref,
}: FeatureProps) => {
  return (
    <div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={617}
        height={450}
        className="mb-6 max-h-[450px] w-full object-cover"
      />
      <div className="space-y-4 px-8">
        <Heading>{title}</Heading>
        <p>{body}</p>
        <ButtonLink href={btnHref}>{btnLabel}</ButtonLink>
      </div>
    </div>
  );
};

export const SplitFeatures = () => {
  return (
    <section className="grid grid-cols-2 gap-2 border-b-[6px] pb-8">
      <Feature
        imgSrc="/florist.jpeg"
        imgAlt=""
        title="RLM Florist"
        body="Fresh Florals: RLM Affairs is a full-service florist serving North Georgia for 40 years. Our award winning designers offer exquisite attention to detail. Whether it’s a single rose or decor for an entire Gala every bloom is hand picked and sourced eco friendly. Our retail storefront offers modern & unique items keeping everyone in mind."
        btnHref="/"
      />
      <Feature
        imgSrc="/newphotosluke2.jpg"
        imgAlt=""
        title="Catering Services"
        body="RLM Affairs offers all the services you may need for your event. Our staff works directly with our clients to tailor each event to your specific needs. Whether you need just catering, or a complete event design, we will work with you as much as you need, or we will provide you with A la carte services based specifically on your needs and budget."
        btnHref="/"
      />
    </section>
  );
};
