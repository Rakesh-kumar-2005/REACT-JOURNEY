import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-60 md:translate-y-10"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125 md:translate-x-43"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="l<b>e</b>t&#39;s b<b>u</b>il<b>d</b> t<b>h</b>e <br /> <b>n</b>ew er<b>a</b> <b>o</b>f <br /> g<b>a</b>mi<b>n</b>g t<b>o</b>get<b>h</b>er"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer md:mt-20 transition duration-300 ease-in-out hover:-translate-y-2 hover:font-bold hover:bg-black hover:text-white hover:border-2" />
        </div>
      </div>
    </div>
  );
};

export default Contact;