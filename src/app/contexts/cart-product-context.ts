import { createContext, useContext } from "react";

import type { CardProductContextState } from "@/types/index";

export const CartProductContext = createContext<CardProductContextState | null>(
  null,
);

export const useCartProductData = () => {
  const cartProductContextState = useContext(CartProductContext);

  if (cartProductContextState === null) {
    throw new Error(
      "useProductData must be used within a ProductDataProvider tag",
    );
  }

  return cartProductContextState;
};
