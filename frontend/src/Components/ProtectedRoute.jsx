import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const auth = localStorage.getItem("auth");
  return <div>{auth ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default ProtectedRoute;
