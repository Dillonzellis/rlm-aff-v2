import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/Container";

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
      width={850}
      height={500}
      className="h-[650px] w-full object-cover"
    />
  );

  const contentComponent = (
    <div className="mx-auto px-8">
      <Heading level="h3" size="large" className="pb-10">
        {heading}
      </Heading>
      <p className="pb-10 leading-8">{body}</p>
      <ButtonLink href={btnLink}>{btnText}</ButtonLink>
    </div>
  );

  return (
    <section>
      <Container>
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
      </Container>
    </section>
  );
};
