import React from "react";
import "../styles/ProductDetails.scss";
//assets
import closeLogo from '@icons/icon_close.png';
import addToCart from '@icons/bt_add_to_cart.svg';
//components
import PrimaryButton from "../components/primary-button/PrimaryButton";


const ProductDetails = () => {
  return (
    <section className="product-detail">
      <div className="product-detail-close">
        <img src={closeLogo} alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
      />
      <div className="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its practical position, this bike also fulfills a decorative
          function, add your hall or workspace.
        </p>
        <PrimaryButton title={"Add to cart"} classesAdded={"add-to-cart-button"}>
          <img src={addToCart} alt="add to cart" />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default ProductDetails;
