import axios from 'axios';

class UsuarioService {
  constructor() {
    this.apiURL = 'http://localhost:3001/usuario';
  }

  async buscarUsuario(id) {
    try {
      const response = await axios.get(`${this.apiURL}/${id}`);
      console.log("Usuario_services", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error;
    }
  }

  async cadastrarUsuario(data) {
    try {
      const response = await axios.post(this.apiURL, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      throw error;
    }
  }

  async editarUsuario(id, data) {
    try {
      const response = await axios.put(`${this.apiURL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
      throw error;
    }
  }

  async deletarUsuario(id) {
    try {
      const response = await axios.delete(`${this.apiURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      throw error;
    }
  }

  async login(data) {
    try {
      const response = await axios.post(`${this.apiURL}/login`, data);
      console.log("UsuarioService:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }

}

export default new UsuarioService();
