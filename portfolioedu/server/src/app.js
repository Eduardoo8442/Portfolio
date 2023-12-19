const express = require("express");
const app = express();
const cors = require('cors');
const routes = require("./routes");

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use(routes);

module.exports = app;
