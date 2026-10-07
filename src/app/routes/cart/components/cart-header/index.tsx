import classes from "./cart-header.module.css";

export const CartHeader = () => {
  return (
    <div className={classes["cart-header"]}>
      <p className={classes["cart-headline"]}>All Products</p>
    </div>
  );
};
