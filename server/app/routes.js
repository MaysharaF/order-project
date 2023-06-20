const express = require("express");
const router = express.Router();

const { getAllProducts } = require("./useCases");

router.get("/products", async (req, res) => await getAllProducts(req, res));

module.exports = { router };
