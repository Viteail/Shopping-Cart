import { createContext, useContext } from "react";

import type { ProductsContextState } from "@/types/index";

export const ProductContext = createContext<ProductsContextState | null>(null);

export const useProductData = () => {
  const productContextState = useContext(ProductContext);

  if (productContextState === null) {
    throw new Error(
      "useProductData must be used within a ProductDataProvider tag",
    );
  }

  return productContextState;
};
