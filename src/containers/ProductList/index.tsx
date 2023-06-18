import React from "react";

import ProductCard from "../../components/ProductCard";

import { Container } from "./styles";

const ProductList: React.FC = () => {
  return (
    <Container>
      <ProductCard />
    </Container>
  );
};

export default ProductList;
