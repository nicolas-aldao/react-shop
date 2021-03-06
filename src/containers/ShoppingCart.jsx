import React, { useContext } from "react";
import AppContext from "../context/AppContext";
//asets
import arrow from "@icons/flechita.svg";
import close from "@icons/icon_close.png";
//styles
import "../styles/ShoppingCart.scss";
//components
import ShoppingCartItem from '../components/ShoppingCartItem';
import PrimaryButton from "../components/primary-button/PrimaryButton";

const ShoppingCart = () => {
  const {state} = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <aside className="order-shopping-cart-detail">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">shopping cart</p>
      </div>

      <div className="my-order-content">
        {state.cart.map(product => (
          <ShoppingCartItem product={product} key={`orderItem-${product.id}`}/>
        ))}
        {/* <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={close} alt="close" />
        </div> */}

        <div className="order-shopping-cart">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <PrimaryButton title={"Checkout"} classesAdded=""></PrimaryButton>
      </div>
    </aside>
  );
};

export default ShoppingCart;
