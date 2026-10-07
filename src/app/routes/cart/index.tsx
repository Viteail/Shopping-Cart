import { useCartProductData } from "../../contexts/cart-product-context";
import { CartEmpty } from "./components/cart-empty";
import { CartHeader } from "./components/cart-header";
import { CartMain } from "./components/cart-main";

export const Cart = () => {
  const { data } = useCartProductData();

  return (
    <div>
      <CartHeader />
      {!data.length ? <CartEmpty /> : <CartMain data={data} />}
    </div>
  );
};
