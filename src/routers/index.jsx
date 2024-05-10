import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PageRouters from "./PageRouters";

const index = () => {
  const isAuthenticated = false;

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={
              !isAuthenticated ? (
                <Login />
              ) : (
                <Navigate to={"/"} replace={true} />
              )
            }
          />
          <Route
            exact
            path="/register"
            element={
              !isAuthenticated ? (
                <Register />
              ) : (
                <Navigate to={"/"} replace={true} />
              )
            }
          />
          <Route
            index
            path="/*"
            element={!isAuthenticated ? <Login /> : <PageRouters />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default index;
