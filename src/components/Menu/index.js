/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, NavFixo } from "./style";
import logo from "../../assets/images/ShopI.svg";
import cart from "../../assets/images/cart.svg";
import { CartContext } from "../../context/CartContext";

function Menu() {
  const { items } = useContext(CartContext);

  return (
    <>
      <NavFixo />
      <Nav>
        <div id="menu">
          <Link to="/">
            <img src={logo} alt="ShopI" className="logo" />
          </Link>
          <div>
            {items.length !== 0 && (
              <div className="quantidade">{items.length}</div>
            )}
            <Link to="/cart">
              <img src={cart} alt="Cart" className="cart" />
            </Link>
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Menu;
