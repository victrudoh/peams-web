import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axios from "axios";
import { error, success } from "../../helpers/Alert";
import Spinner from "../../components/widgets/spinner/Spinner";

const SelectCourse = () => {
  const { loading, setLoading, activeUser, allCourses, setOneTest } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [courseId, setCourseId] = useState();

  const startTest = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://peams-api.onrender.com/api/tests/add?courseId=${courseId}&userId=${activeUser._id}`,
        {},
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      setLoading(false);
      if (response.status === 200) {
        success("Your test hast began, God Speed!");
        setOneTest(response.data.data.test);
        localStorage.setItem("testId", response.data.data.test._id);
        navigate(`/user/test?id=${response.data.data.test._id}`);
        // window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
      error(err.response.data?.message);
      error(err.response.data?.error);
      setLoading(false);
    }
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setCourseId(e.target.value);
  };

  return (
    <>
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%] border-b-[2.5px] p-2 border-teal-600">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal">
            Select Course
          </h4>
          <span className="font-poppins text-sm font-normal leading-5 tracking-normal text-center">
            Please select a course to begin with.
          </span>
        </div>
        {/* form part */}
        <form
          onSubmit={startTest}
          className="w-[80%] my-6 flex flex-col gap-[20px]"
        >
          {/* pair: password */}
          <div className="flex flex-col items-start justify-center">
            <select
              name="course"
              id="course"
              onChange={onchangeHandler}
              required
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
            >
              <option>Please select a course</option>
              {allCourses.map((item, i) => (
                <option key={i} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {/* button */}
          <div className="w-full flex items-center justify-center my-4">
            {loading ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <button
                  className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </>
            )}

            {/* <a
              href={`/user/test?courseId=${courseId}`}
              className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg hover:text-white no-underline"
            >
              Get Started
            </a> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default SelectCourse;
