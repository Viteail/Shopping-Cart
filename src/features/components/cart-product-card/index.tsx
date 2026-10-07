import classes from "./cart-product-card.module.css";

import { Button } from "@components/button";
import { Input } from "@components/input";

import { getPriceAfterDiscount, getTotalPrice } from "../../../utils/price";

import type { ICartProductData } from "@/types/index";

import plusIcon from "@images/plus.svg";
import minusIcon from "@images/minus.svg";
import removeIcon from "@images/trash-bin.svg";

import { useInputState } from "@hooks/useInputState";
import { useCartProductData } from "../../../app/contexts/cart-product-context";

import { useEffect } from "react";

interface ICartProductCardProps {
  itemData: ICartProductData;
}

export const CartProductCard: React.FC<ICartProductCardProps> = (props) => {
  const { itemData } = props;
  const product = itemData.product;

  const { handleChangeAmount } = useCartProductData();

  const {
    inputValue,
    handleIncrementValue,
    handleDecrementValue,
    handleInputChange,
  } = useInputState(itemData.amount);

  useEffect(() => {
    handleChangeAmount(product, inputValue.numberValue);
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [product, inputValue.numberValue]);

  return (
    <div className={classes["product-card-wrapper"]}>
      <div>
        <img
          className={classes["product-img"]}
          src={product.image}
          alt="product"
        />
      </div>
      <div className={classes["product-headlines-wrapper"]}>
        <p className={classes["product-title"]}>{product.title}</p>
        <div className={classes["product-price-wrapper"]}>
          <p className={classes.price}>
            {getTotalPrice(product.price, itemData.amount)}$
          </p>
          <p className={classes["discount-price"]}>
            {getTotalPrice(
              getPriceAfterDiscount(product.price, product.discountPercentage),
              itemData.amount,
            )}
            $
          </p>
          <div className={classes["discount-wrapper"]}>
            <p>{product.discountPercentage}%</p>
          </div>
        </div>
      </div>
      <div className={classes["product-footer"]}>
        <div className={classes["product-quantity-wrapper"]}>
          <Button
            onClick={() => handleIncrementValue()}
            classesToAppend={["increment"]}
          >
            <img src={plusIcon} alt="plus" />
          </Button>
          <Input
            type="number"
            value={inputValue.displayValue}
            onChange={handleInputChange}
          />
          <Button
            onClick={() => handleDecrementValue()}
            classesToAppend={["decrement"]}
          >
            <img src={minusIcon} alt="minus" />
          </Button>
        </div>
        <div>
          <Button classesToAppend={["remove"]}>
            <img src={removeIcon} alt="remove" />
          </Button>
        </div>
      </div>
    </div>
  );
};
