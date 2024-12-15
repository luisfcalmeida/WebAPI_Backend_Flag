const mongoose = require("mongoose");

// Criação do Schema para a collection 'Funcionário'
const FuncionarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    funcao: { type: String, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Funcionario", FuncionarioSchema);
