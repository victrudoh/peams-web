import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../../../context/AppContext";
import axios from "axios";
import { success, error } from "../../../helpers/Alert";
import Spinner from "../../../components/widgets/spinner/Spinner";

const Register = () => {
  const navigate = useNavigate();

  const gotoLogin = async () => {
    navigate("/login");
  };

  const { loading, setLoading } = useContext(AppContext);

  const [registerDetails, setRegisterDetails] = useState({
    firstname: "",
    lastname: "",
    matric_no: "",
    password: "",
  });

  const Registerhandler = async (e) => {
    setLoading(true);
    // console.log("RegisterDetails", registerDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://peams-api.onrender.com/api/auth/signup",
        registerDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      // console.log("response", response);
      setLoading(false);
      if (response.status === 200) {
        success("Registration Successfull");
        navigate("/");
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
    setRegisterDetails((registerDetails) => ({
      ...registerDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-teal-100">
      {/* Content */}
      {/* Rotated rectangle */}
      <div
        className="absolute top-1/4 left-[28%] w-[40%] h-[60%] rounded-[8px] bg-gradient-to-r from-green-600 to-green-800 shadow-xl"
        style={{
          transform: "rotate(-8deg)",
          transformOrigin: "top left",
        }}
      ></div>
      {/* content main */}
      <div className="bg-white m-auto w-[40%] min-h-[50%] rounded-[8px] bg-cover bg-center shadow-xl p-4 flex flex-col items-center justify-start z-[1]">
        {/* Title part */}
        <div className="flex flex-col items-center justify-center text-teal-800 w-[50%] border-b-[2.5px] p-2 border-teal-600">
          <h4 className="text-teal-800 font-poppins text-xl font-semibold leading-36 tracking-normal">
            Register
          </h4>
          <span className="font-poppins text-sm font-normal leading-5 tracking-normal text-center">
            Input your details to get started
          </span>
        </div>
        {/* form part */}
        <form
          onSubmit={Registerhandler}
          className="w-[80%] my-6 flex flex-col gap-[20px]"
        >
          {/* pair: first name */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              First Name
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="text"
              placeholder="John"
              name="firstname"
              onChange={onchangeHandler}
            />
          </div>
          {/* pair: last name */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              Last Name
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="text"
              placeholder="Doe"
              name="lastname"
              onChange={onchangeHandler}
            />
          </div>
          {/* pair: matric_no */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-inter text-sm  leading-6 tracking-normal text-left text-gray-700">
              Matric Number
            </span>
            <input
              className="w-full h-[40px] text-sm px-2 py-2 rounded-sm border border-gray-300 focus:outline-none focus:ring focus:border-teal-100 bg-gray-200/40"
              type="text"
              placeholder="OLA-001-NUR"
              name="matric_no"
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
              placeholder="johndoe@example.com"
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
                    className="w-[70%] h-[45px] text-white px-21 py-19 rounded-md flex items-center justify-center gap-10 bg-gradient-to-r from-green-600 to-green-800 hover:bg-teal-700 hover:border-green-300 hover:border-2 shadow-lg"
                    type="submit"
                  >
                    Register
                  </button>
                  <span
                    onClick={gotoLogin}
                    className="mx-auto text-teal-700 text-sm cursor-pointer hover:text-teal-400"
                  >
                    Login
                  </span>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

// import { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import CloudinaryUpload from "../../../middlewares/CloudinaryUpload";
// import { success, error } from "../../../helpers/Alert";

// // Styles
// // import {
// //   Left,
// //   Right,
// //   Wrapper,
// //   Content,
// //   Title,
// //   Overlay,
// //   Register,
// //   LogoIsh,
// // } from "./Register.Styles";

// // widgets
// import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
// import Inputwidget from "../../../components/widgets/inputWidget/Inputwidget";
// import { CircleSpinner } from "../../../components/widgets/circleSpinner/CircleSpinner.Styles";

// // left image
// import bg from "../../../assets/images/register/register-side-img.png";
// import AppContext from "../../../context/AppContext";

// const Register = () => {
//   const { authLoading, setAuthLoading } = useContext(AppContext);

//   const [newAdmin, setNewAdmin] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     password: "",
//     media: "",
//   });

//   const navigate = useNavigate();

//   const onchangeHandler = (e) => {
//     e.persist();

//     setNewAdmin((item) => ({
//       ...item,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const onFileChangeHandler = async (e) => {
//     try {
//       e.persist();
//       setAuthLoading(true);
//       const media = await CloudinaryUpload(e);
//       setNewAdmin((item) => ({
//         ...item,
//         media: media,
//       }));
//       setAuthLoading(false);
//     } catch (err) {
//       console.log(
//         "🚀 ~ file: Register.jsx ~ line 87 ~ onFileChangeHandler ~ error",
//         error
//       );
//     }
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     // console.log("newAdmin: ", newAdmin);
//     try {
//       setAuthLoading(true);
//       const response = await axios.post(
//         "https://wecare-api.onrender.com/api/auth/register",
//         newAdmin,
//         {
//           headers: {
//             "content-type": "application/json",
//           },
//         }
//       );
//       setAuthLoading(false);
//       if (response.status === 200) {
//         success("Registration successful");
//         // getCaregivers();
//         navigate("/register");
//       }
//     } catch (err) {
//       error("Couldn't create user");
//       console.log(err);
//       setAuthLoading(false);
//     }
//   };

//   return (
//     <>
//       <Wrapper>
//         <Left bg={bg}>
//           <Overlay>
//             <LogoIsh>We Care</LogoIsh>
//           </Overlay>
//         </Left>
//         <Right>
//           <form onSubmit={submit}>
//             <Content>
//               <Title>Sign Up</Title>
//               <Inputwidget
//                 type={"text"}
//                 placeholder={"e.g Sarah"}
//                 label={"First Name"}
//                 name={"firstName"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={newAdmin.firstName}
//               />
//               <Inputwidget
//                 type={"text"}
//                 placeholder={"e.g Banks"}
//                 label={"Last Name"}
//                 name={"lastName"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={newAdmin.lastName}
//               />
//               <Inputwidget
//                 type={"text"}
//                 placeholder={"e.g SarahBanks07"}
//                 label={"Username"}
//                 name={"userName"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={newAdmin.userName}
//               />
//               <Inputwidget
//                 type={"file"}
//                 label={"Display Photo"}
//                 name={"media"}
//                 required
//                 // onChange={onFileChangeHandler}
//                 onChange={(e) => onFileChangeHandler(e)}
//                 defaultValue={newAdmin.media}
//               />
//               <Inputwidget
//                 type={"email"}
//                 placeholder={"e.g SarahBanks07@email.com"}
//                 label={"Email"}
//                 name={"email"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={newAdmin.email}
//               />
//               <Inputwidget
//                 type={"password"}
//                 placeholder={"At least 8 characters"}
//                 label={"Password"}
//                 name={"password"}
//                 required
//                 onChange={(e) => onchangeHandler(e)}
//                 defaultValue={newAdmin.password}
//               />
//               {authLoading ? (
//                 <CircleSpinner />
//               ) : (
//                 <ButtonWidget text={"Create Account"} />
//               )}
//               <Register>
//                 Already have an account?
//                 <NavLink to="/register">Register</NavLink>
//               </Register>
//             </Content>
//           </form>
//         </Right>
//       </Wrapper>
//     </>
//   );
// };

// export default Register;
