import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/auth/login" replace />;

  return children;
};

export default PrivateRoute;
