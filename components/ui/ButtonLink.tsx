import { BsArrowRight } from "react-icons/bs";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <a
      className="inline-flex items-center gap-4 rounded-sm bg-[#8B754A] px-6 py-4 font-normal capitalize text-zinc-50"
      {...props}
    >
      {children}
      <span>
        <BsArrowRight className="h-5 w-5" />
      </span>
    </a>
  );
};
