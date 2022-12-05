import { HomePage } from "../pages/Home";
import { CartPage } from "../pages/CartPage";
import { SingleVehiclePage } from "../pages/SingleVehiclePage";

import { MainLayout } from "../templates/MainLayout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "vehicle",
        element: <SingleVehiclePage />,
      },
    ],
  },
];
