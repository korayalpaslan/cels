import React from "react";

const Text = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full px-4 text-center pt-8 bg-slate-50"
      id="about"
    >
      <div className="mb-8">
        {/* <h1 className="text-primary lg:text-secondary font-bold text-xl lg:text-4xl lg:mb-2 bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent">
          The initial stride towards participating in
        </h1>
        <h1 className="text-secondary lg:text-primary font-bold text-xl lg:text-4xl">
          international exchange programs.
        </h1> */}
        <p className="mt-4 lg:mt-6 lg:text-xl max-w-[1000px] mx-auto">
        The CELS <span className="font-light">&reg;</span>competency scale comprises five proficiency levels. These levels come with verbal explanations of the abilities expected from students based on their test results. Level one signifies minimal proficiency, whereas level 5 denotes a strong proficiency. Students achieving levels 4 and 5 usually excel in English-instructed courses with minimal or no need for English language assistance.
        </p>
      </div>
    </section>
  );
};

export default Text;
