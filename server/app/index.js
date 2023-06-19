const express = require("express");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

module.exports = { app };
