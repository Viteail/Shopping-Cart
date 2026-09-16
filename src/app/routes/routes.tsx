import App from "../App";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
