const Funcionario = require("../models/funcionario.model.js");

// Controladores CRUD
const createFuncionarios = async (req, res) => {
  try {
    const funcionario = await Funcionario.create(req.body);
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).send("Ocorreu um problema inesperado no servidor.");
  }
};

const getFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.find({});
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const getFuncionariosById = async (req, res) => {
  try {
    const { id } = req.params;
    const funcionario = await Funcionario.findById(id);
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const updateFuncionarios = async (req, res) => {
  try {
    const { id } = req.params;

    const funcionario = await Funcionario.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!funcionario) {
      return res.status(404).json({ message: "Funcionário não encontrado." });
    }

    res.status(200).json(funcionario);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const deleteFuncionarios = async (req, res) => {
  try {
    const { id } = req.params;

    const funcionario = await Funcionario.findByIdAndDelete(id);

    if (!funcionario) {
      return res.status(404).json({ message: "Funcionário não encontrado." });
    }

    res.status(200).json({ message: "Funcionário eliminado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

module.exports = {
  getFuncionarios,
  getFuncionariosById,
  createFuncionarios,
  updateFuncionarios,
  deleteFuncionarios,
};
