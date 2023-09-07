import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ScoringPartOne = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationToRight = useAnimation();
  const animationToLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      animationToRight.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.15 },
      });
      animationToLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.15 },
      });
    }
    if (!inView) {
      animationToRight.start({
        x: "-50px",
        opacity: 0,
      });
      animationToLeft.start({
        x: 50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row lg:justify-between mb-8 overflow-hidden">
      <motion.div animate={animationToRight} className="w-full lg:w-2/3 mb-8 lg:mb-8 lg:pr-32">
        <div className="text-left">
          <h1 className="text-primary lg:text-secondary font-bold text-xl lg:text-4xl lg:mb-2">
            Score Interpretation
          </h1>
          <p className="text-xl">Proficiency Levels in CELS Competency</p>
          <p className="mt-4 lg:mt-6">
            The CELS Test is a standardized assessment specifically created to
            gauge the listening and reading comprehension proficiencies of high
            school-level English language learners. Its purpose is to determine
            students' capability to navigate the English language requisites
            within secondary school subjects taught in English.
          </p>
          <p className="mt-4 lg:mt-6">
            The CELS Test is a standardized assessment specifically created to
            gauge the listening and reading comprehension proficiencies of high
            school-level English language learners.
          </p>
        </div>
      </motion.div>
      <motion.div animate={animationToLeft} className="w-full lg:w-1/3 flex justify-end">
        <img
          src="/images/scoring.jpg"
          alt="Scoring Image"
          className="rounded-3xl object-cover max-h-[500px] lg:max-h-[50vh]"
        />
      </motion.div>
    </div>
  );
};

export default ScoringPartOne;
