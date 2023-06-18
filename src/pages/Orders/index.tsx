import React from "react";

import {Table} from 'antd'

import { Container } from "./styles";

const Orders: React.FC = () => {

  const dataSource = [
    {
      key: '1',
      quantity: 1,
      item: 'Orgulho e Preconceito',
      total: "R$ 79,00"
    },
  
  ];

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ];

  

  return (
    <Container>
      <h2>Seus pedidos</h2>
      <Table dataSource={dataSource} columns={columns} />;
    </Container>
  );
};

export default Orders;
