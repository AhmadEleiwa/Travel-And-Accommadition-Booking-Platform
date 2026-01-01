import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HotelDetailPage from "../pages/HotelDetailPage";
import SearchResultPage from "../pages/SearchResultPage";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchResultPage />,
  },
  {
    path: "/hotel/:id",
    element: <HotelDetailPage />,
  },
];
