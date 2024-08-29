import React from 'react';
import '../View/TabelaCompra.css';

const TabelaCompra = ({ items }) => {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th className="ITEM">ITEM</th>
                    <th className="VALOR">VALOR</th>
                </tr>
            </thead>
            <tbody>
                {/* TESTE DE VISUALIZAÇÃO, PODE APAGAR DEPOIS */}
                    <tr>
                        <td className="item">itemitemitemitemitemitemitemitemitemitem</td>
                        <td className="value">R$R$R$R$</td>
                    </tr>
                {items.map(compra => (
                    <tr key={compra.id_compra}>
                        <td className="item">{compra.item}</td>
                        <td className="value">R${compra.valor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TabelaCompra;
