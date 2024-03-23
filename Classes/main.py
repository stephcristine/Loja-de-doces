from Item_compra import * 
from Produto import * 
from Categoria import * 
from Endereco import * 
from Compra import * 
from Carrinho import * 
from Usuario import * 
from Item_carrinho import * 

endereco1 = Endereco(12345678, "Maria Cecília", "Homero Cruz", 208)

usuario1 = Usuario("Ana", "Silva", "18/02/1995", "anasilva@gmail.com", "aninha123", endereco1.cep, endereco1.bairro, endereco1.rua, endereco1.num_casa)

categoria1 = Categoria("Doces")

doce1 = Produto("Brigadeiro", 2.00, "Brigadeiro com chocolate 50%", categoria1.nomeP)

compra1 = Compra(20.00, usuario1.nome, usuario1.sobrenome, usuario1.data_nasc, usuario1.email, usuario1.senha, endereco1.cep, endereco1.bairro, endereco1.rua, endereco1.num_casa)

carrinho1 = Carrinho(1)

item_car = Item_carrinho(2, carrinho1.itens, doce1.nome, doce1.descricao, doce1.nomeP)

item_comp1 = Item_compra(2, doce1.nome, compra1.total, doce1.descricao, doce1.nomeP)


doce1.mostrar()
usuario1.mostrar_usuario()
compra1.mostrar_compra()
item_car.mostrar_item_car()
item_comp1.mostrar_item_comp()