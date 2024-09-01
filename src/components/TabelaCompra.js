import React, { Component } from 'react';
import '../View/TabelaCompra.css';

class TabelaCompra extends Component {
  render() {
    const { items } = this.props;

    if (!items || items.length === 0) {
      return <p>Nenhum item encontrado.</p>; 
    }

    return (
      <table className="user-table">
        <thead>
          <tr>
            <th className="ITEM">ITEM</th>
            <th className="VALOR">VALOR</th>
          </tr>
        </thead>
        <tbody>
          {items.map(compra => (
            <tr key={compra.id_compra}>
              <td className="item">{compra.item}</td>
              <td className="value">R${compra.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TabelaCompra;
