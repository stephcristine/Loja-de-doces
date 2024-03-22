from Endereco import *

class Usuario(Endereco):
    def __init__(self, nome, sobrenome, data_nasc, email, senha, cep):
        super().__init__(cep)
        self.nome = nome  
        self.sobrenome = sobrenome
        self.data_nasc = data_nasc
        self.email = email
        self.senha = senha
        
    
    def mostrar_usuario(self):
        print("="*6, "DADOS DO USUÁRIO","="*6)
        print("| Nome: ", self.nome)
        print("| Sobrenome: ", self.sobrenome)
        print("| Data de Nascimento: ", self.data_nasc)
        print("| Email: ", self.email)
        print("| Senha: ", self.senha)
        print("\n")
        self.mostrar_endereco()
        

