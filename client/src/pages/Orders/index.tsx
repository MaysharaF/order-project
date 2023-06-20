import React, { useEffect, useState } from "react";

import { Table } from "antd";

import { Order } from "../../models/Order";

import api from "../../services/api";

import { Container } from "./styles";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fecthOrder = async () => {
      const {
        data: { content },
      } = await api.get("/orders");

      setOrders(content);
    };
    fecthOrder();
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Quantidade",
      dataIndex: "item_quantity",
      key: "item_quantity",
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  return (
    <Container>
      <h2>Seus pedidos</h2>
      <Table
        dataSource={orders.map((order) => ({
          ...order,
          item: order.items.reduce(
            (total, item) => total + `${item.product.title} | `,
            "| "
          ),
        }))}
        columns={columns}
      />
    </Container>
  );
};

export default Orders;
