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
      className="text-sm font-medium uppercase"
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="border-b-4 border-b-zinc-300 py-4 text-center ">
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
        <Link href="/" aria-label="visit Home page">
          <div className="font-serif text-2xl font-semibold">RLM Affairs</div>
          <hr className="mx-auto my-1 max-w-[5rem]" />
          <div className="text-sm italic">
            &quot;Creating unforgettable moments,
            <br /> one celebration at a time.&quot;
          </div>
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
