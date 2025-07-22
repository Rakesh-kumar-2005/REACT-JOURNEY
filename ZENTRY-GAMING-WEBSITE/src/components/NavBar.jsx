import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const NavBar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  // Audio Indicator...
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Indicator Line...
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  // For handling the visibility of the nav bar...
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // animated NavBar...
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
      ease: "power1.out",
    });
  });

  // Handling audio on and off...
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  });

  // Nav Items....
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {/* Logo... */}
            <img src="/img/logo.png" alt="logo" className="w-10 rounded" />

            {/* Product Button... */}
            <Button
              title="Product"
              id="product-button"
              containerClass="md:flex hidden items-center transition duration-300 hover:bg-black hover:text-yellow-300 hover:border-2 hover:border-yellow-300 hover:translate-x-1 ease-in-out justify-center gap-1 product-button"
              rightIcon={<TiLocationArrow />}
            />
          </div>
          <div className="flex h-full items-center">
            {/* Navbar elements... */}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn navItems"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Audio button... */}
            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                className="hidden"
                loop
                src={"/audio/loop.mp3"}
                ref={audioElementRef}
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ "animation-delay": `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
