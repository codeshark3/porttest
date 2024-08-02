"use client";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          variants={iconVariants(2.5) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiScikitlearn className="text-7xl text-[#f99f44]" />
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-4 flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpo className="text-black-600 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5) as any}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
