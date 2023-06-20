import React, { useEffect, useState } from "react";

import ProductList from "../../containers/ProductList";

import { Container, ProductsContainer } from "./styles";
import { Product } from "../../models/Product";
import api from "../../services/api";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data: { content },
      } = await api.get("/products");
      setProducts(content);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <ProductsContainer>
        <ProductList products={products} />
      </ProductsContainer>
    </Container>
  );
};

export default Home;
