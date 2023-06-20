const { knex } = require("../database");

const createOrder = async (req, res) => {
  const payload = req.body;

  const insertOrderResponse = await knex("orders").insert(
    {
      total: payload.total,
      item_quantity: payload.items.length,
      created_at: new Date().toISOString(),
    },
    ["id"]
  );

  const orderId = insertOrderResponse[0].id;

  await Promise.all(
    payload.items.map(async (item) => {
      await knex("order_items").insert({
        order_id: orderId,
        product_id: item.product_id,
        quantity: item.quantity,
      });
    })
  );

  res.json({
    message: "Pedido cadastrado com sucesso",
  });
};

module.exports = { createOrder };
