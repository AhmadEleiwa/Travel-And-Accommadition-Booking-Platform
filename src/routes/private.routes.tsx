import type { RouteObject } from "react-router-dom";
import {CheckoutPage} from "@/features/checkout/pages/CheckoutPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export const PrivateRoutes: RouteObject[] = [
  {
    path: "/checkout/:hotelId/:roomId",
    element: <CheckoutPage  />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
];
