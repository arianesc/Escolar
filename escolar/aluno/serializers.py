from rest_framework import serializers
from aluno.models import Aluno


class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ["id", "nome", "email", "data_de_nascimento", "matricula"]
        extra_kwargs = {'matricula': {'read_only': True}}