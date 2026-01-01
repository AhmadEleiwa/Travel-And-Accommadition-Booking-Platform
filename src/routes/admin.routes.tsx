import type { RouteObject } from "react-router-dom";
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";
import CitiesPage from "../pages/Admin/CitiesPage";
import HotelsPage from "../pages/Admin/HotelsPage";
import RoomPage from "../pages/Admin/RoomPage";

export const AdminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminDashboardPage />,
    children: [
      { path: "cities", element: <CitiesPage /> },
      { path: "hotels", element: <HotelsPage /> },
      { path: "rooms", element: <RoomPage /> },
    ],
  },
];
