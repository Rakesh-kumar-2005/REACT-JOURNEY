import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

// Enabling the ScrollTrigger plugin...
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  // background image animation...
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
       
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcom to Zentry
        </h2>

        {/* Animated text... */}
        <AnimatedTitle
          title="<b>d</b>isc<b>o</b>ver t<b>h</b>e w<b>o</b>rl<b>d</b>s <br /> l<b>a</b>rg<b>e</b>st sh<b>a</b>re<b>d</b> <b>a</b>dve<b>n</b>t<b>u</b>re"
           containerClass="mt-5 !text-black text-center"
        />

       

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms
          </p>
        </div>
      </div>


      <div className="h-dvh w-screen overflow-hidden" id="clip">
         <div className="absolute -top-[210px] -left-[400px] h-full w-[2000px] z-40 overflow-hidden">
           <img src="img/stones.webp" className="left-0  top-0 object-fill" />
        </div>
        <div className="mask-clip-path about-image border-black border-2">
          <img
            src="img/about.webp"
            alt="Background Image"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
