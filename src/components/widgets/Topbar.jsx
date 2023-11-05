import { useNavigate } from "react-router-dom";
import { info } from "../../helpers/Alert";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import LogoText from "./LogoText";

const Topbar = () => {
  const { activeUser } = useContext(AppContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    info("You were logged out");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <>
      <div className="w-full flex justify-between px-4">
        <LogoText />
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <span className="font-semibold font-sans">
              {activeUser.username}
            </span>
            <span className="mx-2 font-semibold">|</span>
            <span className="font-sans text-sm">{activeUser.role}</span>
          </div>
          {/* logout */}
          <span
            className="bg-error-color font-semibold rounded-lg p-1 px-2 flex items-center justify-center outline-none text-white-ish cursor-pointer hover:bg-secondary-color"
            onClick={logoutHandler}
          >
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default Topbar;
