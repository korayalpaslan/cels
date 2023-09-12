import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiOutlineRead } from "react-icons/ai";

const SectionOne = () => {
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
    <div
      ref={ref}
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row lg:justify-between mb-8 overflow-hidden px-4"
    >
      <motion.div
        animate={animationToRight}
        className="w-full lg:w-2/3 mb-8 lg:mb-8 lg:pr-32"
      >
        <div className="text-left">
          <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2">
            Test Information for Students and Parents
          </h1>
          {/* <p className="text-xl">Proficiency Levels in CELS<span className="font-light">&reg;</span> Competency</p> */}
          <p className="mt-4 lg:mt-6">
            The CELS® assessment consists of two primary components: Listening
            and Reading. Approximately 25 minutes are allocated for the
            listening section, while the reading section demands around 45
            minutes. Each of these test segments is subdivided into various
            sections.
          </p>
          <div className="w-full mb-8 lg:mb-0 order-3 mt-8">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <RiVoiceprintFill className="text-4xl text-primary bg-slate-200/70 p-2 rounded-lg" />
                <h1 className="ml-2 text-xl ">Listening</h1>
              </div>
              <ul className=" text-left list-disc ml-5 font-light">
                <li>Following Simple Conversations</li>
                <li>Following Academic Conversations</li>
                <li>Following Lectures</li>
                <li>Comprehending Mathematical Language</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <AiOutlineRead className="text-4xl text-primary bg-slate-200/70 p-2 rounded-lg" />
                <h1 className="ml-2 text-xl ">Reading</h1>
              </div>
              <ul className=" list-disc ml-5 text-left font-light">
                <li>Assessing Vocabulary Knowledge</li>
                <li>Interpreting a Graph</li>
                <li>Understanding Managing Academic Texts</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={animationToLeft}
        className="w-full lg:w-1/3 flex justify-end"
      >
        <img
          src="/images/scoring.jpg"
          alt="Scoring Image"
          className="rounded-3xl object-cover max-h-[500px] lg:max-h-[50vh]"
        />
      </motion.div>
    </div>
  );
};

export default SectionOne;
