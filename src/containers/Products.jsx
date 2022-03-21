import React from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/Products.scss";

const API = 'https://fakestoreapi.com/products?limit=20';

const Products = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Products;
