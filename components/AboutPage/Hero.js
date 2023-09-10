import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="max-w-[90vw] mx-auto h-[60vh] w-full bg-[url('/images/practice_test.jpg')] bg-cover bg-right lg:bg-center rounded-3xl">
      <div className="h-full bg-black/50 flex items-center rounded-3xl text-slate-50">
        <div className="w-full px-4 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            className="font-bold mb-4 text-2xl lg:text-5xl"
          >
            About CELS<span className="font-light">&reg;</span>
          </motion.h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
