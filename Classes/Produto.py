from Categoria import * 

class Produto(Categoria):
  def __init__(self, nome, preco, desc, nomeP):
    super().__init__(nomeP)
    self.nome = nome
    self.preco =  preco
    self.descricao = desc

  def mostrar(self):
    self.mostrarCate()
    print("Nome:", self.nome, "\nPreço:", self.preco, "\nDescrição:", self.descricao)
    

#"Categoria:", self.nomeP, 


