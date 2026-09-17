import classes from "./navbar.module.css";

import { Link } from "react-router";

export const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};
