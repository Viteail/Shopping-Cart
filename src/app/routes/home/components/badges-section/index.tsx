import classes from "../../home.module.css";
import { Icon } from "@components/index";

import iconShipping from "@images/shipping.svg";
import iconSecure from "@images/secure.svg";
import iconWarranty from "@images/warranty.svg";
import iconSupport from "@images/support.svg";

export const BadgesSection = () => {
  return (
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
  )
}
