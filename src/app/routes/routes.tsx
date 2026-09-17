import App from "../App";
import { Cart } from "./cart";
import { Shop } from "./shop";
import { Home } from "./home";

import { Navigate } from "react-router";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
