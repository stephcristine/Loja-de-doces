from Usuario import *

class Compra(Usuario):
    def __init__(self, total, nomeU, sobrenome, data_nasc, email, senha, cep, bairro, rua, num_casa):
        super().__init__(nomeU, sobrenome, data_nasc, email, senha, cep, bairro, rua, num_casa)
        self.total = total

    def mostrar_compra(self):
        print("="*10, "COMPRA","="*10)
        print("| USUÁRIO: ", self.nome)
        print("| TOTAL COMPRA: ", self.total)
        print("="*30)