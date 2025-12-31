import type { RouteObject } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import ConfirmationPage from "../pages/ConfirmationPage";

export const PrivateRoutes: RouteObject[] = [
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
];
