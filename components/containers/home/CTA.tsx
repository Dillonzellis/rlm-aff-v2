import { Heading } from "@/components/ui/Heading";

export const CTA = () => {
  return (
    <section className="py-36">
      <div className="mx-auto">
        <Heading
          level="h2"
          size="large"
          weight="thin"
          className="pb-4 text-center"
        >
          Elevate Your Experience
        </Heading>
        <hr className="mx-auto max-w-[80px] border-t-2 border-zinc-200 pb-4" />
        <p className="mx-auto max-w-[50ch] text-center font-extralight leading-8">
          Discover a realm where intricate design meets natural beauty. Every
          corner of RLM Affairs is meticulously crafted, ensuring your event is
          nothing short of extraordinary.
        </p>
      </div>
    </section>
  );
};
