import type { ChildrenProps } from "@/lib/types";

export const Heading = ({ children }: ChildrenProps) => {
  return <h3 className=" text-3xl">{children}</h3>;
};
