-- Create a new schema (database) if it doesn't exist
CREATE DATABASE IF NOT EXISTS loja_de_doces;
USE loja_de_doces;

-- Create the Produto table
CREATE TABLE Produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo ENUM('bombom', 'doce') NOT NULL,
    descricao TEXT,
    chocolate VARCHAR(255) NULL
);

-- Create the Compra table
CREATE TABLE Compra (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES Produto(id)
);
