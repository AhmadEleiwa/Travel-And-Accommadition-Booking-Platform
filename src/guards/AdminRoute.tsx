import { Navigate, Outlet } from "react-router-dom";
import type { UserRole } from "../features/auth";

export const AdminRoute = () => {
  //   const token = localStorage.getItem("token");
  //   const role: = localStorage.getItem("role");
  const token = true; // change them later on the authorization feature
  const role: UserRole = "ADMIN" as UserRole;
  if (!token) return <Navigate to="/login" replace />;
  if (role !== "ADMIN") return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};
