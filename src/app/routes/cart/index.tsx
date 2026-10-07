import { useCartProductData } from "../../contexts/cart-product-context";
import { CartHeader } from "./components/cart-header";
import { CartMain } from "./components/cart-main";

export const Cart = () => {
  const { data } = useCartProductData();

  return (
    <div>
      <CartHeader />
      <CartMain data={data} />
    </div>
  );
};
