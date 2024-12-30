import React from "react";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import  MagicButton  from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="dark:bg-black-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.3] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white">
        {/* Radial gradient for the container to give a faded look */}
        <div className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Portfolio using nextjs and typescript
          </h2>

          {/* <TextGenerateEffect
            className="text-center capitalize text-[40px] md:text-5xl lg:text-6xl"
            words="Creating Dynamic Solutions to The worlds Problems"
          /> */}
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Joel,a Web Developer and data scientist from Accra,
            Ghana
          </p>
          {/* <Link href="#about"><MagicButton title="View my work" icon= {<FaLocationArrow/>} position="right" /></Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
