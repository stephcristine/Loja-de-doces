import React from 'react';
import '../View/TabelaHistorico.css';

const TabelaHistorico = ({ items }) => {
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
                        <td className="historyitem">itemitemitemitemitemitemitemitemitemitem</td>
                        <td className="historyvalue">R$000R$</td>
                    </tr>
                {items.map(compra => (
                    <tr key={compra.id_compra}>
                        <td className="historyitem">{compra.item}</td>
                        <td className="value">R${compra.valor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TabelaHistorico;
