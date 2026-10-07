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

  const hasProductInCart = (product: IProductData) => {
    return cartProducts.some((item) => item.product.id === product.id);
  };

  const handleChangeAmount = (
    product: IProductData,
    amount: number,
    add: boolean = false,
  ) => {
    const tempCartProducts = [...cartProducts];

    const foundItemIndex = tempCartProducts.find(
      (item) => item.product.id === product.id,
    );

    if (foundItemIndex) {
      if (add) foundItemIndex.amount += amount;
      else foundItemIndex.amount = amount;
      setCartProducts(tempCartProducts);
    }
  };

  const handleAddToCart = (product: IProductData, amount: number) => {
    const cartProduct = {
      product,
      amount,
    };

    if (hasProductInCart(product)) handleChangeAmount(product, amount, true);
    else setCartProducts((prev) => [...prev, cartProduct]);
  };

  const handleRemoveProduct = (product: IProductData) => {
    setCartProducts(
      cartProducts.filter((item) => item.product.id !== product.id),
    );
  };

  console.log("cart products", cartProducts);

  return (
    <CartProductContext.Provider
      value={{
        data: cartProducts,
        handleAddToCart,
        handleChangeAmount,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartProductContext.Provider>
  );
};
