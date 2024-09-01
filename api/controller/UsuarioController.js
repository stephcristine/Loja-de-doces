const Usuario = require('../classes/Usuario');
const db = require('../db');

class UsuarioController{
  constructor() {
    this.usuarios = new Usuario(db);
  }

  async getUsuarios(req, res) {
    try {
      const result = await this.usuarios.getUsuario(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async addUsuario(req, res) {

    try {
      await this.usuarios.addUsuario(req.body);
      res.status(200).send("Usuário cadastrado com sucesso.");
    } catch (err) {
      res.status(500).send("Erro ao cadastrar usuário.");
    }
  }

  async editUsuario(req, res) {
    try {
      const result = await this.usuarios.editUsuario(req.body, req.params.id);
      res.status(200).send(result);
      console.log('Dados recebidos:', { result });
    } catch (error) {
      res.status(500).send(error);
      console.log('Erro ao editar usuário:', error);
    }
  }

  async deleteUsuario(req, res) {
    try {
      const result = await this.usuarios.deleteUsuario(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async login(req, res) {
    const { email, senha } = req.body;
    try {
      const usuario = await this.usuarios.login(email, senha);
      if (usuario) {
        res.json({ success: true, data: usuario });
      } else {
        res.status(401).json({ success: false, message: "Credenciais inválidas" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro ao fazer login" });
    }
  }

}

module.exports = new UsuarioController();