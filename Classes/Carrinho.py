class Carrinho():
    def __init__(self, item):
        self.itens = item

    def mostrar_carrinho(self):
        print("="*10, "CARRINHO","="*10)
        print("| ITENS: ", self.itens)
        print("="*30)
