import { Container } from "@/components/Container";

export const Welcome = () => {
  return (
    <section className="border-b-4 border-b-gray-400 py-8">
      <Container>
        <div className="max-w-prose font-thin">
          <h2 className="pb-2 font-serif text-5xl font-medium">
            Welcome to RLM Affairs
          </h2>
          <div className="pb-4">
            SEE A NEW SIDE OF THE CITY. ONLY AT PENDRY.
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
