import React from "react";
import ScoringPartOne from "./ScoringPartOne";
import ScoringPartTwo from "./ScoringPartTwo";

const Scoring = () => {
  return (
    <section className="max-w-[1000px] px-4 lg:px-0 mx-auto w-full text-center lg:text-left pt-16 bg-slate-50" id="scoring">
      <ScoringPartOne/>
      <ScoringPartTwo/>
    </section>
  );
};

export default Scoring;
