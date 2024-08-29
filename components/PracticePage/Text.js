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
          The CELS<span className="font-light">&reg;</span> test is divided into
          two sections: listening and reading. This sample test provides an
          overview of the test's format and offers sample questions that you can
          find in each section. However, please note that this is not a
          complete, full-length test. Completing this practice test should take
          approximately 20 minutes.
        </p>
      </div>
    </section>
  );
};

export default Text;
