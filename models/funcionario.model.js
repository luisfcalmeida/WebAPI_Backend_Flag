const mongoose = require("mongoose");

const FuncionarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    funcao: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Funcionario", FuncionarioSchema);
