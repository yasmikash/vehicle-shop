import { HomePage } from "../pages/Home";
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
        path: "shop",
        element: <div>Shop</div>,
      },
    ],
  },
];
