import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoPreview from "./VideoPreview";
gsap.registerPlugin(ScrollTrigger);

const arr = ["GAMING", "IDENTITY", "REALITY", "AGENTIC AI"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  // Total Videos...
  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  // getting the index of the next video by the modulo operation...
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // Handling the video click
  const handleMiniVDClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  // to load all the videos
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  // getting the video source...
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
    setIsLoading(false);
  };
  // Animate the center video with GSAP...
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", {
          visibility: "visible",
        });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // Animate the scroll effect to the next page
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(29% 0, 66% 0, 84% 78%, 0% 10%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const subHead = () => {
  if (currentIndex === 1) {
    return <>i<b>d</b>e<b>n</b>tit<b>y</b></>;
  } else if (currentIndex === 2) {
    return <>re<b>a</b>lit<b>y</b></>;
  } else if(currentIndex === 3){
    return <><b>a</b>ge<b>n</b>t<b>i</b>c <b>a</b>i</>;
  }else{
     return <>g<b>a</b>mi<b>n</b>g</>;
  }
};


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* main video frame */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-48 cursor-pointer overflow-hidden rounded-xl">
            <VideoPreview>
              {/* MiniVideoPlayer... */}
              <div
                onClick={handleMiniVDClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-90 hover:opacity-100 "
              >
                <video
                  loop
                  muted
                  src={getVideoSrc(upcomingVideoIndex)}
                  ref={nextVideoRef}
                  id="current-video"
                  className="size-52 origin-center scale-150 object-cover object-center border-2 border-black"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            autoPlay
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1
          style={{ letterSpacing: "0.3rem" }}
          className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"
        >
          {subHead()}
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1
              style={{ letterSpacing: "0.3rem" }}
              className="special-font hero-heading text-blue-100"
            >
              re<b>d</b>efi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 transition-all duration-300 ease-in-out hover:translate-y-2 hover:font-bold hover:translate-x-2 hover:bg-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300"
            />
          </div>
        </div>
      </div>

      <h1
        style={{ letterSpacing: "0.3rem" }}
        className="special-font hero-heading absolute bottom-5 right-5  text-black"
      >
        {subHead()}
      </h1>
    </div>
  );
};

export default Hero;
