import { BsArrowRight } from "react-icons/bs";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <a className="flex items-center gap-4 font-normal capitalize" {...props}>
      {children}
      <span>
        <BsArrowRight className="h-5 w-5" />
      </span>
    </a>
  );
};
