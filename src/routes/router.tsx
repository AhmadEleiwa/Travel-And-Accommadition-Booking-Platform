import { useRoutes } from "react-router-dom";
import { PublicRoutes } from "./public.routes";
import { AuthRoutes } from "./auth.routes";
import { PrivateRoutes } from "./private.routes";
import { AdminRoutes } from "./admin.routes";
import { ProtectedRoute } from "../guards/ProtectedRoute";
import { AdminRoute } from "../guards/AdminRoute";
import NotFoundPage from "../pages/NotFoundPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";

export const AppRouter = () =>
  useRoutes([
    ...PublicRoutes,
    ...AuthRoutes,
    {
      element: <ProtectedRoute />,
      children: PrivateRoutes,
    },
    {
      element: <AdminRoute />,
      children: AdminRoutes,
    },
    { path: "/unauthorized", element: <UnauthorizedPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
