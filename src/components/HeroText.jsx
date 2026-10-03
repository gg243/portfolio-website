import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

function HeroText() {
  const words = ["scalable", "secure", "innovative"];
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for floating logos
  const createFloatVariant = (delay = 0, duration = 4, yOffset = 15) => ({
    animate: {
      y: [0, -yOffset, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <div className="z-10 mt-20 md:mt-32 lg:mt-40 text-center md:text-left rounded-3xl w-full relative">
      
      {/* Floating Logos Background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          alt="AWS"
          className="absolute top-12 right-[10%] w-24 h-24 opacity-80 transition-all duration-300"
          variants={createFloatVariant(0, 4, 15)}
          animate="animate"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
          alt="GCP"
          className="absolute top-48 right-[30%] w-20 h-20 opacity-80 transition-all duration-300"
          variants={createFloatVariant(1, 4.5, 20)}
          animate="animate"
        />
        <motion.img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          alt="Azure"
          className="absolute top-[22rem] right-[15%] w-16 h-16 opacity-80 transition-all duration-300"
          variants={createFloatVariant(0.5, 3.5, 12)}
          animate="animate"
        />
        <motion.img
          src="assets/react.svg"
          alt="React"
          className="absolute top-96 right-[40%] w-16 h-16 opacity-80 transition-all duration-300"
          variants={createFloatVariant(1.5, 5, 25)}
          animate="animate"
        />
      </div>

      <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 c-space relative z-10">
        <motion.div
          className="px-4 py-2 rounded-full border border-neutral-700/50 bg-neutral-900/50 backdrop-blur-sm"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
          <p className="text-sm md:text-base text-neutral-300 font-jetbrains tracking-wide">
            👋 Hi, I'm Drey
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
        >
          Building <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua to-royal">
            <FlipWords words={words} className="text-transparent px-0" />
          </span>
          <br />
          Cloud Experiences
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-neutral-400 font-light max-w-2xl mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          A Cloud Engineer & Frontend Developer dedicated to crafting beautiful, functional, and user-centered digital solutions.
        </motion.p>
      </div>
    </div>
  );
}

export default HeroText;
