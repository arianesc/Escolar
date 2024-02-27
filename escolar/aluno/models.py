from django.db import models


class Aluno(models.Model):
    matricula = models.IntegerField(unique=True)
    nome = models.CharField("nome", max_length=225)
    email = models.EmailField(max_length=70, unique=True)
    data_de_nascimento = models.DateField("data de nascimento")

    def __str__(self):
        return f"{self.nome}: {self.matricula}"
