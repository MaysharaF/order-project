import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard";

import { Product } from "../../models/Product";

import { Container } from "./styles";

const ProductList: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
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
      <ProductCard
        product={{
          id: 1,
          observation:
            "Edição Português | por Jane Austen e Roberto Leal Ferreira | 12 abr. 2018",
          price: 79,
          title: "Orgulho e Preconceito",
          quantity: 0,
          url_image: "https://m.media-amazon.com/images/I/51lC3sHYyML._SX328_BO1,204,203,200_.jpg"
        }}
        addToCart={addToCart}
      />
    </Container>
  );
};

export default ProductList;
