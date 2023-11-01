import Image from "next/image";
import type { ChildrenProps } from "@/lib/types";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

type FullHeightImageSectionProps = {
  border?: "none" | "borderTop" | "borderBottom" | "borderBoth";
  imgSrc: string;
  imgAlt: string;
  heading: string;
  body: string;
  btnLink: string;
  btnText: string;
  imgLeft?: boolean;
};

type ContentComponentProps = {
  left?: boolean;
};

export const FullHeightImageSection = ({
  border,
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

  const ContentWrapper = ({ children }: ChildrenProps) => {
    return (
      <div className="relative col-span-4 flex h-full items-center">
        {children}
      </div>
    );
  };

  const ContentComponent = ({ left }: ContentComponentProps) => {
    const imgPositionClass = left ? "left-0" : "right-0";
    const imgClass = `absolute ${imgPositionClass} top-0`;

    return (
      <div className="mx-auto px-8">
        <Image
          src="/leaves-1.png"
          alt=""
          width={73}
          height={95}
          className={imgClass}
        />
        <Heading level="h3" size="large" className="pb-10">
          {heading}
        </Heading>
        <p className="pb-10 leading-8">{body}</p>
        <ButtonLink href={btnLink}>{btnText}</ButtonLink>
      </div>
    );
  };

  return (
    <Section padding="none" border={border}>
      <Container>
        <div className="grid grid-cols-12 items-center">
          {imgLeft ? (
            <>
              <div className="col-span-8">{imgComponent}</div>
              <ContentWrapper>
                <ContentComponent />
              </ContentWrapper>
            </>
          ) : (
            <>
              <ContentWrapper>
                <ContentComponent left />
              </ContentWrapper>
              <div className="col-span-8">{imgComponent}</div>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
};
