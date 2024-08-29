import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Header/Hero";
import Practice from "@/components/Home/Practice/Practice";
import Scoring from "@/components/Home/Scoring/Scoring";
import Testing from "@/components/Home/Testing/Testing";
import React from "react";


const HomePageContainer = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Testing />
      <Scoring />
      <Practice /> */}
    </>
  );
};

export default HomePageContainer;
