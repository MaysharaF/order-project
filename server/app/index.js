const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const { router } = require("./routes.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

module.exports = { app };
