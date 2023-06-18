import React from "react";
import Header from "../../containers/Header";

import ProductList from "../../containers/ProductList";

import { Container, Content, TopNavigation, ProductsContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <TopNavigation>
        <Header />
      </TopNavigation>

      <Content>
        <ProductsContainer>
          <ProductList />
        </ProductsContainer>
      </Content>
    </Container>
  );
};

export default Home;
