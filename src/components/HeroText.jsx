import React from "react";
import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

function HeroText() {
  const words = ["engaging", "captivating", "responsive"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* deskop view */}
      <div className="flex-col hidden md:flex c-space ">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          {" "}
          Hi I'm Drey{" "}
        </motion.h1>

        <motion.div
          className=" flex flex-col items-start text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <p className="text-5xl  ">
            A Fullstack developer <br /> Dedicated to crafting
          </p>
        </motion.div>
        <motion.div
          className="text-white font-bold text-8xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords words={words} className="text-white p-0" />
        </motion.div>
        <motion.p
          className="text-4xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          web solutions
        </motion.p>
      </div>

      {/* Mobile view */}
      <div className=" flex  flex-col md:hidden space-y-6">
        <motion.h1
          className="text-4xl font-bold "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Drey
        </motion.h1>

        <motion.p
          className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Building
        </motion.p>

        <motion.div
          className="text-6xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords words={words} className="text-white p-0" />
        </motion.div>
        <motion.p
          className="text-4xl font-black text-neutral-300 "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Applications
        </motion.p>
      </div>
    </div>
  );
}

export default HeroText;
