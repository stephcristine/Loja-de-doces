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


class Compra(Usuario):
    def __init__(self, total, nomeU):
        super().__init__(nomeU)
        self.total = total


class Carrinho():
    def __init__(self, item):
        self.item = item


class Item_carrinho(Carrinho):
    def __init__(self, qtd, itens):
        super().__init__(itens)
        self.qtd_item = qtd