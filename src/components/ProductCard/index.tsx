import React from "react";

import Book1 from '../../assets/images/orgulho_e_preconceito.jpg'

import { Container, ImageProduct, InfoProduct } from "./styles";

const ProductCard: React.FC = () => {
  return (
    <Container>
      <ImageProduct>
        <img src={Book1} alt="" />
      </ImageProduct>

      <InfoProduct>
        <div className="info-product">
          <span className="name-product">Orgulho e preconceito</span>
          <span className="price-product">R$79,00</span>
        </div>
        <p className="observation">Edição Português | por Jane Austen e Roberto Leal Ferreira | 12 abr. 2018</p>
      
        <button>
         Adicionar ao carrinho
        </button>
      </InfoProduct>
      
    </Container>
  );
};

export default ProductCard;
