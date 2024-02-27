from rest_framework import viewsets, status
from aluno.models import Aluno
from aluno.serializers import AlunoSerializer


class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer
