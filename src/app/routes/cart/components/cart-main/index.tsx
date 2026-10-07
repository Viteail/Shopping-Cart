import classes from "./cart-main.module.css";

import { CartProductCard } from "@features/components/cart-product-card";
import type { ICartProductData } from "@/types/index";

interface ICartMainProps {
  data: ICartProductData[];
}

export const CartMain: React.FC<ICartMainProps> = (props) => {
  const { data } = props;
  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["main-content"]}>
        {data.map((item, index) => (
          <CartProductCard
            key={item.product.id}
            itemData={data[index]}
          ></CartProductCard>
        ))}
      </div>
    </div>
  );
};
