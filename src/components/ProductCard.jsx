import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductCard.scss';
import addToCartImg from '@icons/bt_add_to_cart.svg';

const ProductCard = ({ product }) => {
    const {addToCart} = useContext(AppContext);
    const handleClick = item => {
      addToCart(item);
      console.log(item);
    }
    return (
        <div className="product-card1">
            <img src={product.image} alt={product.title}/>
            <div className="product-info1">
              <div>
                <p>{product.title.substring(0,17)}...</p>
                <p>{product.category}</p>
              </div>
              <figure onClick={()=> handleClick(product)}>
                <img src={addToCartImg} alt="add cart button"/>
              </figure>
            </div>
          </div>
    );
}

export default ProductCard;