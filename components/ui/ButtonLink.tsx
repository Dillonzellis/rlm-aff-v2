import { BsArrowRight } from "react-icons/bs";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <a
      className="flex inline-flex items-center gap-4 rounded-sm border border-zinc-800 px-6 py-4 font-normal capitalize"
      {...props}
    >
      {children}
      <span>
        <BsArrowRight className="h-5 w-5" />
      </span>
    </a>
  );
};
