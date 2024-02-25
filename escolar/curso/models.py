from django.db import models

class Curso(models.Model):
    nome = models.CharField("nome", max_lengh=225)
    descricao = models.CharField("descrição", max_length=225)

    def __str__(self):
        return self.nome