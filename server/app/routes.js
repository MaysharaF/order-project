const express = require("express");
const router = express.Router();

const { getAllProducts, createOrder } = require("./useCases");

router.get("/products", async (req, res) => await getAllProducts(req, res));
router.post("/order", async (req, res) => await createOrder(req, res));

module.exports = { router };
