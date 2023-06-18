import React from "react";

import ProductList from "../../containers/ProductList";



import { Container, ProductsContainer } from "./styles";

const Home: React.FC = () => {

  return (
    <Container>
        <ProductsContainer>
          <ProductList />
        </ProductsContainer>
    </Container>
  );
};

export default Home;
