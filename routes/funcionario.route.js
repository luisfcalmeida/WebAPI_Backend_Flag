// Importação dos módulos
const express = require("express");
const router = express.Router();

// Importação do modelo
const Funcionario = require("../models/funcionario.model.js");

// Importação dos controladores
const { getFuncionarios } = require('../controllers/funcionario.controller.js');
const { getFuncionariosById } = require('../controllers/funcionario.controller.js');
const { createFuncionarios } = require('../controllers/funcionario.controller.js');
const { updateFuncionarios } = require('../controllers/funcionario.controller.js');
const { deleteFuncionarios } = require('../controllers/funcionario.controller.js');

// Rotas CRUD
router.get('/', getFuncionarios);
router.get('/:id', getFuncionariosById);
router.post('/', createFuncionarios);
router.put('/:id', updateFuncionarios);
router.delete('/:id', deleteFuncionarios);

// Export das rotas
module.exports = router;