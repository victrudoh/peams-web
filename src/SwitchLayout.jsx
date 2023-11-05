import { useContext } from "react";
import AppContext from "./context/AppContext";

// Layouts
import AdminLayout from "./components/layouts/AdminLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

const SwitchLayout = () => {
  const { token, activeUser } = useContext(AppContext);

  const SelectedDisplay = () => {
    if (!token) {
      return <AuthLayout />;
    }

    if (activeUser?.role === "user") {
      return <UserLayout />;
    } else if (activeUser?.role === "admin") {
      return <AdminLayout />;
    }
    //  else {
    //   return <AuthLayout />;
    // }
  };

  return <SelectedDisplay />;
};

export default SwitchLayout;
