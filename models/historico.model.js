const mongoose = require("mongoose");

// Criação do Schema para a collection 'Histórico'
const HistoricoSchema = new mongoose.Schema(
  {
    matriculaVeiculo: { type: String, required: true },

    idFuncionario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Funcionario",
      required: true,
    },

    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
    kmInicio: { type: Number, required: true },
    kmFim: { type: Number, required: true },
    descricaoRota: { type: String, required: true },
  },

  { timestamps: true }
);

// Middleware que valida se o funcionário existe antes de guardar o histórico
HistoricoSchema.pre("save", async function (next) {
  const Funcionario = mongoose.model("Funcionario");

  try {
    const funcionarioExiste = await Funcionario.exists({
      _id: this.idFuncionario,
    });

    if (!funcionarioExiste) {
      return next(new Error("Funcionário não encontrado..."));
    }

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Historico", HistoricoSchema);
