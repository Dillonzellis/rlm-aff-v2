import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1100px] px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
};
