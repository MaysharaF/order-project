import React from "react";

import Book1 from "../../assets/images/orgulho_e_preconceito.jpg";

import { Product } from "../../models/Product";

import { Container, ImageProduct, InfoProduct } from "./styles";

interface IProps {
  product: Product;
  addToCart: (product: Product) => void
}

const ProductCard: React.FC<IProps> = ({ product, addToCart }) => {
  return (
    <Container key={product.id}>
      <ImageProduct>
        <img src={Book1} alt="" />
      </ImageProduct>

      <InfoProduct>
        <div className="info-product">
          <span className="name-product">{product.title}</span>
          <span className="price-product"> R$ {product.price}</span>
        </div>
        <p className="observation">
          {product.observation}
        </p>

        <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
      </InfoProduct>
    </Container>
  );
};

export default ProductCard;
