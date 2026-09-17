import classes from "./home.module.css";

import { Button, Icon } from "../../../components";

import iconShipping from "../../../assets/shipping.svg";
import iconSecure from "../../../assets/secure.svg";
import iconWarranty from "../../../assets/warranty.svg";
import iconSupport from "../../../assets/support.svg";

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
          <div className={classes["btns-wrapper"]}>
            <Button primary>Shop Laptops</Button>
            <Button secondary>View Hot Deals</Button>
          </div>
        </div>
      </div>
      <div className={classes["badges-wrapper"]}>
        <div className={classes["badge-wrapper"]}>
          <Icon src={iconShipping} alt="shipping" />
          <p>Fast Shipping</p>
        </div>
        <div className={classes["badge-wrapper"]}>
          <Icon src={iconSecure} alt="secure" />
          <p>Secure Checkout</p>
        </div>
        <div className={classes["badge-wrapper"]}>
          <Icon src={iconWarranty} alt="warranty" />
          <p>Warranty Guaranteed</p>
        </div>
        <div className={classes["badge-wrapper"]}>
          <Icon src={iconSupport} alt="support" />
          <p>Support 24/7</p>
        </div>
      </div>
    </div>
  );
};
