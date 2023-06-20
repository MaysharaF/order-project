import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Product } from "../../models/Product";
import api from "../../services/api";

import { Container, Content, ProductList, ProductCard } from "./styles";
import { Alert, message } from "antd";

type IProps = {
  onClose: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerCart: React.FC<IProps> = ({ onClose, open, setOpen }) => {
  const [productsCart, setProductsCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const existingCartItems = localStorage.getItem("cartItems");
    if (existingCartItems) {
      const parsedCartItems = JSON.parse(existingCartItems);
      setProductsCart(parsedCartItems);
    }
  }, [open]);

  const handleRemoveItem = (id: number) => {
    const updatedCartItems: (Product | null)[] = productsCart.map((product) => {
      if (product.id === id) {
        const updatedQuantity = product.quantity - 1;
        if (updatedQuantity === 0) {
          setProductsCart((oldValue) =>
            oldValue.filter((product) => product.id === id)
          );
          return null;
        } else {
          setProductsCart((oldValue) =>
            oldValue.map((product) => {
              if (product.id === id) {
                product.quantity -= 1;
              }

              return product;
            })
          );
          return { ...product, quantity: updatedQuantity };
        }
      }
      return product;
    });

    const filteredCartItems = updatedCartItems.filter(Boolean) as Product[];

    localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
    setProductsCart(filteredCartItems);
  };

  const cartTotal = productsCart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  const handleCreateOrder = async () => {
    const payload = {
      total: cartTotal,
      item_quantity: productsCart.reduce(
        (total, item) => total + item.quantity,
        0
      ),
      items: productsCart.map((product) => ({
        product_id: product.id,
        quantity: product.quantity,
      })),
    };

    try {
      setLoading(true);
      await api.post("/order", payload);
      setProductsCart([]);
      localStorage.setItem("cartItems", "[]");
      setOpen(false);

      message.success("Pedido cadastrado com sucesso");
    } catch (error) {
      console.log("erro ao cadastrar pedido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      title="Seu carrinho"
      onClose={onClose}
      placement="right"
      open={open}
    >
      <ProductList>
        {productsCart.length !== 0 ? (
          <>
            {productsCart.map((product) => (
              <ProductCard key={product.id}>
                <div className="image-card">
                  <img
                    src={product.url_image}
                    alt={`Capa do livro ${product.title}`}
                  />
                </div>

                <div className="info-card">
                  <span>{product.title}</span>
                  <span>R$ {product.price}</span>
                  <span>Quantidade: {product.quantity}</span>

                  <span
                    className="remove-item"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    remover item
                  </span>
                </div>
              </ProductCard>
            ))}
          </>
        ) : (
          <h3>Seu carrinho está vazio</h3>
        )}
      </ProductList>

      <Content>
        <div className="total-label">
          <label>
            Subtotal: <span className="total">R$ {cartTotal}</span>
          </label>
        </div>
        <button onClick={() => handleCreateOrder()} disabled={loading}>
          {loading ? "Eviando Pedido..." : "Finalizar Pedido"}
        </button>
      </Content>
    </Container>
  );
};

export default DrawerCart;
