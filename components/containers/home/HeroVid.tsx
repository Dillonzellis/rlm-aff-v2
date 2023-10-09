import { ButtonLink } from "@/components/ui/ButtonLink";

export const HeroVid = () => {
  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dwopez4fs/video/upload/v1696387715/yt1s.com_-_Universal_EventSpace_Toronto_Wedding_Venue_Tour_Video_Walkthrough_720p_bpbfvj.mp4"
        // autoPlay
        muted
        loop
        className=""
      />
      <div className="absolute bottom-10 left-10 w-[50%] rounded-sm bg-white/60 px-12 py-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="text-4xl font-thin">RLM Affairs</div>
            <p className="max-w-[35ch] text-sm capitalize italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <ButtonLink href="">Book A tour</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
