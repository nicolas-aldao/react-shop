import React from 'react';
import Products from '../containers/Products';
import ShoppingCart from '../containers/ShoppingCart';

const ShoppingCartPage = () => {
    return (
        <React.Fragment>
            <Products></Products>
            <ShoppingCart>
            </ShoppingCart>
        </React.Fragment>
    );
}

export default ShoppingCartPage;