const Compra = require('../classes/Compra');
const db = require('../db');

class CompraController {
  constructor() {
    this.compra = new Compra(db);
  }

  async getCompra(req, res) {
    try {
      const result = await this.compra.getCompra(req.params.id_usuario);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao buscar compra");
    }
  }

  async addCompra(req, res) {
    try {
      const result = await this.compra.addCompra(req.body);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao cadastrar compra");
    }
  }

  async editCompra(req, res) {
    try {
      const result = await this.compra.editCompra(req.params.id, req.body);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao atualizar compra");
    }
  }

  async compraFinal(req, res) {
    try {
      const result = await this.compra.compraFinal(req.params.id, req.params.status_compra);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao atualizar compra");
    }
  }

  async deleteCompra(req, res) {
    try {
      const result = await this.compra.deleteCompra(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao deletar compra");
    }
  }

  async getCompraFinalizado(req, res) {
    try {
      const result = await this.compra.getCompraFinalizado(req.params.id_usuario);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao buscar compras finalizadas");
    }
  }
}

module.exports = new CompraController();
