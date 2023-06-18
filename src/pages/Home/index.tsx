import React from "react";
import Header from "../../containers/Header";

import { Container, Content, TopNavigation } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <TopNavigation>
        <Header/>
      </TopNavigation>
      <Content></Content>
    </Container>
  );
};

export default Home;
