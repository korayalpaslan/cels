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
          <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2">
            Score Interpretation
          </h1>
          <p className="text-xl">Proficiency Levels in CELS<span className="font-light">&reg;</span> Competency</p>
          <p className="mt-4 lg:mt-6">
            The CELS <span className="font-light">&reg;</span>competency scale comprises five proficiency levels. These levels come with verbal explanations of the abilities expected from students based on their test results. Level one signifies minimal proficiency, whereas level 5 denotes a strong proficiency. Students achieving levels 4 and 5 usually excel in English-instructed courses with minimal or no need for English language assistance.
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
