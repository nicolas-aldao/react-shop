import React, { useState, useEffect } from "react";
import ProductCard from "@components/ProductCard";
import useGetProducts from "@hooks/useGetProducts";
import "@styles/Products.scss";
import Spinner from "../components/spinner";

const API = "https://fakestoreapi.com/products?limit=20";

const Products = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      {products.length == 0 ? (
        <Spinner/>
      ):null}
      <div className="cards-container">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))
        ) :null}
      </div>
    </section>
  );
};

export default Products;
