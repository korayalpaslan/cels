import React, { useState, useContext } from "react";
import NotificationContext from "../../../store/context";
import readingPartOneQuestion from "../../../data/readingPartOne";

const ReadingSectionOne = () => {
  const [questions, setQuestions] = useState(readingPartOneQuestion);
  const ctx = useContext(NotificationContext);

  return (
    <div className="max-w-[800px] mx-auto pt-8">
      <div className="mb-8">
        <h1 className="font-bold">Reading - Section 1</h1>
        <p className="text-sm">
          Read each sentence. Then choose the best answer to complete the
          sentence. Fill in the correct circle on your answer sheet.
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
                    <th className="pb-2 font-medium">{ctx.toggleAnswer ? question.question.replace("_____",question.correctAnswer) : question.question}</th>
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
        {/* {questions.map((question) => {
          return (
            <div key={question.id} className="flex items-start mb-8"></div>
          )})} */}
        {/* <div className="flex items-start mb-8">
          <div className="mr-4 lg:mr-6 px-4 py-2 bg-midSecondary rounded-lg text-slate-50">
            1
          </div>
          <table className="grow text-sm">
            <thead className="text-left ">
              <tr className="border-b border-gray-700">
                <th className="pb-2 font-medium">
                  Can you help me __________ this heavy box? It's too difficult
                  for me to lift alone.
                </th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td className="pt-2">a) carry</td>
              </tr>
              <tr>
                <td className="pt-2">b) push</td>
              </tr>
              <tr>
                <td className="pt-2">c) pull</td>
              </tr>
              <tr>
                <td className="pt-2">d) check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default ReadingSectionOne;
