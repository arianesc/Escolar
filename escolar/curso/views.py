from rest_framework import viewsets
from curso.models import Curso, CursoAluno
from curso.serializers import CursoSerializer, CursoAlunoSerializer


class CursoViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer


class CursoAlunoViewSet(viewsets.ModelViewSet):
    queryset = CursoAluno.objects.all()
    serializer_class = CursoAlunoSerializer
