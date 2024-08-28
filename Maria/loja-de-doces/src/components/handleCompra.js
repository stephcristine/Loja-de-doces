import axios from 'axios';

// Function to handle adding a purchase
const handleCompra = async (itemName, chocolateFlavor, quantity) => {
    try {
        // Get the product ID based on itemName and chocolateFlavor (if applicable)
        const response = await axios.get('http://localhost:5000/getProdutoId', {
            params: {
                nome: itemName,
                chocolate: chocolateFlavor
            }
        });

        const produtoId = response.data.id;

        console.log('Produto ID:', produtoId); // Log the produtoId
        console.log('Quantity:', quantity); // Log the quantity

        // Check if produtoId is valid
        if (!produtoId || quantity === undefined || quantity === null) {
            throw new Error('Dados inválidos: produtoId ou quantidade ausentes.');
        }

        // Add the purchase
        await axios.post('http://localhost:5000/addCompra', {
            produtoId,
            quantidade: quantity
        });

        alert('Compra adicionada com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar compra:', error);
        alert('Erro ao adicionar compra.');
    }
};

export default handleCompra;
