import { BsArrowRight } from "react-icons/bs";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return (
    <a className="flex items-center gap-2 font-normal" {...props}>
      {children}
      <span>
        <BsArrowRight />
      </span>
    </a>
  );
};
