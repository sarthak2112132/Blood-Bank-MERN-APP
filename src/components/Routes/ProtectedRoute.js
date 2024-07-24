import React from "react";
// import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
