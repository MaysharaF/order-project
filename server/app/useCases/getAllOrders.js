const { knex } = require("../database");

const getAllOrders = async (req, res) => {
  let orders = await knex.raw("select * from orders");
  orders = orders.rows;
  if (orders.length) {
    orders = await Promise.all(
      orders.map(async (order) => {
        let items = await knex("order_items").where({ order_id: order.id });

        if (items.length) {
          await Promise.all(
            items.map(async (item, index) => {
              const product = await knex("products")
                .where({ id: item.product_id })
                .first();
              items[index].product = product;
            })
          );
        }

        order = {
          ...order,
          items,
        };
        return order;
      })
    );
  }

  res.json({
    message: "Pedido obtidos com sucesso",
    content: orders,
  });
};

module.exports = { getAllOrders };
