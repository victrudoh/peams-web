import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
// import Login from "../../pages/auth/login/Login";
// import Login from "../../pages/auth/login/Login";
import SelectCourse from "../../pages/user/selectCourse";
import Test from "../../pages/user/test/Test";
import TestCompleted from "../../pages/user/test/TestCompleted";
import ErrorPage from "../../pages/ErrorPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<SelectCourse />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/user/select-course" element={<SelectCourse />} />
        <Route path="/user/test" element={<Test />} />
        <Route path="/user/test-completed" element={<TestCompleted />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
