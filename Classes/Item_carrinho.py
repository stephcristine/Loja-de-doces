from Carrinho import *
from Produto import *

class Item_carrinho(Produto, Carrinho):
    def __init__(self, qtd, itens, nome, desc, nomeP ):
        super().__init__(itens, nome, desc, nomeP)
        self.qtd_item = qtd
        self.itens = itens

    def mostrar_item_car(self):
        print("="*10, "ITENS CARRINHO","="*10)
        print("| QUANTIDADE: ", self.qtd_item)
        print("| ITEM: ", self.nome)
        print("="*30)