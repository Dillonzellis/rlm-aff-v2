import { Container } from "@/components/Container";
import { navLinks } from "@/lib/data/nav";
import Image from "next/image";
import Link from "next/link";

const awards = [
  { src: "/knot-2020.png", alt: "" },
  { src: "/knot2021.png", alt: "" },
  { src: "/knot2022.webp", alt: "" },
  { src: "/wedding-wire-2023.png", alt: "" },
];

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-10 text-zinc-50">
      <Container>
        <div className="font-serif text-2xl font-semibold">Follow Us</div>
        <ul className="flex justify-around py-8 font-normal">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4">
          {awards.map((award, idx) => (
            <Image
              key={idx}
              src={award.src}
              alt={award.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
};
