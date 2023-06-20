const { knex } = require("../database");

const getAllProducts = async (req, res) => {
  const products = await knex.raw("select * from products");

  res.json({
    message: "Produtos obtidos com sucesso",
    content: products.rows,
  });
};

module.exports = { getAllProducts };
