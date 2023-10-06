import type { ChildrenProps } from "@/lib/types";

export const Heading = ({ children }: ChildrenProps) => {
  return <h3 className="font-serif text-3xl">{children}</h3>;
};
