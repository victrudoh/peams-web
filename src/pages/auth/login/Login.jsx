import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(AppContext);

  const [loginDetails, setLoginDetails] = useState({});

  const Loginhandler = async (e) => {
    setLoading(true);
    // console.log("LoginDetails", loginDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://peams-api.onrender.com/api/auth/login",
        // "http://localhost:3033/api/auth/login",
        loginDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log("response", response);
      setLoading(false);
      const token = response.data.data.loginDetails.token;
      const userId = response.data.data.loginDetails.user._id;
      if (response.status === 200) {
        success("Login Successfull");
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        navigate("/");
        window.location.reload(false);
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
    setLoginDetails((loginDetails) => ({
      ...loginDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-off-teal">
      {/* Content */}
      {/* Rotated rectangle */}
      <div
        className="absolute top-1/4 left-[28%] w-[40%] h-[60%] rounded-[8px] bg-gradient-to-r from-primary-color/90 to-primary-color shadow-xl"
        style={{
          transform: "rotate(-7deg)",
          transformOrigin: "top left",
        }}
      ></div>
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-black w-[100%]  p-2">
          <h4 className="text-primary-color font-poppins text-xl font-semibold leading-36 tracking-normal mb-2">
            Sign In
          </h4>
          <span className="text-sm pb-3 mb-2 border-b-[2.5px] border-primary-color font-semibold text-black-ish/70 font-sans">
            Securely Login to your{" "}
            <span className="text-primary-color">MedCabinet</span> account
          </span>
        </div>
        {/* form part */}
        <form
          onSubmit={Loginhandler}
          className="w-[80%] my-3 flex flex-col gap-[20px]"
        >
          {/* pair: email */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              Email
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="email"
              placeholder="johndoe@example.com"
              name="email"
              onChange={onchangeHandler}
            />
          </div>
          {/* pair: password */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              Password
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="password"
              placeholder="* * * * * *"
              name="password"
              onChange={onchangeHandler}
            />
          </div>

          {/* button */}
          <div className="w-full flex items-center justify-center my-4">
            {loading ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <div className="w-full flex flex-col gap-3 items-center justify-center">
                  <button
                    className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-primary-color to-primary-color/90 hover:bg-primary-color/60 hover:border-primary-color hover:border-2 shadow-lg"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
