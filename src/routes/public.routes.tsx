import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import {HotelDetailPage} from "../features/hotels/pages/HotelDetailPage/HotelDetailPage";
import { SearchPage } from "@/features/search/pages/SearchPage/SearchPage";
// import SearchResultPage from "../pages/SearchResultPage";
// import SearchPage from "../pages/SearchResultPage";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/hotel/:id",
    element: <HotelDetailPage />,
  },
];
