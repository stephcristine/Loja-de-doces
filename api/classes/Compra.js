class Compra {
  constructor(db) {
    this.db = db;
  }

  async getCompra(id_usuario) {
    const SQL = `
      SELECT 
        id_compra,
        data_compra AS data_compra,
        GROUP_CONCAT(produto.nome_produto SEPARATOR ', ') AS produtos,
        SUM(qtd_produto) AS quantidade_total,
        SUM(produto.preco_produto * compra.qtd_produto) AS valor_total
      FROM compra
      JOIN produto ON compra.id_produto = produto.id_produto
      WHERE id_usuario = ? AND status_compra = 'pendente'
      GROUP BY data_compra, status_compra
      ORDER BY data_compra DESC
    `;
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [id_usuario], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao buscar compra");
        } else {
          resolve(result);
          console.log("Dados do banco: ", result);
        }
      });
    });
  }

  async addCompra(dados) {
    const { qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario } = dados;
    const SQL = "INSERT INTO compra (qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario) VALUES (?, ?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [qtd_produto, status_compra, id_produto, id_categoria_produto, id_usuario], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao cadastrar compra");
        } else {
          resolve("Compra cadastrada com sucesso");
        }
      });
    });
  }

  async editCompra(id, dados) {
    const { qtd_produto, id_produto, id_categoria_produto } = dados;
    const SQL = "UPDATE compra SET qtd_produto = ?, id_produto = ?, id_categoria_produto = ? WHERE id_compra = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [qtd_produto, id_produto, id_categoria_produto, id], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao atualizar compra");
        } else {
          resolve("Compra atualizada com sucesso");
        }
      });
    });
  }

  async compraFinal(id, status_compra) {
    const SQL = "UPDATE compra SET status_compra = ? WHERE id_compra = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [status_compra, id], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao atualizar compra");
        } else {
          resolve("Compra atualizada com sucesso");
        }
      });
    });
  }

  async deleteCompra(id) {
    const SQL = "DELETE FROM compra WHERE id_compra = ?";
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [id], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao deletar compra");
        } else if (result.affectedRows === 0) {
          reject("Compra não encontrada");
        } else {
          resolve("Compra deletada com sucesso");
        }
      });
    });
  }

  async getCompraFinalizado(id_usuario) {
    const SQL = `
      SELECT 
        data_compra AS data_compra,
        GROUP_CONCAT(produto.nome_produto SEPARATOR ', ') AS produtos,
        SUM(qtd_produto) AS quantidade_total,
        SUM(produto.preco_produto * compra.qtd_produto) AS valor_total
      FROM compra
      JOIN produto ON compra.id_produto = produto.id_produto
      WHERE id_usuario = ? AND status_compra = 'finalizado'
      GROUP BY data_compra, status_compra
      ORDER BY data_compra DESC
    `;
    console.log(`Executando SQL: ${SQL} com id_usuario: ${id_usuario}`)
    return new Promise((resolve, reject) => {
      this.db.query(SQL, [id_usuario], (err, result) => {
        if (err) {
          console.log(err);
          reject("Erro ao buscar compras finalizadas");
        } else {
          resolve(result);
          console.log("Compras Finalizadas:", result);
        }
      });
    });
  }
}

module.exports = Compra;
