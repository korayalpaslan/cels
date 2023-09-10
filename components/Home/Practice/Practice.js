import React, { useEffect } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { PiDotsNineLight } from "react-icons/pi";

const Practice = () => {
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
    <section
      ref={ref}
      className="max-w-[1000px] px-4 lg:px-0 mx-auto w-full text-center lg:text-left pt-8 flex flex-col lg:flex-row lg:items-stretch overflow-hidden"
      id="practice"
    >
      <motion.div animate={animationToRight} className="w-full lg:w-1/2 mb-16">
        <div className="text-left lg:pr-4">
          <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2">
            Practice Test
          </h1>
          <p className="mt-4 lg:mt-6">
            Congratulations on embarking on your thrilling adventure to pursue
            studies/exchange programs abroad! The initial key to a prosperous
            academic experience is gaining insight into your proficiency in the
            English language. The CELS<span className="font-light">&reg;</span>{" "}
            TEST is an assessment designed to gauge your English listening and
            reading comprehension abilities. Prior to undertaking the test, it's
            recommended to complete a practice examination to ready yourself
            effectively.
          </p>
          <p className="mt-4 lg:mt-6">
            To get started, please provide your email address:
          </p>
          {/* <form className="flex flex-col lg:flex-row items-center space-x-4 mt-4">
            <div className="w-full lg:w-2/3 rounded-2xl mb-4 lg:mb-0">
              <input
                type="email"
                name="username"
                id="username"
                autoComplete="username"
                className="w-full border-2 rounded-full bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-0 lg:min-w-[300px]"
                placeholder="example@example.com"
              />
            </div>
              <button className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary  transition-all duration-300 rounded-full py-3 px-6 lg:min-w-[125px] font-bold w-full lg:w-1/3">
                Start Now
              </button>
          </form> */}
          <button className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary  transition-all duration-300 rounded-full py-3 px-6 lg:min-w-[125px] font-bold w-full lg:w-1/3 mt-4">
            <Link href="/practice">Start Now</Link>
          </button>
        </div>
      </motion.div>
      <motion.div
        animate={animationToLeft}
        className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[450px]"
      >
        <div className="content-none w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-secondary absolute top-0 left-1/2 -translate-x-1/2 rounded-full"></div>
        <img
          src="/images/practice.png"
          alt="Scoring Image"
          className="absolute left-1/2 -translate-x-1/2 max-h-[300px] lg:max-h-[450px]"
        />
        <PiDotsNineLight className="absolute top-0 text-8xl lg:text-9xl" />
      </motion.div>
    </section>
  );
};

export default Practice;
