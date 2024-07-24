import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PublicRoutes;
