import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const TestCompleted = () => {
  const { oneTest } = useContext(AppContext);

  return (
    <>
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%] border-b-[2.5px] p-2 border-teal-600">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal">
            Test Completed !
          </h4>
          {/* <span className="font-poppins text-sm font-normal leading-5 tracking-normal text-center">
            Please select a course to begin with.
          </span> */}
        </div>
        {/* form part */}
        <div className="w-[80%] my-6 flex flex-col gap-[20px]">
          <div className="w-full bg-teal-100 p-3 rounded-md font-poppins text-sm font-normal leading-6 tracking-normal text-center text-gray-600">
            {/* pairs */}
            <div className="flex flex-col gap-4 w-[90%] align-start-justify-center my-3">
              {/* pair */}
              {/* <div className="flex w-full justify-between align-center-gap-2">
                <div className="font-poppins text-base font-normal leading-6 tracking-normal text-left text-gray-500">
                  Time used
                </div>
                <div className="font-poppins text-base font-semibold leading-6 tracking-normal text-right text-teal-700">
                  1:30:17
                </div>
              </div> */}
              {/* pair */}
              <div className="flex w-full justify-between align-center-gap-2">
                <div className="font-poppins text-base font-normal leading-6 tracking-normal text-left text-gray-500">
                  Questions Completed
                </div>
                <div className="font-poppins text-base font-normal leading-6 tracking-normal text-right text-gray-500">
                  <span className="font-semibold text-teal-700">
                    {oneTest.attemptedQuestions} of {oneTest.totalQuestions}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="w-full flex items-center justify-center my-2">
            {/* <button className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg">
              Get Started
            </button> */}
            <a
              href="/user/select-course"
              className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-teal-700 to-teal-800 hover:bg-teal-700 hover:border-teal-300 hover:border-2 shadow-lg hover:text-white no-underline"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCompleted;
