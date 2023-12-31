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
      largest: "text-5xl",
      large: "text-5xl",
      medium: "text-3xl",
    },
    weight: {
      light: "font-light",
      thin: "font-thin",
      regular: "font-regular",
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "light",
  },
});

export const Heading = ({
  level,
  children,
  className,
  size,
  weight,
}: HeadingProps) => {
  const TagName = level as keyof JSX.IntrinsicElements;
  return (
    <TagName className={cn(HeadingVariants({ size, weight }), className)}>
      {children}
    </TagName>
  );
};
