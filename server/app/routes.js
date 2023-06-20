const express = require("express");
const router = express.Router();

const { getAllProducts, createOrder, getAllOrders } = require("./useCases");

router.get("/products", async (req, res) => await getAllProducts(req, res));
router.post("/order", async (req, res) => await createOrder(req, res));
router.get("/orders", async (req, res) => await getAllOrders(req, res));

module.exports = { router };
