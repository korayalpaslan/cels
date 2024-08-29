import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const About = () => {
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
    <section
      ref={ref}
      className="max-w-[1200px] mx-auto w-full px-4 text-center py-16 bg-slate-50"
      id="about"
    >
      <motion.div animate={animation}>
        <h1 className="text-primary lg:text-secondary font-bold text-xl lg:text-4xl lg:mb-2 bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent">
          Expand your perspective and distinguish yourself
        </h1>
        <h1 className="text-secondary lg:text-primary font-bold text-xl lg:text-4xl">
           from competitors by utilizing CELS
          <span className="font-light">&reg;</span>
          {/* <span className="text-sm lg:text-md absolute">&reg;</span> */}
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-full hidden lg:block">
          <div className="box"></div>
          <div className="box2"></div>
        </div>
        <p className="mt-4 lg:mt-6 lg:text-xl max-w-[1000px] mx-auto mb-4">
          The CELS<span className="font-light">&reg;</span> Test is a
          standardized assessment specifically created to gauge the listening
          and reading comprehension proficiencies of high school-level English
          language learners. Its purpose is to determine students' capability to
          navigate the English language requisites within secondary school
          subjects taught in English.
        </p>
        <Link href="/about" className="underline">
          Read More
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
