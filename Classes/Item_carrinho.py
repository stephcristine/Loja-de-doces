from Carrinho import *

class Item_carrinho(Carrinho):
    def __init__(self, qtd, itens):
        super().__init__(itens)
        self.qtd_item = qtd