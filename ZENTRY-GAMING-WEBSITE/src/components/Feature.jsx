import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt= ({children, className = ''}) => {

    const [transformStyle, setTransformStyle] = useState('');

    const itemref = useRef();

    const handleMouseMove = (e) => {
        if(!itemref.current){
            return;
        }

        const { left, top, width, height } = itemref.current.getBoundingClientRect();

        const relativeX = (e.clientX- left )/ width;
        const relativeY = (e.clientY- top )/ height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.97, .97, .97)`;

        setTransformStyle(newTransform);

    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div style={{transform: transformStyle, transition: 'transform 0.05s ease-in-out'}} className={className} ref={itemref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-gray-500 transition duration-300 hover:text-white">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20 hover:text-white transition duration-300"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #4533e7, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20 font-circular-web">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};
const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-l text-blue-50">
            Explore the Zentry Universe
          </p>
          <p className="max-w-md font circular-web text-sm text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>

        <BentoTilt className=" !border-white border relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={"videos/feature-1.mp4"}
            title={
              <>
                r<b>a</b>dia<b>n</b>t
              </>
            }
            description="A cross platform Metagame app, turning your activites across web2 and web3 games into a rewarding adventure."
            isComingSoon={true}
          />
        </BentoTilt>

        <div className="grid h-[150vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 !border-white border md:col-span-1 md:row-span-2">
            <BentoCard
              src={"videos/feature-2.mp4"}
              title={<><b>z</b>ig<b>m</b>a</>}
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 !border-white border ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={"videos/feature-3.mp4"}
              title={<><b>n</b>e<b>x</b>us</>}
              description="The metagame portal uniting humans & AI to play, compete and earn."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 !border-white border  me-28 md:col-span-1 md:me-0">
            <BentoCard
              src={"videos/feature-4.mp4"}
              title={<><b>a</b>z<b>u</b>l</>}
              description="The metagame portal uniting humans & AI to play, compete and earn."
              isComingSoon={true}
            />
          </BentoTilt>


          <BentoTilt className="border bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-black p-5">
              <h1 className="bento-title max-w-64 special-font text-white">
                M<b>o</b>re C<b>o</b>ming S<b>oo</b>n!
              </h1>
              <div className="mb-10 mx-14 self-end scale-[8]">
                <img src="img/logo.png" className="w-4" alt="" />
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2 !border-white border">
            <video src="videos/feature-5.mp4" muted loop autoPlay className="size-full object-cover object-center" />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;