import { useNavigate } from "react-router-dom";
import { info } from "../../helpers/Alert";

import logo from "../../assets/images/logo.jpeg";

const UserNavbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    info("You were logged out");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="bg-white shadow-md w-full flex justify-between items-center p-2 px-8 mb-24">
      {/* left */}
      <img
        src={logo} // Replace with your actual logo image source
        alt="Logo"
        className="w-16 h-16" // Adjust the width and height as needed
      />
      {/* Middle */}
      <span className="font-inter text-[20px] ont-medium font-semibold leading-29 tracking-normal text-left z-10">
        School of Midwifery Hospital Final Examination
      </span>
      {/* right */}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center">
          {/* <span className="font-semibold font-sans">
            {activeUser.firstname}{"  "}{activeUser.lastname}
          </span> */}
          {/* <span className="font-sans text-sm">{activeUser.role}</span> */}
        </div>
        {/* logout */}
        <span
          className="bg-red-500 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-red-700"
          onClick={logoutHandler}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default UserNavbar;
