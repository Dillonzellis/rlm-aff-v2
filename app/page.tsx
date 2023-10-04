import Image from "next/image";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main className="font-sans">
      <div className="border-b-gray-600 bg-white py-4 text-center text-lg font-semibold text-gray-950">
        RLM Affairs
      </div>
      <div>
        <video
          src="https://res.cloudinary.com/dwopez4fs/video/upload/v1696387715/yt1s.com_-_Universal_EventSpace_Toronto_Wedding_Venue_Tour_Video_Walkthrough_720p_bpbfvj.mp4"
          // autoPlay
          muted
          loop
        />
      </div>
      <section className="py-8">
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
              destination that blends elegance and ease with seamless style in
              the very heart of the city. From the stunning signature façade
              anchoring the Manhattan West neighborhood to the airy and relaxed
              interiors that bring a sense of refined calm to your city stay to
              the highly personalized luxury service and amenities that cater
              with style and sophistication, we are an extension of the city’s
              always unique energy with a pulse that is all our own.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <div>
          <div>{/* <Image src="" /> */}</div>
        </div>
        <div>
          <h3>Floral Showroom</h3>
          <p>
            Floral Showroom: RLM Affairs is a full-service florist serving North
            Georgia for 40 years. Our award winning designers offer exquisite
            attention to detail. Whether it’s a single rose or decor for an
            entire Gala every bloom is hand picked and sourced eco friendly. Our
            retail storefront offers modern & unique items keeping everyone in
            mind
          </p>
        </div>
      </section>
    </main>
  );
}
