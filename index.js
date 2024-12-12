// Importação dos módulos necessários
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Importação dos modelos
const Funcionario = require("./models/funcionario.model.js");
const Historico = require("./models/historico.model.js");

// Importação das rotas
const funcionarioRoute = require("./routes/funcionario.route.js");
const historicoRoute = require("./routes/historico.route.js");

// Conexão à base de dados MongoDB
mongoose
  .connect("mongodb+srv://luisfca:aDhd0V5dfufAQh8s@backenddb.rxpjv.mongodb.net/BackendDB?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database...");

    app.listen(3000, () => {
      console.log("Server is running on port 3000...");
    });
  })
  .catch(() => {
    console.log("Connection failed...");
  });

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas
app.use("/api/funcionarios", funcionarioRoute);
app.use("/api/historicos", historicoRoute);
