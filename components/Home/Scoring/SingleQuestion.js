import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const showInfoHandler = () => {
    setShowInfo((prevState) => !prevState);
  };

  const text = props.data.info.split('\n');
  

  return (
    <div className="question border-t-[1px] border-gray-500 ">
      <div className="flex py-6">
        <h4 className="text-secondary">{props.data.title}</h4>
        <button
          className={
            !showInfo
              ? "ml-auto rotate-180 transition duration-300 ease-in-out"
              : "ml-auto transition duration-300 ease-in-out"
          }
          onClick={showInfoHandler}
        >
          <IoIosArrowUp />
        </button>
      </div>
      <div
        className={
          !showInfo
            ? " font-light max-h-[0px] overflow-hidden transition-all duration-300 ease-in-out text-left"
            : " font-light max-h-auto transition-all duration-300 ease-in-out pb-6 text-left"
        }
      >
        {text.map((paragraph,i) => {
          return <p className="mb-4" key={i}>{paragraph}</p>
        })}
      </div>
    </div>
  );
};

export default Question;
