import styled from "styled-components";

import { Drawer } from "antd";

export const Container = styled(Drawer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .ant-drawer-header {
    text-align: center;
    background-color: var(--dark-tone-ink);

    .ant-drawer-title {
      color: var(--white);
      font-weight: normal;
    }

    .ant-drawer-close {
      color: var(--white);
    }
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export const ProductCard = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid rgb(214, 214, 214);
  margin-bottom: 5%;

  .image-card {
    display: flex;
    width: 30%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-card {
    display: flex;
    width: 70%;
    height: 100%;
    flex-direction: column;

    .remove-item {
      margin-top: 3%;
      align-self: flex-end;
      cursor: pointer;
      color: red;
      text-decoration: underline;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 20%;

  .total-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    border-top: 1px solid rgb(214, 214, 214);
    border-bottom: 1px solid rgb(214, 214, 214);

    label {
      font-size: 1.3rem;
      color: var(--pompeii-ash);

      .total {
        font-weight: bold;
        color: var(--dark-tone-ink);
      }
    }
  }


  button {
    background-color: var(--dark-tone-ink);
    padding: 5%;
    color: var(--white);
    border-radius: 50px;
    border: none;
    font-size: 1rem;
  }
`;
