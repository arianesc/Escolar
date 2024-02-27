from rest_framework import serializers
from curso.models import Curso, CursoAluno


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ["id", "nome", "descricao", "codigo"]
        extra_kwargs = {'codigo': {'read_only': True}}


class CursoAlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CursoAluno
        fields = '__all__'