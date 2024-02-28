from rest_framework import serializers
from aluno.models import Aluno
# from curso.serializers import CursoSerializer

class AlunoSerializer(serializers.ModelSerializer):
    # cursos = CursoSerializer(many=True)

    class Meta:
        model = Aluno
        fields = ["id", "nome", "email", "data_de_nascimento", "matricula"]
        extra_kwargs = {'matricula': {'read_only': True}}