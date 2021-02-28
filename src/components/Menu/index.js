import React from "react";
import { Nav } from "./style";
import logo from "../../assets/images/ShopI.svg";
import cart from "../../assets/images/cart.svg";

function Menu() {
  return (
    <Nav>
      <div id="menu">
        <img src={logo} alt="ShopI" className="logo" />
        <div>
          <div className="quantidade">1</div>
          <img src={cart} alt="Cart" className="cart" />
        </div>
      </div>
    </Nav>
  );
}

export default Menu;
