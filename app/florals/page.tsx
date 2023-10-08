import Image from "next/image";
import { Heading } from "@/components/ui/Heading";

const FloralsPage = () => {
  return (
    <main>
      <Image
        src="/florist.jpeg"
        alt="venue"
        width={1920}
        height={600}
        className="max-h-[600px] object-cover brightness-75"
      />
      <section className="py-10">
        <div className="relative">
          <div className="absolute left-4 top-1/2 w-[38%] -translate-y-1/2 rounded-full border-t-2 border-t-zinc-400/50"></div>
          <div className="absolute right-4 top-1/2 w-[38%] -translate-y-1/2 border-t-2 border-t-zinc-400/50"></div>
          <Heading level="h1" size="large" className="pb-4 text-center">
            Florals
          </Heading>
        </div>
        <p className="mx-auto max-w-[90ch] text-center">
          Pendry Manhattan West is a central spot for casual gatherings, not so
          casual special celebrations, and everything in-between. Featuring
          three distinct food & beverage destinations, a central perch in the
          city’s Manhattan West neighborhood and stunning backdrops from lobby
          to rooftop, every outing becomes an occasion.
        </p>
      </section>
    </main>
  );
};

export default FloralsPage;
