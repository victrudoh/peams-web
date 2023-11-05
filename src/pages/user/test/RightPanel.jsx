import { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";

const RightPanel = () => {
  const {
    // activeUser,
    oneTest,
    questionIndex,
    answerQuestion,
    setQuestionIndex,
    // getOneTest,
    // testId,
  } = useContext(AppContext);
  console.log("🚀 ~ file: RightPanel.jsx:6 ~ RightPanel ~ oneTest:", oneTest);

  const [answer, setAnswer] = useState({
    answer: "",
  });

  const prevQuestion = async () => {
    if (questionIndex > 0) {
      let newIndex = questionIndex - 1;
      setQuestionIndex(newIndex);
    }
  };

  const nextQuestion = async () => {
    if (questionIndex < oneTest?.questions.length) {
      let newIndex = questionIndex + 1;
      setQuestionIndex(newIndex);
    }
  };

  const answerQuestionHandler = async (answer) => {
    let questionId;
    let index = questionIndex;
    let questionLength = oneTest?.questions?.length;
    setAnswer({
      answer: answer,
    });

    if (index) {
      questionId = oneTest?.questions[index].question._id;
    } else {
      questionId = oneTest?.questions[0].question._id;
      index = 0;
    }
    answerQuestion(oneTest._id, questionId, index, questionLength, answer);
  };

  return (
    <>
      <div className="bg-white w-[70%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start gap-4 z-[1]">
        {/* Top part */}
        <div className="flex items-center justify-between w-full">
          {questionIndex > 0 ? (
            <>
              <div
                onClick={() => prevQuestion()}
                className="py-2 px-4 rounded-[13px] border-2 font-bold border-teal-700 text-teal-700 cursor-pointer hover:bg-teal-700 hover:text-white"
              >
                Previous
              </div>
            </>
          ) : (
            <div></div>
          )}
          <div className="font-poppins text-xl font-bold leading-9 tracking-normal text-left text-gray-600">
            Question {questionIndex ? questionIndex + 1 : 1}
          </div>
          {!questionIndex ? (
            <span
              // href="/user/test-completed"
              onClick={() => nextQuestion()}
              className="py-2 px-4 rounded-[13px] border-2 font-bold border-teal-700 bg-teal-700 text-white cursor-pointer hover:bg-white hover:text-green-700 no-underline"
            >
              Skip
            </span>
          ) : (
            <>
              {oneTest?.questions?.length - questionIndex > 1 ? (
                <>
                  <span
                    // href="/user/test-completed"
                    onClick={() => nextQuestion()}
                    className="py-2 px-4 rounded-[13px] border-2 font-bold border-teal-700 bg-teal-700 text-white cursor-pointer hover:bg-white hover:text-green-700 no-underline"
                  >
                    Skip
                  </span>
                </>
              ) : (
                <div></div>
              )}
            </>
          )}
        </div>
        {/* Image holder */}
        {/* <div className="w-full min-h-[250px] flex items-center justify-center">
          <img src="#" alt="Sample Image" />
        </div> */}
        {/* Question */}
        <div className="w-full bg-teal-100 p-3 rounded-md font-poppins text-sm font-normal leading-6 tracking-normal text-center text-gray-600">
          {questionIndex
            ? oneTest?.questions[questionIndex]?.question?.question
            : oneTest?.questions[0]?.question?.question}
        </div>
        {/* Answers */}
        <div className="flex gap-6 w-full items-start justify-start my-8 flex-wrap ml-9">
          {/* answer */}
          <div
            onClick={() => answerQuestionHandler("answer_a")}
            // className="w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
            className={
              questionIndex
                ? oneTest?.questions[questionIndex].chosenAnswer === "answer_a"
                  ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center hover:text-teal-700"
                  : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : oneTest?.questions[0].chosenAnswer === "answer_a"
                ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
            }
          >
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              A
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left">
              {questionIndex
                ? oneTest?.questions[questionIndex].question.answer_a
                : oneTest?.questions[0].question.answer_a}
            </div>
          </div>
          {/* answer */}
          <div
            onClick={() => answerQuestionHandler("answer_b")}
            className={
              questionIndex
                ? oneTest?.questions[questionIndex].chosenAnswer === "answer_b"
                  ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center hover:text-teal-700"
                  : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : oneTest?.questions[0].chosenAnswer === "answer_b"
                ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
            }
          >
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              B
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left hover:text-teal-700">
              {questionIndex
                ? oneTest?.questions[questionIndex].question.answer_b
                : oneTest?.questions[0].question.answer_b}
            </div>
          </div>
          {/* answer */}
          <div
            onClick={() => answerQuestionHandler("answer_c")}
            className={
              questionIndex
                ? oneTest?.questions[questionIndex].chosenAnswer === "answer_c"
                  ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center hover:text-teal-700"
                  : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : oneTest?.questions[0].chosenAnswer === "answer_c"
                ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
            }
          >
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              C
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left">
              {questionIndex
                ? oneTest?.questions[questionIndex].question.answer_c
                : oneTest?.questions[0].question.answer_c}
            </div>
          </div>
          {/* answer */}
          <div
            onClick={() => answerQuestionHandler("answer_d")}
            className={
              questionIndex
                ? oneTest?.questions[questionIndex].chosenAnswer === "answer_d"
                  ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                  : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center hover:text-teal-700"
                : oneTest?.questions[0].chosenAnswer === "answer_d"
                ? "w-[45%] rounded-md py-2 px-4 bg-green-600 text-white hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
                : "w-[45%] rounded-md py-2 px-4 bg-gray-200 hover:bg-teal-100 cursor-pointer flex gap-4 items-center"
            }
          >
            <div className="font-poppins text-xl font-semibold leading-9 tracking-normal text-left text-teal-700">
              D
            </div>
            <div className="font-poppins text-sm font-normal leading-6 tracking-normal text-left">
              {questionIndex
                ? oneTest?.questions[questionIndex].question.answer_d
                : oneTest?.questions[0].question.answer_d}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
