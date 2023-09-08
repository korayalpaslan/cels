import React, { useEffect } from "react";
import TestingPartTwo from "./TestingPartTwo";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Testing = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.15 },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full text-center bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary" id="testing">
      <motion.div animate={animation} className="max-w-[1200px] mx-auto px-4 pt-16 pb-8">
        <h1 className="text-slate-50 font-bold text-xl lg:text-4xl lg:mb-2">
          Test Information for Students and Parents
        </h1>
        <p className="text-slate-50 mt-4 lg:mt-6 lg:text-xl max-w-[1000px] mx-auto">
        The CELS Test is a standardized exam created to assess the listening and reading comprehension abilities of English language learners in high school. It aims to gauge students' capacity to handle the English language demands within secondary school courses conducted in English.
        </p>
      </motion.div>
      <TestingPartTwo/>
    </section>
  );
};

export default Testing;
