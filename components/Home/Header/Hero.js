import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CgShapeHalfCircle } from "react-icons/cg";

const Hero = () => {
  return (
    <header className="max-w-[90vw] mx-auto h-[80vh] w-full bg-[url('/images/hero2.jpg')] bg-cover bg-right lg:bg-center rounded-3xl">
      <div className="w-full h-full flex items-center text-light bg-black/50 rounded-3xl">
        <div className="max-w-[1200px] mx-auto w-full px-4 flex flex-col items-center text-center">
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
            The cornerstone of your<br></br>
            <span className="stroke">global adventure</span>
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
            The CELS<span className="font-light">&reg;</span> Test is an English
            language proficiency assessment that is widely recognized for
            student exchange programs.
          </motion.p>

          <Link
            href="https://www.wcep.org/sinav-islemleri/sinav-basvurusu"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
              className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary transition-all duration-300 rounded-full py-3 px-6 min-w-[125px] mt-8 font-bold"
            >
              Enroll Now
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
    // <header className="max-w-[90vw] mx-auto h-[80vh] w-full bg-[url('/images/hero2.jpg')] bg-cover bg-right lg:bg-center rounded-3xl relative">
    //   <div className="w-full h-full flex items-center text-light bg-black/50 rounded-3xl">
    //     <div className="max-w-[1200px] mx-auto w-full px-4 flex flex-col items-center text-center">
    //       <motion.h1
    //         initial={{ opacity: 0, y: 25 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: 25 }}
    //         transition={{
    //           delay: 0.25,
    //           duration: 0.5,
    //         }}
    //         className="font-bold mb-4 text-3xl lg:text-6xl"
    //       >
    //         The cornerstone of your<br></br>
    //         <span className="stroke">global adventure</span>
    //       </motion.h1>
    //       <motion.p
    //         initial={{ opacity: 0, y: 15 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         exit={{ opacity: 0, y: 15 }}
    //         transition={{
    //           delay: 0.4,
    //           duration: 0.5,
    //         }}
    //         className="font-light lg:w-1/2 text-xl lg:text-2xl"
    //       >
    //         The CELS<span className="font-light">&reg;</span> Test is an English
    //         language proficiency assessment that is widely recognized for
    //         student exchange programs.
    //       </motion.p>

    //       <Link
    //         href="https://www.wcep.org/sinav-islemleri/sinav-basvurusu"
    //         target="_blank"
    //       >
    //         <motion.button
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{
    //             delay: 0.65,
    //             duration: 0.5,
    //           }}
    //           className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary transition-all duration-300 rounded-full py-3 px-6 min-w-[125px] mt-8 font-bold"
    //         >
    //           Enroll Now
    //         </motion.button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="absolute hidden md:block top-0 right-0 p-4 bg-[#f8fafc] rounded-bl-2xl">
    //     <Image src="/images/sponsor7.png" width={60} height={20} />
    //     <div className="absolute translate-y-[17px] bottom-0 -right-[8px] z-10 content-none w-[25px] h-[25px] bg-transparent rounded-tr-2xl border-[#f8fafc] border-t-[8px] border-r-[8px]"></div>
    //     <div className="absolute top-0 left-0 -translate-x-[17px] -translate-y-[8px] z-10 content-none w-[25px] h-[25px] bg-transparent rounded-tr-2xl border-[#f8fafc] border-t-8 border-r-8"></div>
    //   </div>
    //   <div className="absolute md:hidden top-0 right-0 p-4 bg-[#f8fafc] rounded-bl-2xl -translate-y-[1px] translate-x-[1px]">
    //     <Image src="/images/sponsor7.png" width={40} height={15} />
    //     <div className="absolute  bottom-0 right-0 z-10 content-none w-[25px] h-[25px] bg-red-600 rounded-tr-2xl border-[#f8fafc] border-t-8 border-r-8"></div>
    //   </div>
    // </header>
  );
};

export default Hero;
