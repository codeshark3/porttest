"use client";
import { HERO_CONTENT } from "~/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { x: 0, opacity: 1, transition: { delay: delay, duration: 0.5 } },
});
const Hero = () => {
  return (
    <div className="lg:mb-35 border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap border-4">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="pb-15 lg:mt-10">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-3xl font-thin tracking-tight lg:text-6xl"
              >
                Joel John
              </motion.h1>
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-4xl font-thin tracking-tight lg:text-7xl"
              >
                Otchere-Baffour
              </motion.h1>
            </div>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent lg:text-3xl"
            >
              Full-stack developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* <Link
              href="/Joel_John_Otchere_Baffour_CV.pdf"
              className="text-md mr-2 rounded bg-purple-800 px-5 py-3 font-medium text-white"
            >
              Download Resume
            </Link>

            <a
              href="/Joel_John_Otchere_Baffour_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-md mr-2 rounded bg-purple-800 px-5 py-3 font-medium text-white"
            >
              Download Resume
            </a> */}

            <Link
              className="py-4"
              href="/Joel_John_Otchere_Baffour_CV.pdf"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Download Resume"
            >
              {" "}
              <motion.button
                variants={container(1.7)}
                initial="hidden"
                animate="visible"
                className="text-md mr-2 rounded bg-purple-800 px-5 py-3 font-medium text-white"
              >
                {" "}
                Download Resume{" "}
              </motion.button>{" "}
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image
              src="/assets/main1.jpg"
              alt="logo"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
