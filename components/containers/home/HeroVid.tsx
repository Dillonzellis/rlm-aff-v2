export const HeroVid = () => {
  return (
    <div className="relative">
      {/* <video */}
      {/*   src="https://res.cloudinary.com/dwopez4fs/video/upload/v1696387715/yt1s.com_-_Universal_EventSpace_Toronto_Wedding_Venue_Tour_Video_Walkthrough_720p_bpbfvj.mp4" */}
      {/*   autoPlay */}
      {/*   muted */}
      {/*   loop */}
      {/*   className="" */}
      {/* /> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/y7GCz-M9Rgw?si=4lCp0khUqVKUglem"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-[600px] w-full"
      ></iframe>
    </div>
  );
};
