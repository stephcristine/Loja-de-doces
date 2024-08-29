import axios from 'axios';
import { toast } from 'react-toastify';

export default async function handleCompra (values) {
    try {
        console.log("Enviando dados:", values);
        await axios.post("http://localhost:3001/compra", {
            qtd_produto: values.qtd_produto,
            status_compra: values.status_compra,
            id_produto: values.id_produto,
            id_categoria_produto: values.id_categoria_produto,
            id_usuario: values.id_usuario,
        });
        toast.success("Produto adicionado ao carrinho com sucesso!");
    } catch (error) {
        console.log("Erro ao adicionar ao carrinho:", error);
        toast.error("Erro ao adicionar ao carrinho.");
    }
};
