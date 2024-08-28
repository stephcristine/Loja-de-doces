const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_de_doces'
});

app.use(bodyParser.json());

app.post('/addCompra', (req, res) => {
    const { produtoId, quantidade } = req.body;

    console.log('Dados recebidos:', { produtoId, quantidade }); // Log dos dados recebidos

    if (!produtoId || !quantidade) {
        console.error('Dados incompletos:', { produtoId, quantidade });
        return res.status(400).send('Dados incompletos.');
    }

    const insertQuery = 'INSERT INTO compra (produto_id, quantidade) VALUES (?, ?)';
    db.query(insertQuery, [produtoId, quantidade], (err, results) => {
        if (err) {
            console.error('Erro ao inserir compra:', err);
            return res.status(500).send('Erro ao inserir compra.');
        }
        res.send('Compra adicionada com sucesso.');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
