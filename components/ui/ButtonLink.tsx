import { BsArrowRight } from "react-icons/bs";
import { cn } from "@/lib/utils";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = ({
  className,
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-4 rounded-sm bg-[#8B754A] px-6 py-4 font-normal capitalize text-zinc-50",
        className,
      )}
      {...props}
    >
      {children}
      <span>
        <BsArrowRight className="h-5 w-5" />
      </span>
    </a>
  );
};
