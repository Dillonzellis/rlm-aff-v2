import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";

export const BabyCakesHome = () => {
  return (
    <section className="border-b-[6px] border-b-zinc-300">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 mx-auto space-y-6 px-8 font-light">
          <Heading>Event Planning</Heading>
          <p>
            At RLM Affairs we capture your vision and create the memories you
            have dreamed. Whether these dreams include something you have
            believed would be your day since you were a child, or an event you
            were asked to coordinate a week ago. Our goal is to elegantly bring
            your vision to life. Our amazing team has 40 years of industry
            experience guaranteeing a flawless execution.
          </p>
          <ButtonLink href="/">Discover</ButtonLink>
        </div>

        <div className="col-span-8">
          <Image
            src="/knotvenue.jpg"
            alt="lanterns"
            width={830}
            height={665}
            className="h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
