/*Produto:
 - nome
 - quantidade
 - id_mercado
 - id_fornecedor */

const mercado = require("../controllers/mercado");
const fornecedor = require("../controllers/fornecedor");

const model = (body) => {
  if (
    nome.body != undefined &&
    nome.body != "" &&
    quantidade.body > 0 &&
    mercado.show(body.id_mercado) &&
    fornecedor.show(body.id_fornecedor)
  ) {
    return {
        nome: nome.body,
        quantidade: quantidade.body,
        id_mercado: body.id_mercado,
        id_fornecedor: body.id_fornecedor
    }
  }
};

module.exports = model