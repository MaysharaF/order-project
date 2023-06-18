import React, { useEffect, useState } from "react";

import Book1 from "../../assets/images/orgulho_e_preconceito.jpg";

import { Container, Content, ProductList, ProductCard } from "./styles";
import { Product } from "../../models/Product";

type IProps = {
  onClose: () => void;
  open: boolean;
};

const DrawerCart: React.FC<IProps> = ({ onClose, open }) => {
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  useEffect(() => {
    const existingCartItems = localStorage.getItem("cartItems");
    if (existingCartItems) {
      const parsedCartItems = JSON.parse(existingCartItems);
      setProductsCart(parsedCartItems);
    }
  }, []);

  return (
    <Container
      title="Seu carrinho"
      onClose={onClose}
      placement="right"
      open={open}
    >
      <ProductList>
       {productsCart.map(product => (

         <ProductCard key={product.id}>
         <div className="image-card">
           <img src={Book1} alt="" />
         </div>

         <div className="info-card">
           <span>{product.title}</span>
           <span>R$ {product.price}</span>
           <span>Quantidade: {product.quantity}</span>

           <span className="remove-item">remover item</span>
         </div>
       </ProductCard>
       ))}
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
