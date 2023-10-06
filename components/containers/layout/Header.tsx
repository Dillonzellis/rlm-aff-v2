import Link from "next/link";

type HeaderItemProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
};

const HeaderItem = ({ children, href, ariaLabel }: HeaderItemProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="text-sm font-medium uppercase hover:text-zinc-950"
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="text-zinc-750 mx-auto w-[50rem] rounded-full bg-zinc-50/70 py-3 text-center backdrop-blur">
      <Link href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </Link>
      <nav
        className="flex items-center justify-center gap-20"
        role="navigation"
        aria-label="Main navigation"
      >
        <HeaderItem href="/venue" ariaLabel="visit Venue page">
          Venue
        </HeaderItem>
        <HeaderItem href="/catering" ariaLabel="visit Catering Page">
          Catering
        </HeaderItem>
        <Link
          href="/"
          aria-label="visit Home page"
          className="font-serif text-3xl hover:text-zinc-950"
        >
          RLM Affairs
        </Link>
        <HeaderItem href="/florals" ariaLabel="visit Florals page">
          Florals
        </HeaderItem>
        <HeaderItem href="/our-story" ariaLabel="visit Our Story page">
          Our Story
        </HeaderItem>
      </nav>
    </div>
  );
};
