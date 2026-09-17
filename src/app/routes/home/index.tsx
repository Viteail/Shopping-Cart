import { Button } from "../../../components";
import classes from "./home.module.css";

export const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["wrapper-section"]}>
        <div className={classes["main-section"]}>
          <p className={classes["main-headline"]}>
            Unleash Raw Power with Next-Gen Laptops
          </p>
          <p className={classes["sub-headline"]}>
            Discover high-performance machines engineered for hardcore gaming,
            creative heavy-lifting, and seamless multitasking. Built with
            top-tier components and rigorously tested thermal systems.
          </p>
          <div className={classes['btns-wrapper']}>
            <Button primary>Shop Laptops</Button>
            <Button secondary>View Hot Deals</Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
