// import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
// import Login from "../../pages/auth/login/Login";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import ErrorPage from "../../pages/ErrorPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
