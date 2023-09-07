import React,{useEffect} from "react";
import { RiVoiceprintFill } from "react-icons/ri";
import { AiOutlineRead } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const TestingPartTwo = () => {
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
    <div ref={ref} className="max-w-[90vw] lg:max-w-[1200px] mx-auto pb-8 lg:pb-0 flex flex-col lg:flex-row lg:justify-between lg:items-center space-x-0 lg:space-x-8 overflow-hidden">
      <motion.div animate={animationToRight} className="w-full lg:w-1/3 mb-8 lg:mb-0 order-2 lg:order-1">
        <h2 className="text-left text-xl text-slate-50 font-bold mb-2">
          Test Structure
        </h2>
        <p className="text-left text-slate-50">
          The CELS assessment consists of two primary components: Listening and
          Reading. Approximately 25 minutes are allocated for the listening
          section, while the reading section demands around 45 minutes. Each of
          these test segments is subdivided into various sections.
        </p>
      </motion.div>
      <div className="lg:w-1/3 hidden lg:block lg:order-2">
        <img src="/images/test.png" alt="Testing Image" />
      </div>
      <div className="w-full mb-8 lg:hidden order-1">
        <img
          src="/images/test2.jpg"
          alt="Testing Image"
          className="rounded-3xl"
        />
      </div>
      <motion.div animate={animationToLeft} className="w-full lg:w-1/3 mb-8 lg:mb-0 order-3">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <RiVoiceprintFill className="text-4xl text-primary bg-slate-200/70 p-2 rounded-lg" />
            <h1 className="ml-2 text-xl text-slate-50">Listening</h1>
          </div>
          <ul className="text-slate-50 text-left list-disc ml-5 font-light">
            <li>Following Simple Conversations</li>
            <li>Following Academic Conversations</li>
            <li>Following Lectures</li>
            <li>Comprehending Mathematical Language</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <AiOutlineRead className="text-4xl text-primary bg-slate-200/70 p-2 rounded-lg" />
            <h1 className="ml-2 text-xl text-slate-50">Reading</h1>
          </div>
          <ul className="text-slate-50 list-disc ml-5 text-left font-light">
            <li>Assessing Vocabulary Knowledge</li>
            <li>Interpreting a Graph</li>
            <li>Understanding Managing Academic Texts</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default TestingPartTwo;
