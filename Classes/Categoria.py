class Categoria():
  def __init__(self,nomeP):
    self.nomeP = nomeP

  def mostrarCate(self):
    print("="*10, "CATEGORIA","="*10)
    print("| NOME: ", self.nomeP)
    print("="*30)