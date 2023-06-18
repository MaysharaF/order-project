import React from 'react';

 import { Container, ActionContent } from './styles';

const Header: React.FC = () => {
  return <Container>
    <h2>Olá, <span>Mayshara</span></h2>

    <ActionContent>
      <a href="#">Meus pedidos</a>

      <button>Nova compra</button>
    </ActionContent>
  </Container>
}

export default Header;