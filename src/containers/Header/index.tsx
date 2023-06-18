import React from 'react';

 import { Container, ActionContent } from './styles';

const Header: React.FC = () => {
  return <Container>
    <h2>Olá, Mayshara</h2>

    <ActionContent>
      <a href="/">Ver produtos</a>
      <a href="/order-list">Meus pedidos</a>

      <button>Carrinho</button>
    </ActionContent>
  </Container>
}

export default Header;