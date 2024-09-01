import React, { Component } from 'react';
import '../View/TabelaHistorico.css';

class TabelaHistorico extends Component {
  render() {
    const { items } = this.props;

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
              <td className="historyitem">{compra.item}</td>
              <td className="historyvalue">R${compra.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TabelaHistorico;