import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import "../styles/ShoppingCartItem.scss";
// assets
import close from "@icons/icon_close.png";

const ShoppingCartItem = ({ product }) => {
  const {removeFromCart} = useContext(AppContext);
  const handleRemove = product => {
    removeFromCart(product);
  }
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.image}
          alt={product.title}
        />
      </figure>
      <p>{product.title.substring(0,20)}...</p>
      <p>{product.price}</p>
      <img src={close} alt="close" onClick={()=> handleRemove(product)}/>
    </div>
  );
};

export default ShoppingCartItem;
