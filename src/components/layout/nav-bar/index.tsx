import classes from "./navbar.module.css";

import { Link } from "react-router";

import homeIcon from "@images/home-header.svg";
import shopIcon from "@images/shop-header.svg";
import cartIcon from "@images/cart-header.svg";

import { useCartProductData } from "../../../app/contexts/cart-product-context";

export const NavBar = () => {
  const { getProductsQuantity } = useCartProductData();
  const quantity = getProductsQuantity();

  return (
    <div className={classes.navbar}>
      <Link to="/home">
        <img className={classes["nav-icon"]} src={homeIcon} alt="home" />
        <p>Home</p>
      </Link>
      <Link to="/shop">
        <img className={classes["nav-icon"]} src={shopIcon} alt="shop" />
        <p>Shop</p>
      </Link>
      <Link className={classes["cart-link"]} to="/cart">
        <img className={classes["nav-icon"]} src={cartIcon} alt="cart" />
        <p>Cart</p>
        {quantity !== 0 && (
          <p className={classes["cart-quantity"]}>{quantity}</p>
        )}
      </Link>
    </div>
  );
};
