from django.db import models
from aluno.models import Aluno


class Curso(models.Model):
    codigo = models.IntegerField(unique=True)
    nome = models.CharField("nome", max_length=225)
    descricao = models.CharField("descrição", max_length=225)

    def __str__(self):
        return f"{self.nome}: {self.codigo}"


class CursoAluno(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    aluno = models.ForeignKey(Aluno, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.aluno}: {self.curso}"

