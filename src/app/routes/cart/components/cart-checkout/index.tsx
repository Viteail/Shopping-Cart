import { useCartProductData } from "../../../../contexts/cart-product-context";
import classes from "./cart-checkout.module.css";

import { Button } from "@components/button";

export const CartCheckout = () => {
  const { handleEmptyCart, getTotalPriceProducts } = useCartProductData();

  return (
    <div className={classes["cart-checkout-wrapper"]}>
      <div>
        <p className={classes["cart-total-price"]}>
          Total Price: {getTotalPriceProducts()}$
        </p>
      </div>
      <div className={classes["cart-btns-wrapper"]}>
        <Button onClick={() => handleEmptyCart()} classesToAppend={["cancel"]}>
          Cancel All
        </Button>
        <Button classesToAppend={["purchase"]}>Purchase All</Button>
      </div>
    </div>
  );
};
