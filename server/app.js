require("dotenv").config();
require("./db");

const express = require("express");
const app = express();
//require("./config")(app);

const catsRouter = require('./routers/cats');
app.use('/api', catsRouter);

module.exports = app;