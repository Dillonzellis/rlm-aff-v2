import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/ButtonLink";

type FullHeightImageSectionProps = {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  body: string;
  btnLink: string;
  btnText: string;
  imgLeft?: boolean;
};

export const FullHeightImageSection = ({
  imgLeft = false,
  imgSrc,
  imgAlt,
  heading,
  body,
  btnLink,
  btnText,
}: FullHeightImageSectionProps) => {
  const imgComponent = (
    <Image
      src={imgSrc}
      alt={imgAlt}
      width={830}
      height={700}
      className="min-h-[700px] object-cover"
    />
  );

  const contentComponent = (
    <div className="mx-auto space-y-6 px-8">
      <Heading level="h3" size="large" className="text-6xl font-thin">
        {heading}
      </Heading>
      <p>{body}</p>
      <ButtonLink href={btnLink}>{btnText}</ButtonLink>
    </div>
  );

  return (
    <section>
      <div className="grid grid-cols-12 items-center">
        {imgLeft ? (
          <>
            <div className="col-span-8">{imgComponent}</div>
            <div className="col-span-4">{contentComponent}</div>
          </>
        ) : (
          <>
            <div className="col-span-4">{contentComponent}</div>
            <div className="col-span-8">{imgComponent}</div>
          </>
        )}
      </div>
    </section>
  );
};
