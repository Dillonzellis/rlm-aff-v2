import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

type SectionVariants = VariantProps<typeof SectionVariants>;

type SectionProps = HTMLAttributes<HTMLElement> & SectionVariants;

const SectionVariants = cva("", {
  variants: {
    border: {
      none: "",
      borderTop: "border-t-[6px]",
      borderBottom: "border-b-[6px]",
      borderBoth: "border-[6px]",
    },
    padding: {
      normal: "py-28",
    },
  },
  defaultVariants: {
    border: "borderBoth",
    padding: "normal",
  },
});

export const Section = ({
  children,
  className,
  border,
  padding,
  ...props
}: SectionProps) => {
  return (
    <div
      className={cn(SectionVariants({ border, padding }), className)}
      {...props}
    >
      {children}
    </div>
  );
};
