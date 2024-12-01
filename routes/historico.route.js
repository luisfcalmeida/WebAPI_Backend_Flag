const express = require("express");
const router = express.Router();

const Historico = require("../models/historico.model.js");

const { getHistoricos } = require("../controllers/historico.controller.js");
const { getHistoricosById } = require("../controllers/historico.controller.js");
const { createHistoricos } = require("../controllers/historico.controller.js");
const { updateHistoricos } = require("../controllers/historico.controller.js");
const { deleteHistoricos } = require("../controllers/historico.controller.js");

router.get("/", getHistoricos);

router.get("/:id", getHistoricosById);

router.post("/", createHistoricos);

router.put("/:id", updateHistoricos);

router.delete("/:id", deleteHistoricos);

module.exports = router;
