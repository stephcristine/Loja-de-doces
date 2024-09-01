const Produto = require('../classes/Produto');
const db = require('../db');

class ProdutoController {
  constructor() {
    this.produtos = new Produto(db);
  }

  async getProdutos(req, res) {
    try {
      const result = await this.produtos.getProdutos();
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

}

module.exports = new ProdutoController();
