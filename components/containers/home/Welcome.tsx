import { Container } from "@/components/Container";
import { Heading } from "@/components/ui/Heading";

export const Welcome = () => {
  return (
    <section className="border-b-[6px] border-b-zinc-300 py-10">
      <Container>
        <div className="max-w-prose space-y-4 font-light">
          <Heading level="h1" size="large">
            Welcome to RLM Affairs
          </Heading>
          <div className="text-zinc-850 tracking-wide">
            <em>SEE A NEW SIDE OF THE CITY. ONLY AT PENDRY.</em>
          </div>
          <p>
            Pendry Manhattan West is an understated, California-inspired
            destination that blends elegance and ease with seamless style in the
            very heart of the city. From the stunning signature façade anchoring
            the Manhattan West neighborhood to the airy and relaxed interiors
            that bring a sense of refined calm to your city stay to the highly
            personalized luxury service and amenities that cater with style and
            sophistication, we are an extension of the city’s always unique
            energy with a pulse that is all our own.
          </p>
        </div>
      </Container>
    </section>
  );
};
