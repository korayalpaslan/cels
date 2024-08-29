import React, { useState, useContext } from "react";
import NotificationContext from "../../../store/context";
import readingPartTwoQuestion from "../../../data/readingPartTwo";

const ReadingSectionTwo = () => {
  const ctx = useContext(NotificationContext);
  const [questions, setQuestions] = useState(readingPartTwoQuestion);

  const getAllAnswersHandler = () => {
    ctx.checkAnswerHandler();

    const section = document.getElementById("test"); // GİDİLECEK ID
    const coords = section.getBoundingClientRect();

    window.scrollTo({
      left: coords.left + window.pageXOffset,
      top: coords.top + window.pageYOffset,
      behavior: "smooth",
    });
  };

  const hideAllAnswersHandler = () => {
    ctx.checkAnswerHandler();
  };

  return (
    <div className="max-w-[800px] mx-auto py-8">
      <div className="mb-8">
        <h1 className="font-bold">Reading - Section 2</h1>
        <p className="text-sm mb-4">
          Read passage and answer each question. Fill in the correct circle on
          your answer sheet.
        </p>
        <p className="text-lg italic font-light font-serif">
          "Being famous is a common aspiration for many people. It offers
          recognition, wealth, and exciting opportunities. However, there are
          also challenges that come with fame. One advantage of being famous is
          gaining widespread recognition. People know who you are, which can
          open doors to various opportunities. It also provides a platform to
          influence others positively. Nevertheless, fame can be demanding.
          Privacy becomes limited as the public and media closely scrutinize
          your every move. The constant spotlight can be overwhelming, leaving
          little room for personal space or downtime. Building and maintaining
          genuine relationships can be challenging due to trust issues and
          superficial connections. Furthermore, the pressure to maintain success
          and meet high expectations is intense. Failures and mistakes can be
          magnified by the public eye, affecting one's mental well-being. The
          quest for fame can also be isolating, as true connections with others
          may become harder to find. In conclusion, while being famous has its
          perks such as recognition and opportunities, it also brings challenges
          like loss of privacy, constant scrutiny, and high pressure to succeed.
          It is important for individuals to carefully consider the trade-offs
          before pursuing fame."
        </p>
      </div>
      <div>
        {questions.map((question) => {
          return (
            <div key={question.id} className="flex items-start mb-8">
              <div className="mr-4 lg:mr-6 px-4 py-2 bg-midSecondary rounded-lg text-slate-50">
                {question.id}
              </div>
              <table className="grow text-sm">
                <thead className="text-left ">
                  <tr className="border-b border-gray-700">
                    <th className="pb-2 font-medium">{question.question}</th>
                  </tr>
                </thead>
                <tbody className="font-light">
                  {question.answers.map((answer, i) => {
                    return (
                      <tr key={i}>
                        <td
                          className={
                            ctx.toggleAnswer && answer.isCorrect
                              ? "pt-2 text-emerald-600 font-bold"
                              : "pt-2 font-light"
                          }
                        >
                          {answer.option}) {answer.answer}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      {!ctx.toggleAnswer ? (
        <button
          className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 transition-all duration-300 rounded-full py-3 px-6 lg:min-w-[125px] font-bold w-full lg:w-1/3 mt-8"
          onClick={getAllAnswersHandler}
        >
          Check Answers
          {/* {ctx.toggleAnswer ? "Hide Answers" : "Check Answers"} */}
        </button>
      ) : (
        <button
          className="bg-gradient-to-r from-primary  to-primary text-stone-100 transition-all duration-300 rounded-full py-3 px-6 lg:min-w-[125px] font-bold w-full lg:w-1/3 mt-8"
          onClick={hideAllAnswersHandler}
        >
          Hide Answers
        </button>
      )}

      {/* <button
        className="bg-gradient-to-r from-lightSecondary via-midSecondary to-darkSecondary text-stone-100 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary  transition-all duration-300 rounded-full py-3 px-6 lg:min-w-[125px] font-bold w-full lg:w-1/3 mt-8"
        onClick={getAllAnswersHandler}
      >
        {ctx.toggleAnswer ? "Hide Answers" : "Check Answers"}
      </button> */}
    </div>
  );
};

export default ReadingSectionTwo;
