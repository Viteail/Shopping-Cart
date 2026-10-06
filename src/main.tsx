import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./app/routes/routes";
import { ProductDataProvider } from "@features/providers/productProvider";
import { CartProductDataProvider } from "@features/providers/cartProductProvider";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductDataProvider>
      <CartProductDataProvider>
        <RouterProvider router={router} />
      </CartProductDataProvider>
    </ProductDataProvider>
  </StrictMode>,
);
