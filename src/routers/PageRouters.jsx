import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/404";
import Users from "../pages/users/Users";
import UserDetail from "../pages/users/UserDetail";

const PageRouters = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        {/* kullanıcı işlemleri */}
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/users/:id" element={<UserDetail />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default PageRouters;
