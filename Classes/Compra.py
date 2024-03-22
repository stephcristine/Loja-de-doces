from Usuario import *

class Compra(Usuario):
    def __init__(self, total, nomeU):
        super().__init__(nomeU)
        self.total = total