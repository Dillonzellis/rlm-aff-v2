import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

type HeadingVariants = VariantProps<typeof HeadingVariants>;

type HeadingProps = HeadingVariants & {
  level: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

const HeadingVariants = cva("", {
  variants: {
    size: {
      large: "text-5xl text-zinc-900",
      medium: "text-3xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const Heading = ({ level, children, className, size }: HeadingProps) => {
  const TagName = level as keyof JSX.IntrinsicElements;
  return (
    <TagName className={cn(HeadingVariants({ size }), className)}>
      {children}
    </TagName>
  );
};
