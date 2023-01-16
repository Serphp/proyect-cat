require("dotenv").config();
require("./db");
require('./db/seed/models_init');

const express = require("express");
const app = express();
//require("./config")(app);

const catsRouter = require('./routers/cats');
app.use('/api', catsRouter);

module.exports = app;