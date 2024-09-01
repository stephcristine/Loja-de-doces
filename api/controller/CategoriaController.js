const Categoria = require('../classes/Categoria');
const db = require('../db');

class CategoriaController {
  constructor() {
    this.categorias = new Categoria(db);
  }

  async getCategoria(req, res) {
    try {
      const result = await this.categorias.getCategoria();
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new CategoriaController();