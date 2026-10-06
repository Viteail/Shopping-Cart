import classes from "./shop-loading.module.css";

export const ShopLoading = () => {
  return (
    <div className={classes["shop-loading"]}>
      <div className={classes.loader}></div>
    </div>
  );
};
