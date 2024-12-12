const express = require("express");
const router = express.Router();

const Historico = require("../models/historico.model.js");

const { createHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricosById } = require("../controllers/historico.controller.js");
const { updateHistoricos } = require("../controllers/historico.controller.js");
const { deleteHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricosPorMatricula } = require("../controllers/historico.controller.js");

router.post("/", createHistoricos);

router.get("/", getHistoricos);

router.get("/:id", getHistoricosById);

router.put("/:id", updateHistoricos);

router.delete("/:id", deleteHistoricos);

router.get('/matricula/:matricula', getHistoricosPorMatricula);

module.exports = router;
