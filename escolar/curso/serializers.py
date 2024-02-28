from rest_framework import serializers
from curso.models import Curso, CursoAluno
from aluno.serializers import AlunoSerializer


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ["id", "nome", "descricao", "codigo"]
        extra_kwargs = {'codigo': {'read_only': True}}


class CursoAlunoSerializer(serializers.ModelSerializer):
    # aluno = AlunoSerializer()
    # curso = CursoSerializer()

    class Meta:
        model = CursoAluno
        fields = ["id", "curso", "aluno"]