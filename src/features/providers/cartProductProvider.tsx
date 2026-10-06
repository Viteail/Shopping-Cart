import { useState } from "react";

import type { ICartProductData, IProductData } from "@/types/index";

import { CartProductContext } from "../../app/contexts/cart-product-context";

interface ICartProductDataProviderProps {
  children: React.ReactNode;
}

export const CartProductDataProvider: React.FC<
  ICartProductDataProviderProps
> = (props) => {
  const { children } = props;

  const [cartProducts, setCartProducts] = useState<ICartProductData[]>([]);

  const handleAddToCart = (product: IProductData, amount: number) => {
    const cartProduct = {
      product,
      amount,
    };

    const tempCartProducts = [...cartProducts];
    const foundItemIndex = tempCartProducts.find(
      (item) => item.product.id === product.id,
    );

    if (foundItemIndex) {
      foundItemIndex.amount += amount;
      setCartProducts(tempCartProducts);
    } else setCartProducts((prev) => [...prev, cartProduct]);
  };

  console.log("cart products", cartProducts);

  return (
    <CartProductContext.Provider
      value={{ data: cartProducts, handleAddToCart }}
    >
      {children}
    </CartProductContext.Provider>
  );
};
