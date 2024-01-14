import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;