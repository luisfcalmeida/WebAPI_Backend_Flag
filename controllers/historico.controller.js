const Historico = require("../models/historico.model.js");

// Controladores CRUD
const createHistoricos = async (req, res) => {
  try {
    const historico = await Historico.create(req.body);
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).send("Ocorreu um problema inesperado no servidor.");
  }
};

const getHistoricos = async (req, res) => {
  try {
    const historicos = await Historico.find({});
    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const getHistoricosById = async (req, res) => {
  try {
    const { id } = req.params;
    const historico = await Historico.findById(id);
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const updateHistoricos = async (req, res) => {
  try {
    const { id } = req.params;

    const historico = await Historico.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!historico) {
      return res.status(404).json({ message: "Histórico não encontrado." });
    }

    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const deleteHistoricos = async (req, res) => {
  try {
    const { id } = req.params;

    const historico = await Historico.findByIdAndDelete(id);

    if (!historico) {
      return res.status(404).json({ message: "Histórico não encontrado." });
    }

    res.status(200).json({ message: "Histórico eliminado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const getHistoricosPorMatricula = async (req, res) => {
  try {
    const { matricula } = req.params;

    if (!matricula) {
      return res.status(400).json({ message: "Ocorreu um problema com o pedido enviado." });
    }

    const historicos = await Historico.find({
      matriculaVeiculo: matricula,
    }).populate("idFuncionario");

    if (historicos.length === 0) {
      return res.status(404).json({ message: "Histórico não encontrado." });
    }

    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const getHistoricosEntreDatas = async (req, res) => {
  try {
    const { dataInicio, dataFim } = req.query;

    if (!dataInicio || !dataFim) {
      return res.status(400).json({ message: "Ocorreu um problema com o pedido enviado." });
    }

    const inicio = new Date(`${dataInicio}T00:00:00`);
    const fim = new Date(`${dataFim}T23:59:59`);

    if (isNaN(inicio) || isNaN(fim)) {
      return res.status(400).json({ message: "Ocorreu um problema com o pedido enviado." });
    }

    const historicos = await Historico.find({
      $and: [{ dataInicio: { $gte: inicio } }, { dataFim: { $lte: fim } }],
    }).populate("idFuncionario");

    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

const getHistoricosPorMatriculaEntreDatas = async (req, res) => {
  try {
    const { matricula } = req.params;
    const { dataInicio, dataFim } = req.query;

    const inicio = new Date(`${dataInicio}T00:00:00`);
    const fim = new Date(`${dataFim}T23:59:59`);

    const historicos = await Historico.find({
      matriculaVeiculo: matricula,
      dataInicio: { $gte: inicio },
      dataFim: { $lte: fim },
    }).populate("idFuncionario");

    if (historicos.length === 0) {
      return res.status(404).json({ message: "Histórico não encontrado." });
    }

    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um problema inesperado no servidor." });
  }
};

module.exports = {
  getHistoricos,
  getHistoricosById,
  createHistoricos,
  updateHistoricos,
  deleteHistoricos,
  getHistoricosPorMatricula,
  getHistoricosEntreDatas,
  getHistoricosPorMatriculaEntreDatas,
};
