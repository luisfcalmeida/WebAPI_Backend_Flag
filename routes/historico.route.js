// Importação dos módulos necessários
const express = require("express");
const router = express.Router();

// Importação do modelo
const Historico = require("../models/historico.model.js");

// Importação dos controladores
const { createHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricosById } = require("../controllers/historico.controller.js");
const { updateHistoricos } = require("../controllers/historico.controller.js");
const { deleteHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricosPorMatricula } = require("../controllers/historico.controller.js");

// Rotas CRUD
router.post("/", createHistoricos);
router.get("/", getHistoricos);
router.get("/:id", getHistoricosById);
router.put("/:id", updateHistoricos);
router.delete("/:id", deleteHistoricos);
router.get('/matricula/:matricula', getHistoricosPorMatricula);

// Export das rotas
module.exports = router;
