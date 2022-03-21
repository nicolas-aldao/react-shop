import React, { useState, useContext } from "react";
import SessionMenu from "@components/SessionMenu";
import AppContext from "../context/AppContext";
// assets
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
//components
import Cart from "@containers/ShoppingCart";
// styles
import "@styles/Header.scss";
import "@styles/Assets.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
  }
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            user123@example.com
          </li>
          <li className="navbar-shopping-cart"
              onClick={handleToggleOrders}
          >
            <img src={shoppingCart} alt="shopping cart" />
            { state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      {toggle ? <SessionMenu /> : ""}
      {toggleOrders ? <Cart /> : ""}
    </nav>
  );
};

export default Header;
