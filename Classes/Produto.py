from Categoria import * 

class Produto(Categoria):
  def __init__(self, nome, preco, desc, nomeP):
    super().__init__(nomeP)
    self.nome = nome
    self.preco =  preco
    self.descricao = desc

  def mostrar(self):
    print("="*10, "PRODUTO","="*10)
    print("| CATEGORIA: ", self.nomeP)
    print("| NOME PRODUTO: ", self.nome)
    print("| PREÇO: ", self.preco)
    print("| DESCRIÇÃO: ", self.descricao)
    print("="*30)
    