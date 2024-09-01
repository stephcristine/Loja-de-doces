import axios from 'axios';

class CategoriaService {
  constructor() {
    this.apiUrl = 'http://localhost:3001/categoria';
  }

  async buscarCategorias() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as categorias:', error);
      throw error;
    }
  }
}

export default new CategoriaService();