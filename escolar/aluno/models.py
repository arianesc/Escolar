from django.db import models
from aluno.utils import gerar_codigo


class Aluno(models.Model):

    matricula = models.CharField(
        max_length=16,
        null=True,
        editable=False,
        default=lambda: gerar_codigo(prefix="mat", length=20),
        help_text="matricula",
        unique=True
    )
    nome = models.CharField("nome", max_length=225)
    email = models.EmailField(max_length=70, unique=True)
    data_de_nascimento = models.DateField("data de nascimento")

    def __str__(self):
        return f"{self.nome}: {self.matricula}"
