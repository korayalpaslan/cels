import React from "react";
import Image from "next/image";

const Reference = () => {
  return (
    <div className="flex flex-col items-center pb-16">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-0 mb-4 flex justify-center">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2 pb-2">
            Accredited Organisations
          </h1>
          <p className="font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            beatae similique alias explicabo dolore amet, accusantium
            exercitationem dignissimos corporis enim!
          </p>
        </div>
      </div>
      <ul className="max-w-[800px] mx-auto lg:px-8 flex flex-wrap justify-center">
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            className="w-full"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            className="w-full"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            className="w-full"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            className="w-full"
            alt="Sponsor Logo"
          />
        </li>
        <li className="p-1 w-[100px] md:w-[125px] lg:w-[150px] m-5 h-[100px] flex justify-center items-center">
          <Image
            src="/images/logo.png"
            width={300}
            height={200}
            className="w-full"
            alt="Sponsor Logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default Reference;
