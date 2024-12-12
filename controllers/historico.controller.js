const Historico = require("../models/historico.model.js");

const createHistoricos = async (req, res) => {
  try {
    const historico = await Historico.create(req.body);
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getHistoricos = async (req, res) => {
  try {
    const historicos = await Historico.find({});
    res.status(200).json(historicos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getHistoricosById = async (req, res) => {
  try {
    const { id } = req.params;
    const historico = await Historico.findById(id);
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHistoricos = async (req, res) => {
  try {
    const { id } = req.params;

    const historico = await Historico.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!historico) {
      return res.status(404).json({ message: "Histórico não encontrado..." });
    }

    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteHistoricos = async (req, res) => {
  try {
    const { id } = req.params;

    const historico = await Historico.findByIdAndDelete(id);

    if (!historico) {
      return res.status(404).json({ message: "Histórico não encontrado..." });
    }

    res.status(200).json({ message: "Histórico eliminado com sucesso..." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const getHistoricosPorMatricula = async (req, res) => {
  try {
    const { matricula } = req.params;

    if (!matricula) {
      return res.status(400).json({ message: error.message });
    }

    const historicos = await Historico.find({ matriculaVeiculo: matricula })
    .populate('idFuncionario');

    if (historicos.length === 0) {
      return res.status(404).json({ message: error.message });
    }

    res.status(200).json(historicos);

  } catch (error) {
    res.status(500).json({ message:error.message });
  }
}


module.exports = {
  getHistoricos,
  getHistoricosById,
  createHistoricos,
  updateHistoricos,
  deleteHistoricos,
  getHistoricosPorMatricula
};
