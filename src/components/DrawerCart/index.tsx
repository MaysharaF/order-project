import React from "react";

import Book1 from "../../assets/images/orgulho_e_preconceito.jpg";

import { Container, Content, ProductList, ProductCard } from "./styles";

type IProps = {
  onClose: () => void;
  open: boolean;
};

const DrawerCart: React.FC<IProps> = ({ onClose, open }) => {
  return (
    <Container
      title="Seu carrinho"
      onClose={onClose}
      placement="right"
      open={open}
    >
      <ProductList>
        <ProductCard>
          <div className="image-card">
            <img src={Book1} alt="" />
          </div>

          <div className="info-card">
            <span>Orgulho e Preconceito</span>
            <span>R$ 79,00</span>
            <span>Quantidade: 1</span>

            <span className="remove-item">remover item</span>
          </div>
        </ProductCard>
      </ProductList>

      <Content>
        <div className="total-label">
          <label>Subtotal: <span className="total">R$ 79,00</span></label>
        </div>
        <button>Finalizar Compra</button>
      </Content>
    </Container>
  );
};

export default DrawerCart;
