import classes from "./cart-empty.module.css";

export const CartEmpty = () => {
  return (
    <div className={classes["cart-empty-wrapper"]}>
      <p className={classes["cart-empty-headline"]}>Your cart is empty...</p>
    </div>
  );
};
