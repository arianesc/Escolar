from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from aluno.views import AlunoViewSet
from curso.views import CursoViewSet, CursoAlunoViewSet
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'alunos', AlunoViewSet)
router.register(r'cursos', CursoViewSet)
router.register(r'cursos_alunos', CursoAlunoViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('index', TemplateView.as_view(template_name='index.html')),
]
