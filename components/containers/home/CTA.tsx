import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-prose">
        <Heading
          level="h2"
          size="medium"
          weight="thin"
          className="pb-2 text-center"
        >
          Elevate Your Experience
        </Heading>
        <hr className="mx-auto max-w-md border-t-2 border-zinc-200 pb-6" />
        <p className="text-center font-extralight">
          Discover a realm where intricate design meets natural beauty. Every
          corner of RLM Affairs is meticulously crafted, ensuring your event is
          nothing short of extraordinary.
        </p>
      </div>
    </section>
  );
};
