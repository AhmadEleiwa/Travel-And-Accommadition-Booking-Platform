import type { RouteObject } from "react-router-dom";
import LoginPage from "../features/auth/pages/LoginPage";
import SignUpPage from "../features/auth/pages/SignUpPage";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path:'/signup',
    element: <SignUpPage />
  }
];
