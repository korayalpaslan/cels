import React from "react";
import Image from "next/image";

const Reference = () => {
  return (
    <div className="flex flex-col items-center pb-16">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-0 mb-4 flex justify-center">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2 pb-2">
            We are accredited
          </h1>
          <p className="font-medium">
          Institutions and organizations from all around the world that have granted us accreditation.
          </p>
        </div>
      </div>
      <ul className="max-w-[1000px] mx-auto lg:px-8 flex flex-wrap justify-center items-center">
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor1.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor2.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor3.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor4.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor5.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/sponsor6.png"
            width={300}
            height={200}
            className="h-full object-contain"
            alt="Sponsor Logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default Reference;
