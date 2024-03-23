from Produto import * 
from Compra import * 

class Item_compra(Produto, Compra):
  def __init__(self, qtd_compra, nome, total, descricao, nomeP):
    super().__init__(nome, total, descricao, nomeP)
    self.qtd_item_compra = qtd_compra
    self.total = total

  def mostrar_item_comp(self):
    print("="*10, "ITEM COMPRA","="*10)
    print("| QUANTIDADE COMPRA: ", self.qtd_item_compra)
    print("| NOME PRODUTO: ", self.nome)
    print("| TOTAL: ", self.total)
    print("="*30)

  