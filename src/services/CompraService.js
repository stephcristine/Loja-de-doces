import axios from 'axios';

class CompraService {
  constructor() {
    this.apiURL = 'http://localhost:3001/compra';
  }

  async buscarCompra(id) {
    try {
      const response = await axios.get(`${this.apiURL}/${id}`);
      console.log("Compra_services", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar compra:", error);
      throw error;
    }
  }

  async buscarCompraFinalizada(id_usuario) {
    try {
      const response = await axios.get(`${this.apiURL}/${id_usuario}/finalizadas`);
      console.log("Compra_services", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar compra:", error);
      throw error;
    }
  }

  async cadastrarCompra(data) {
    try {
      const response = await axios.post(this.apiURL, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar compra:", error);
      throw error;
    }
  }

  async editarCompra(id, data) {
    try {
      const response = await axios.put(`${this.apiURL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar Compra:", error);
      throw error;
    }
  }

  async deletarCompra(id) {
    try {
      const response = await axios.delete(`${this.apiURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar Compra:", error);
      throw error;
    }
  }

}

export default new CompraService();
