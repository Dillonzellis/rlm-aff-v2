import Image from "next/image";

export const ImageRow = () => {
  return (
    <div className="flex gap-1 border-b-[6px] border-b-zinc-300">
      <Image
        src="/chairs.jpeg"
        alt=""
        width={500}
        height={500}
        className="max-h-[300px] object-cover"
      />
      <Image
        src="/cakes.jpeg"
        alt=""
        width={500}
        height={500}
        className="max-h-[300px] object-cover"
      />

      <Image
        src="/tucker.jpeg"
        alt=""
        width={500}
        height={500}
        className="max-h-[300px] object-cover"
      />
    </div>
  );
};
