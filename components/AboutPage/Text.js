import React from "react";
import Image from "next/image";
const Text = () => {
  return (
    <>
      <div className="pt-20 ">
        <div className="relative  mx-auto flex justify-center">
          <div className="logo">
            <a
              href="https://www.iao.org/Turkey-IstanbulProvince/The-Canadian-Institute"
              target="_blank"
              title="International Accreditation Organization - IAO"
            >
              <img
                src="https://www.iao.org/assets/images/email/seal/iao-seal.png"
                alt="International Accreditation Organization - IAO"
                width="110"
                height="110"
                class="image"
              />
            </a>
          </div>
        </div>
      </div>
      <section
        className="max-w-[1000px] mx-auto w-full px-4 text-center pt-16 bg-slate-50"
        id="about"
      >
        <div className="mb-16">
          <h1 className="text-primary lg:text-secondary font-bold text-xl lg:text-4xl lg:mb-2 bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent">
            The initial stride towards participating in
          </h1>
          <h1 className="text-secondary lg:text-primary font-bold text-xl lg:text-4xl">
            international exchange programs.
          </h1>
          <p className="mt-4 lg:mt-6 lg:text-xl">
            The CELS <span className="font-light">&reg;</span> TEST evaluates
            the English language proficiency of secondary school students in
            both social and academic contexts, with a predominant focus on
            academic language. The test measures reading comprehension and
            listening comprehension skills. The operational definition of
            "academic language" is the language used in educational services in
            schools.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between mb-16 overflow-hidden">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-8 lg:pr-32">
            <div className="text-left">
              <h1 className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary bg-clip-text text-transparent font-bold text-xl lg:text-4xl lg:mb-2 pb-2">
                Concept of academic language
              </h1>
              <p className="text-lg mb-8">
                Based on research conducted to develop the CELS
                <span className="font-light">&reg;</span> TEST, the concept of
                "academic language" encompasses the following:
              </p>
              <ul className="text-left list-disc ml-5 font-light">
                <li className="mb-2">
                  School Vocabulary - words and expressions used for
                  school-related activities
                </li>
                <li className="mb-2">
                  Content Management Language - the general academic language
                  used to discuss academic tasks and class content (e.g.,
                  discussion, explanation, and comparison).
                </li>
                <li className="mb-2">
                  Domain-Specific Language - a specialized academic language
                  used to express ideas in content areas (e.g., communication,
                  migration, slope, molecule).
                </li>
                <li className="mb-2">
                  Academic Language Skills - language skills underlying academic
                  tasks or activities (e.g., explaining facts and ideas,
                  distinguishing differences).
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end">
            <img
              src="/images/about.jpg"
              alt="Scoring Image"
              className="rounded-3xl object-cover max-h-[500px] lg:max-h-[50vh]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Text;
