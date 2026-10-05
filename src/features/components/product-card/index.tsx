import classes from "./product-data.module.css";

import { Button } from "@components/button";
import { Input } from "@components/input";

import type { IProductData } from "@/types/index";

import cartIcon from "@images/cart.svg";
import plusIcon from "@images/plus.svg";
import minusIcon from "@images/minus.svg";

interface IProductDataProps {
  data: IProductData;
}

export const ProductCard: React.FC<IProductDataProps> = (props) => {
  const { data } = props;

  const getPriceFromDiscount = (price: number, discountPercentage: number) =>
    Math.round(((price * discountPercentage) / 100) * 100) / 100;

  const getPriceAfterDiscount = (price: number, discountPercentage: number) =>
    Math.round(
      (price - getPriceFromDiscount(price, discountPercentage)) * 100,
    ) / 100;

  return (
    <div className={classes["product-wrapper"]}>
      <div className={classes["product-img-wrapper"]}>
        <img className={classes["product-img"]} src={data.image} />
      </div>
      <div>
        <p className={classes["product-title"]}>{data.title}</p>
      </div>
      <div className={classes["discount-price-wrapper"]}>
        <p className={classes.price}>{data.price}$</p>
        <div className={classes["from-discount-price-wrapper"]}>
          <p className={classes.discount}>{data.discountPercentage}%</p>
          <p className={classes["discount-price"]}>
            -{getPriceFromDiscount(data.price, data.discountPercentage)}$
          </p>
        </div>
      </div>
      <div>
        <p className={classes["final-price"]}>
          {getPriceAfterDiscount(data.price, data.discountPercentage)}$
        </p>
      </div>
      <div className={classes["product-footer"]}>
        <div className={classes["btns-wrapper"]}>
          <Button classesToAppend={["increment"]}>
            <img src={plusIcon} alt="plus" />
          </Button>
          <Button classesToAppend={["decrement"]}>
            <img src={minusIcon} alt="minus" />
          </Button>
        </div>
        <div>
          <Input type="number" />
        </div>
        <div className={classes["cart-wrapper"]}>
          <Button classesToAppend={["cart"]}>
            <img src={cartIcon} alt="cart" />
          </Button>
        </div>
      </div>
    </div>
  );
};
