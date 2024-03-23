class Endereco():
    def __init__(self, cep, bairro, rua, casa):
        self.cep = cep
        self.bairro = bairro
        self.rua = rua
        self.casa = casa


class Usuario(Endereco):
    def __init__(self, nome, sobrenome, data_nasc, email, senha, cep):
        super().__init__(cep)
        self.nome = nome
        self.sobrenome = sobrenome
        self.data_nasc = data_nasc
        self.email = email
        self.senha = senha