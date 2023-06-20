import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";

import { Product } from "../../models/Product";

import { Container } from "./styles";

interface IProps {
  products: Product[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    // if (existingItem) {
    //   const updatedCartItems = cartItems.map((item) =>
    //     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //   );

    //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    //   setCartItems(updatedCartItems);
    // } else {
    //   const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];

    //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    //   setCartItems(updatedCartItems);
    // }
  };

  useEffect(() => {
    const existingCartItems = localStorage.getItem("cartItems");
    if (existingCartItems) {
      const parsedCartItems = JSON.parse(existingCartItems);
      setCartItems(Array.from(parsedCartItems));
    }
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} addToCart={addToCart} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
