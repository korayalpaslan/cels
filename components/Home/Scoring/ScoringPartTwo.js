import React, { useState,useEffect } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ScoringPartTwo = () => {
  const [questions, setQuestions] = useState(data);
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
    <motion.div ref={ref} animate={animation} className="flex flex-col lg:flex-row py-8 lg:py-16">
      <div className="hidden lg:flex lg:w-1/3 justify-end">
        <img
          src="/images/scoring2.jpg"
          alt="Scoring Image"
          className="rounded-3xl object-cover max-h-[500px] lg:max-h-[50vh]"
        />
      </div>
      <div className="w-full lg:w-2/3 lg:pl-16">
        <div className="max-w-[800px] text-left">
          <h1 className="text-primary font-bold text-xl mb-4 lg:mb-8">
            Cels Proficiency Levels
          </h1>
        </div>

        <div className="max-w-[800px]">
          {questions.map((question) => (
            <SingleQuestion key={question.id} data={question}></SingleQuestion>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScoringPartTwo;
