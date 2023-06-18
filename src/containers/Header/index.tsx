import React from 'react';
import { useLocation } from 'react-router-dom';

 import { Container, ActionContent } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return <Container>
    <h2>Olá, Mayshara</h2>

    <ActionContent>
      <a href="/" className={location.pathname === '/' ? 'active' : ''}>Ver produtos</a>
      <a href="/order-list" className={location.pathname === '/order-list' ? 'active' : ''}>Meus pedidos</a>

      <button>Carrinho</button>
    </ActionContent>
  </Container>
}

export default Header;