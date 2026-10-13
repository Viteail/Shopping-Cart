import { CartProductDataProvider } from "@features/providers/cartProductProvider";
import { ProductDataProvider, type ProductDTO } from "@features/providers/productProvider";
import { render } from "@testing-library/react";
import { StrictMode } from "react";
import { createMemoryRouter, type RouteObject } from "react-router";
import { RouterProvider } from "react-router/dom";
import { mockProducts } from "./mock-products";

type RenderOptions = {
  route?: string;
  routes: RouteObject[];
  products?: ProductDTO[];
};

export const renderWithProviders = ({ route = "/", routes }: RenderOptions) => {
  const router = createMemoryRouter(routes, { initialEntries: [route] });

  return {
    router,
    ...render(
      <StrictMode>
        <ProductDataProvider initialProducts={mockProducts}>
          <CartProductDataProvider>
            <RouterProvider router={router} />
          </CartProductDataProvider>
        </ProductDataProvider>
      </StrictMode>,
    ),
  };
};
