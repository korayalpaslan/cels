import React, { useState, useContext } from "react";
import NotificationContext from "../../../store/context";
import listeningQuestion from "../../../data/listening";

const Listening = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState(listeningQuestion);
  const ctx = useContext(NotificationContext);

  return (
    <div className="max-w-[800px] mx-auto py-8 mt-8" id="test">
      <div className="mb-8">
        <h1 className="font-bold">Listening</h1>
        <p className="text-sm">
          In this part of the test, you will hear a teacher talking to a class.
          After you hear the passage, you will answer some questions about what
          you heard. Fill in the correct circle on your answer sheet.
        </p>
        <div className="w-full ">
          <audio id="player" controls className="mx-auto my-4">
            <source src="/audios/listening.mp3" type="audio/mp3" />
            <source src="/audios/listening.ogg" type="audio/ogg" />
          </audio>
        </div>
        <div>
          <h2
            className="text-center text-sm  underline mb-2 cursor-pointer"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            Audio Transcript
          </h2>
          <p
            className={
              isOpen
                ? "text-sm font-italic font-light bg-red-200/20 rounded-lg p-4"
                : "h-0 overflow-hidden"
            }
          >
            <span className="font-medium">Teacher:</span> Good morning, class!
            Today, let's talk about twins. Who can share some interesting facts
            about them? <br></br>
            <br></br>
            <span className="font-medium">Student:</span> Twins are siblings
            born at the same time, right? <br></br>
            <br></br>
            <span className="font-medium">Teacher:</span> Yes, that's correct!
            Twins can be identical, where they share the same DNA, or fraternal,
            where they develop from separate eggs. Can you think of any other
            unique aspects of twins? <br></br>
            <br></br>
            <span className="font-medium">Student:</span> Twins often have a
            special bond and can communicate in their own secret language.{" "}
            <br></br>
            <br></br>
            <span className="font-medium">Teacher:</span> Absolutely! Twins
            share a unique connection and can develop their own ways of
            communication. It's fascinating, isn't it?
          </p>
        </div>
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
    </div>
  );
};

export default Listening;
