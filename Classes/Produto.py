class Produto():
  def __init__(self, preco, desc, nome):
    self.nome = nome
    self.preco =  preco
    self.descricao = desc

  def lista(self):
    self.listanome = []
    self.listapreco = []
    self.listadesc = []

    if self.nome == True:
      self.listanome = self.listanome.append(self.nome)

