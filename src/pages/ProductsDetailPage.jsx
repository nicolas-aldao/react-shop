import React from 'react';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';

const ProductsDetailPage = () => {
    return (
        <React.Fragment>
            <Products></Products>
            <ProductDetails></ProductDetails>
        </React.Fragment>
    );
}

export default ProductsDetailPage;