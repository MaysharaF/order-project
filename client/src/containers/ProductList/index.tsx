import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";

import { Product } from "../../models/Product";

import { Container } from "./styles";

interface IProps {
  products: Product[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const addToCart = (product: Product) => {
    const existingItem = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as Product[];

    const itemIndex = existingItem.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      existingItem[itemIndex].quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(existingItem));
    } else {
      const updatedCartItems = [...existingItem, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} addToCart={addToCart} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
