class Endereco:
    def __init__(self, cep, bairro, rua, num_casa):
        self.cep = cep  
        self.bairro = bairro
        self.rua = rua 
        self.num_casa = num_casa
    
    def mostrar_endereco(self):
        print("="*10, "ENDEREÇO","="*10)
        print("| CEP: ", self.cep)
        print("| Bairro: ", self.bairro)
        print("| Rua: ", self.rua)
        print("| Número da Casa: ", self.num_casa)
        print("="*30)
      