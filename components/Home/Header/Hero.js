import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="max-w-[90vw] mx-auto h-[80vh] w-full bg-[url('/images/hero2.jpg')] bg-cover bg-right lg:bg-center rounded-3xl">
      <div className="w-full h-full flex items-center text-light bg-black/50 rounded-3xl">
        <div className="max-w-[1200px] mx-auto w-full px-4 flex flex-col items-center text-center">
          {/* <h1 className="font-bold mb-4 text-3xl lg:text-6xl">
            New Milestone for world-leading{" "}
            <span className="text-red-600 stroke">English Test</span>
          </h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            className="font-bold mb-4 text-3xl lg:text-6xl"
          >
            New Milestone for world-leading{" "}
            <span className="stroke">English Test</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="font-light lg:w-1/2 text-xl lg:text-2xl"
          >
            The CELS Test is an English language proficiency assessment that is
            widely recognized for student exchange programs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0,}}
            animate={{ opacity: 1,}}
            exit={{ opacity: 0,}}
            transition={{
              delay: 0.65,
              duration: 0.5,
            }}
            className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-primary transition-all duration-300 rounded-full py-3 px-6 min-w-[125px] mt-8 font-bold"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
      {/* <BsArrowDownCircle className="absolute z-10 bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 text-4xl text-light"/> */}
    </header>
  );
};

export default Hero;
