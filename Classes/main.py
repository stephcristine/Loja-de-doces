from Item_compra import * 
from Produto import * 
from Categoria import * 


categoria1 = Categoria("Doces")

doce1 = Produto("Brigadeiro", 2.00, "Brigadeiro com chocolate 50%", categoria1)

doce1.mostrar()
