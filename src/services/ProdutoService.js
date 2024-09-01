import axios from 'axios';

class ProdutoService {
  constructor() {
    this.apiUrl = 'http://localhost:3001/produto';
  }

  async buscarProdutos() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
      throw error;
    }
  }
}

export default new ProdutoService();
