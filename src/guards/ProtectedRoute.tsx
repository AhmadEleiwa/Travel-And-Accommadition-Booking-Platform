import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  //   const token = localStorage.getItem("token");
  const token = true; // change it later to get it from localStorage or cookies
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};
