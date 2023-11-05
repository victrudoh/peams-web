import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "../../context/AppContext";

// components
import Layed from "../Layed";
import Login from "../../pages/auth/login/Login";
import ErrorPage from "../../pages/ErrorPage";

// User
import SelectCourse from "../../pages/user/selectCourse";
import Test from "../../pages/user/test/Test";
import TestCompleted from "../../pages/user/test/TestCompleted";

const AppRoutes = () => {
  // const { activeUser, topbarTitle } = useContext(AppContext);

  const activeUser = "admin";

  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        {/* Admin */}
        {activeUser?.role === "admin" && (
          <>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/select-course" element={<SelectCourse />} />
            <Route path="/user/test" element={<Test />} />
            <Route path="/user/test-completed" element={<TestCompleted />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route index element={<Caregivers />} /> */}
            {/* <Route path="/admin/caregivers" element={<Caregivers />} /> */}
          </>
        )}

        {/* Care Giver */}
        {activeUser?.role === "user" && (
          <>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/select-course" element={<SelectCourse />} />
            <Route path="/user/test" element={<Test />} />
            <Route path="/user/test-completed" element={<TestCompleted />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
