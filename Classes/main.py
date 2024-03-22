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


#categoria1 = Categoria("Doces")
#
#doce1 = Produto("Brigadeiro", 2.00, "Brigadeiro com chocolate 50%", categoria1.nomeP)
#
#doce1.mostrar()

usuario1.mostrar_usuario()
