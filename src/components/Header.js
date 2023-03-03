import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export default function Header(props) {
  const { countCartItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="#/">
          <h2>Shopping</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          <ShoppingCartIcon />
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin">Sign In</a>
      </div>
    </div>
  );
}
