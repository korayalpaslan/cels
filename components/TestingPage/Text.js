import React from "react";

const Text = () => {
  return (
    <section
      className="max-w-[1200px] mx-auto w-full px-4 text-center pt-8 bg-slate-50"
      id="about"
    >
      <div className="mb-16">
        {/* <h1 className="text-primary lg:text-secondary font-bold text-xl lg:text-4xl lg:mb-2 bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent">
          The initial stride towards participating in
        </h1>
        <h1 className="text-secondary lg:text-primary font-bold text-xl lg:text-4xl">
          international exchange programs.
        </h1> */}
        <p className="mt-4 lg:mt-6 lg:text-xl max-w-[1000px] mx-auto">
          The CELS® Test is a standardized exam created to assess the listening
          and reading comprehension abilities of English language learners in
          high school. It aims to gauge students' capacity to handle the English
          language demands within secondary school courses conducted in English.
        </p>
      </div>
    </section>
  );
};

export default Text;
